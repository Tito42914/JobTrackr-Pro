import { starterApplications } from "@/data/starterApplications";
import ApplicationCard from "@/features/applications/components/ApplicationCard";

export default function ApplicationsPage() {
    return (
        <main className="min-h-screen bg-slate-50 px-6 py-10">
            <div className="mx-auto max-w-5xl">
                <header className="mb-8">
                    <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                        Applications
                    </p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                        Track your job applications
                    </h1>
                    <p className="mt-3 max-w-2xl text-base text-slate-600">
                        Review your current applications, check their status, and keep your job search organised in one place.
                    </p>
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