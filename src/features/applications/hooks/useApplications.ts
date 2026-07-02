"use client";

import { useEffect, useState } from "react";
import { starterApplications } from "@/data/starterApplications";
import type {
    JobApplication,
    JobApplicationInput,
} from "@/types/application";

const APPLICATIONS_STORAGE_KEY = "jobtrackr-pro:applications";

function loadStoredApplications() {
    if (typeof window === "undefined") {
        return starterApplications;
    }
    
    const storedApplications = window.localStorage.getItem(
        APPLICATIONS_STORAGE_KEY
    );

    if (!storedApplications) {
        return starterApplications;
    }

    try {
        return JSON.parse(storedApplications) as JobApplication[]; 
    } catch (error) {
        console.error("Failed to parse stored applications:", error);
        return starterApplications;
    }
}

export function useApplications() {
    const [applications, setApplications] =
      useState<JobApplication[]>(loadStoredApplications);
    
    useEffect(() => {
        window.localStorage.setItem(
            APPLICATIONS_STORAGE_KEY,
            JSON.stringify(applications)
        );
    }, [applications]);
    
    const addApplication = (input: JobApplicationInput) => {
        const timestamp = new Date().toISOString();

        const newApplication: JobApplication = {
            ...input,
            id: crypto.randomUUID(),
            createdAt: timestamp,
            updatedAt: timestamp,
        };

        setApplications((currentApplications) => [
            newApplication,
            ...currentApplications,
        ]);
    };

    const updateApplication = (
        id: string,
        input: JobApplicationInput
    ) => {
        const timestamp = new Date().toISOString();

        setApplications((currentApplications) =>
          currentApplications.map((application) =>
            application.id === id
            ? {
                ...application,
                ...input,
                updatedAt: timestamp,
            }
            : application  
          )
        );
    };

    const deleteApplication = (id: string) => {
        setApplications((currentApplications) =>
          currentApplications.filter((application) => application.id !== id)
        );
    };

    const getApplicationById = (id: string) => {
        return applications.find((application) => application.id === id);
    };

    return {
        applications,
        addApplication,
        updateApplication,
        deleteApplication,
        getApplicationById,
    };
}
