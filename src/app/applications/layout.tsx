import { ApplicationsProvider } from "@/features/applications/providers/ApplicationsProvider";

type ApplicationsLayoutProps = {
    children: React.ReactNode;
};

export default function ApplicationsLayout({
    children,
}: ApplicationsLayoutProps) {
    return <ApplicationsProvider>{children}</ApplicationsProvider>;
}