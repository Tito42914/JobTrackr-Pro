import { APPLICATION_STATUS_LABELS } from "@/constants/applicationStatuses";
import type { ApplicationStatus } from "@/types/application";

type StatusBadgeProps = {
    status: ApplicationStatus;
};

const statusStyles: Record<ApplicationStatus, string> = {
    applied: "bg-blue-50 text-blue-700 ring-blue-600/20",
    interviewing: "bg-purple-50 text-purple-700 ring-purple-600/20",
    offer: "bg-green-50 text-green-700 ring-green-600/20",
    rejected: "bg-red-50 text-red-700 ring-red-600/20",
};

export default function StatusBadge({ status }: StatusBadgeProps) {
    return (
        <span
          className={`inline-flex w-fit items-center rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${statusStyles[status]}`}
        >
            {APPLICATION_STATUS_LABELS[status]}
        </span>
    );
}