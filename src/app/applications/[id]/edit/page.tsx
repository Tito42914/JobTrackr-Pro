import Link from "next/link";
import EditApplicationForm from "@/features/applications/components/EditApplicationForm";

type EditApplicationPageProps = {
    params: Promise<{
        id: string;
    }>;
};

export default async function EditApplicationPage({
    params,
}: EditApplicationPageProps) {
    const { id } = await params;

    return (
        <main className="min-h-screen bg-slate-50 px-6 py-10">
            <div className="mx-auto max-w-3xl">               
                    <Link
                      href={`/applications/${id}`}
                      className="text-sm font-medium text-blue-700 hover:text-blue-800"
                    >
                        Back to details
                    </Link>
                    <EditApplicationForm id={id} />
            </div>
        </main>
    );
}