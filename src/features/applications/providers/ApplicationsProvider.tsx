"use client";

import {
    createContext,
    useContext,
    useSyncExternalStore,
    type ReactNode,
} from "react";
import { useApplications } from "@/features/applications/hooks/useApplications";

type ApplicationsContextValue = ReturnType<typeof useApplications>;

const ApplicationsContext = 
  createContext<ApplicationsContextValue | null>(null);

type ApplicationsProviderProps = {
    children: ReactNode;
};

function subscribe() {
    return () => {};
}

function getClientSnapshot() {
    return true;
}

function getServerSnapshot() {
    return false;
}

function useIsClient() {
    return useSyncExternalStore(
        subscribe,
        getClientSnapshot,
        getServerSnapshot
    );
}

export function ApplicationsProvider({
    children,
}: ApplicationsProviderProps) {
    const isClient = useIsClient();

    if (!isClient) {
        return null;
    }

    return (
        <ApplicationsProviderInner>
            {children}
        </ApplicationsProviderInner>
    );
}

function ApplicationsProviderInner({
    children,
}: ApplicationsProviderProps) {
    const applicationsState = useApplications();

    return (
        <ApplicationsContext.Provider value={applicationsState}>
            {children}
        </ApplicationsContext.Provider>
    );
}

export function useApplicationsContext() {
    const context = useContext(ApplicationsContext);

    if (!context) {
        throw new Error(
            "useApplicationsContext must be used inside ApplicationsProvider"
        );
    }

    return context;
}
