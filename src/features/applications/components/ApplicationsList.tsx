"use client";

import { useState } from "react";
import { APPLICATION_STATUSES, APPLICATION_STATUS_LABELS } from "@/constants/applicationStatuses";
import type { ApplicationStatus } from "@/types/application";
import ApplicationCard from "./ApplicationCard";
import { useApplicationsContext } from "../providers/ApplicationsProvider";

export default function ApplicationsList() {
    const { applications } = useApplicationsContext();

    const [searchTerm, setSearchTerm] = useState("");
    const [selectedStatus, setSelectedStatus] = 
      useState<ApplicationStatus | "all">("all");

    const normalisedSearchTerm = searchTerm.trim().toLowerCase();

    const filteredApplications = applications.filter((application) => {
        const matchesSearch = 
            application.company.toLowerCase().includes(normalisedSearchTerm) ||
            application.role.toLowerCase().includes(normalisedSearchTerm) ||
            application.location.toLowerCase().includes(normalisedSearchTerm);
        
        const matchesStatus = 
            selectedStatus === "all" || application.status === selectedStatus;

        return matchesSearch && matchesStatus;
    });

    if (applications.length === 0) {
        return (
            <p className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-sm text-slate-600">
                No applications yet.
            </p>
        );
    }

    return (
        <section className="grid gap-4">
            <div className="grid gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:grid-cols-[1fr_220px]">
                <label className="grid gap-2 text-sm font-medium text-slate-700">
                    Search applications
                    <input
                      type="search"
                      value={searchTerm}
                      onChange={(event) => setSearchTerm(event.target.value)}
                      placeholder="Search by company, role, or location"
                      className="rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    />
                </label>

                <label className="grid gap-2 text-sm font-medium text-slate-700">
                    Filter by status
                    <select
                      value={selectedStatus}
                      onChange={(event) =>
                        setSelectedStatus(event.target.value as ApplicationStatus | "all")
                      }
                      className="rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-950 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    >
                        <option value="all">All statuses</option>
                        {APPLICATION_STATUSES.map((status) => (
                            <option key={status} value={status}>
                                {APPLICATION_STATUS_LABELS[status]}
                            </option>
                        ))}
                    </select>
                </label>
            </div>

            {filteredApplications.length === 0 ? (
                <p className="rounded-2xl border border-dashed border-slate-300 bg-white p-6 text-sm text-slate-600">
                    No applications match your current filters.
                </p>
            ) : (
                filteredApplications.map((application) => (
                  <ApplicationCard
                    key={application.id}
                    application={application}
                  />
                  ))
            )}
        </section>
    );
}