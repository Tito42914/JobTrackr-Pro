import type { JobApplication } from "@/types/application";
import StatusBadge from "./StatusBadge";
import Link from "next/link";

type ApplicationCardProps = {
    application: JobApplication;
};

export default function ApplicationCard({
    application,
}: ApplicationCardProps) {
    return (
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-slate-300 hover:shadow-md">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <h2 className="text-lg font-semibold text-slate-950">
                        <Link 
                          href={`/applications/${application.id}`}
                          className="hover:text-blue-700"
                        >
                          {application.role}
                        </Link>
                    </h2>
                    <p className="mt-1 text-sm font-medium text-slate-700">
                        {application.company}
                    </p>
                </div>
            
                <StatusBadge status={application.status} />
            </div>

            <div className="mt-4 grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
                <p>
                    <span className="font-medium text-slate-800">Location:</span>{" "}
                    {application.location}
                </p>
                <p>
                    <span className="font-medium text-slate-800">Applied:</span>{" "} 
                    {application.dateApplied}
                </p>
            </div>
        </article>
    );
}