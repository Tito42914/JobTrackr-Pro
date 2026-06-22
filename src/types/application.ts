export type ApplicationStatus = 
  | "applied"
  | "interviewing"
  | "offer" 
  | "rejected";

export interface JobApplication {
    id: string;
    company: string;
    role: string;
    location: string;
    status: ApplicationStatus;
    dateApplied: string;
    link: string;
    notes: string;
    createdAt: string;
    updatedAt: string;
}

export type JobApplicationInput = Omit<
  JobApplication,
  "id" | "createdAt" | "updatedAt"
>;