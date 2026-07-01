"use client";

import { notFound, useRouter } from "next/navigation";
import ApplicationForm from "./ApplicationForm";
import StatusBadge from "./StatusBadge";
import { useApplicationsContext } from "../providers/ApplicationsProvider";
import type { JobApplicationInput } from "@/types/application";

type EditApplicationFormProps = {
    id: string;
};

export default function EditApplicationForm({
    id,
}: EditApplicationFormProps) {
    const router = useRouter();
    const { getApplicationById, updateApplication } = useApplicationsContext();

    const application = getApplicationById(id);

    if (!application) {
        notFound();
    }

    const handleSubmit = (formData: JobApplicationInput) => {
        updateApplication(application.id, formData);
        router.push(`/applications/${application.id}`);
    };

    return (
        <>
          <div className="flex items-center justify-between gap-4">
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
            
            <div className="mt-8">
                <ApplicationForm 
                  mode="edit"
                  initialValues={{
                    company: application.company,
                    role: application.role,
                    location: application.location,
                    status: application.status,
                    dateApplied: application.dateApplied,
                    link: application.link,
                    notes: application.notes
                  }}
                  onSubmit={handleSubmit}
                />
            </div>
          </section>
        </>
    );
}