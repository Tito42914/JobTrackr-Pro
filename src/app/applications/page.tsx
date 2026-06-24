import Link from "next/link";
import { starterApplications } from "@/data/starterApplications";
import ApplicationCard from "@/features/applications/components/ApplicationCard";

export default function ApplicationsPage() {
    return (
        <main className="min-h-screen bg-slate-50 px-6 py-10">
            <div className="mx-auto max-w-5xl">
                <header className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                        <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                            Applications
                        </p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                            Track your job applications
                        </h1>
                        <p className="mt-3 max-w-2xl text-base text-slate-600">
                            Review your current applications, check their status, and keep your job search organised in one place.
                        </p>
                    </div>

                    <Link
                      href="/applications/new"
                      className="inline-flex w-fit rounded-full bg-blue-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800"
                    >
                        Add application
                    </Link>                    
                </header>
            
                <section className="grid gap-4">
                    {starterApplications.map((application) => (
                        <ApplicationCard
                          key={application.id}
                          application={application}
                        />
                    ))}
                </section>
            </div>
        </main>
    );
}