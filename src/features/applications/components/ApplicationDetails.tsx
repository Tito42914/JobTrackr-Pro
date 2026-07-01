"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import StatusBadge from "./StatusBadge";
import { useApplicationsContext } from "../providers/ApplicationsProvider";

type ApplicationDetailsProps = {
    id: string;
};

export default function ApplicationDetails({
    id,
}: ApplicationDetailsProps) {
    const { getApplicationById } = useApplicationsContext();

    const application = getApplicationById(id);

    if (!application) {
        notFound();
    }

    return (
        <article className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                        Application details
                    </p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                        {application.role}
                    </h1>
                    <p className="mt-2 text-lg font-medium text-slate-700">
                        {application.company}
                    </p>
                </div>

                <StatusBadge status={application.status} />
            </div>

            <dl className="mt-8 grid gap-5 sm:grid-cols-2">
                <div>
                    <dt className="text-sm font-medium text-slate-500">Location</dt>
                    <dd className="mt-1 text-base text-slate-950">
                        {application.location}
                    </dd>
                </div>

                <div>
                    <dt className="text-sm font-medium text-slate-500">
                        Date applied
                    </dt>
                    <dd className="mt-1 text-base text-slate-950">
                        {application.dateApplied}
                    </dd>
                </div>

                <div>
                    <dt className="text-sm font-medium text-slate-500">Job link</dt>
                    <dd className="mt-1 text-base text-slate-950">
                        {application.link || "No link saved yet"}
                    </dd>
                </div>

                <div>
                    <dt className="text-sm font-medium text-slate-500">
                        Last updated
                    </dt>
                    <dd className="mt-1 text-base text-slate-950">
                        {application.updatedAt}
                    </dd>
                </div>
            </dl>

            <section className="mt-8">
                <h2 className="text-sm font-medium text-slate-500">Notes</h2>
                <p className="mt-2 rounded-xl bg-slate-50 p-4 text-base text-slate-700">
                    {application.notes || "No notes saved yet"}
                </p>
            </section>

            <div className="mt-8">
                <Link
                  href={`/applications/${application.id}/edit`}
                  className="inline-flex rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800"
                >
                    Edit application
                </Link>
            </div>
        </article>
    );
}