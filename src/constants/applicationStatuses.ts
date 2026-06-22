import type { ApplicationStatus } from "@/types/application";

export const APPLICATION_STATUSES = [
    "applied",
    "interviewing",
    "offer",
    "rejected",
] as const satisfies readonly ApplicationStatus[];

export const APPLICATION_STATUS_LABELS: Record<ApplicationStatus, string> = {
    applied: "Applied",
    interviewing: "Interviewing",
    offer: "Offer",
    rejected: "Rejected",
};