import Link from "next/link";
import { notFound } from "next/navigation";
import { starterApplications } from "@/data/starterApplications";
import StatusBadge from "@/features/applications/components/StatusBadge";

type EditApplicationPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function EditApplicationPage({
    params,
}: EditApplicationPageProps) {
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
                <div className="flex items-center justify-between gap-4">
                    <Link
                      href={`/applications/${application.id}`}
                      className="text-sm font-medium text-blue-700 hover:text-blue-800"
                    >
                        Back to details
                    </Link>

                    <StatusBadge status={application.status} />
                </div>

                <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-wide text-blue-700">
                        Edit application
                    </p>

                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-950">
                        {application.role}
                    </h1>

                    <p className="mt-2 text-lg font-medium text-slate-700">
                        {application.company}
                    </p>

                    <div className="mt-8 rounded-xl bg-slate-50 p-5">
                        <h2 className="text-base font-semibold text-slate-950">
                            Form coming next
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                            This page has found the correct application record. The editable
                            form fields will be added in a later step when the application
                            form component is built.
                        </p>
                    </div>
                </section>
            </div>
        </main>
    );
}