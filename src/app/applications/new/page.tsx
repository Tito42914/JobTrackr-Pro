import Link from "next/link";
import NewApplicationForm from "@/features/applications/components/NewApplicationForm";

export default function NewApplicationPage() {
    return (
        <main className="min-h-screen bg-slate-50 px-6 py-10">
            <div className="mx-auto max-w-3xl">
                <Link
                  href="/applications"
                  className=" text-sm font-medium text-blue-700 hover:text-blue-800"
                >
                    Back to applications
                </Link>

                <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                        New application
                    </p>

                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                        Add a job application
                    </h1>

                    <p className="mt-3 text-base text-slate-600">
                        Capture the key details for a new job application. Submit behaviour
                        will be connected in a later step.
                    </p>

                    <div className="mt-8">
                        <NewApplicationForm />
                    </div>
                </section>
            </div>
        </main>
    );
}