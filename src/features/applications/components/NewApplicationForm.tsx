"use client";

import { useRouter } from "next/navigation";
import ApplicationForm from "./ApplicationForm";
import { useApplicationsContext } from "../providers/ApplicationsProvider";
import type { JobApplicationInput } from "@/types/application";

export default function NewApplicationForm() {
    const router = useRouter();
    const { addApplication } = useApplicationsContext();

    const handleSubmit = (formData: JobApplicationInput) => {
        addApplication(formData);
        router.push("/applications");
    };

    return (
        <ApplicationForm
          mode="create"
          onSubmit={handleSubmit}
        />
    );
}