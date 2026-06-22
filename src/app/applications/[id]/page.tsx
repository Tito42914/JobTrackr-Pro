import Link from "next/link";
import { notFound } from "next/navigation";
import { starterApplications } from "@/data/starterApplications";
import StatusBadge from "@/features/applications/components/StatusBadge";

type ApplicationDetailsPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function ApplicationDetailsPage({
    params,
}: ApplicationDetailsPageProps) {
    const { id } = await params;

    const application = starterApplications.find(
        (item) => item.id === id
    );

    if (!application) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-slate-50 px-6 py-10">
            <div className="mx-auto max-w-3xl">
                <Link
                  href="/applications"
                  className="text-sm font-medium text-blue-700 hover:text-blue-800"
                >
                    Back to applications
                </Link>

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
                </article>
            </div>
        </main>
    );
}