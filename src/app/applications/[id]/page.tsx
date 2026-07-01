import Link from "next/link";
import ApplicationDetails from "@/features/applications/components/ApplicationDetails";

type ApplicationDetailsPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function ApplicationDetailsPage({
    params,
}: ApplicationDetailsPageProps) {
    const { id } = await params;

    return (
        <main className="min-h-screen bg-slate-50 px-6 py-10">
            <div className="mx-auto max-w-3xl">              
                  <Link
                    href="/applications"
                    className="text-sm font-medium text-blue-700 hover:text-blue-800"
                  >
                    Back to applications
                  </Link>

                  <ApplicationDetails id={id} />
            </div>
        </main>
    );
}