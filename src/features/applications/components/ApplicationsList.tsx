"use client";

import ApplicationCard from "./ApplicationCard";
import { useApplicationsContext } from "../providers/ApplicationsProvider";

export default function ApplicationsList() {
    const { applications } = useApplicationsContext();

    if (applications.length === 0) {
        return (
            <p className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-sm text-slate-600">
                No applications yet.
            </p>
        );
    }

    return (
        <section className="grid gap-4">
            {applications.map((application) => (
                <ApplicationCard
                  key={application.id}
                  application={application}
                />
            ))}
        </section>
    );
}