import {
    APPLICATION_STATUSES,
    APPLICATION_STATUS_LABELS,
} from "@/constants/applicationStatuses";

type ApplicationFormProps = {
    mode: "create" | "edit";
};

export default function ApplicationForm({ mode }: ApplicationFormProps) {
    const submitLabel = mode === "create" ? "Add application" : "Save changes";

    return (
        <form className="space-y-6">
            <div className="grid gap-5 sm:grid-cols-2">
                <div>
                    <label
                      htmlFor="company"
                      className="block text-sm font-medium text-slate-700"
                    >
                        Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-950 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                    />  
                </div>

                <div>
                    <label
                      htmlFor="role"
                      className="block text-sm font-medium text-slate-700"
                    >
                        Role
                    </label>
                    <input
                      id="role"
                      name="role"
                      type="text"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-950 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                    />
                </div>

                <div>
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-slate-700"
                    >
                        Location
                    </label>
                    <input
                      id="location"
                      name="location"
                      type="text"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-950 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                    />
                </div>
                
                <div>
                    <label
                      htmlFor="dateApplied"
                      className="block text-sm font-medium text-slate-700"
                    >
                        Date applied
                    </label>
                    <input
                      id="dateApplied"
                      name="dateApplied"
                      type="date"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-950 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                    />
                </div>
                
                <div>
                    <label
                      htmlFor="status"
                      className="block text-sm font-medium text-slate-700"
                    >
                        Status
                    </label>
                    <select
                      id="status"
                      name="status"
                      className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-950 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                    >
                        {APPLICATION_STATUSES.map((status) => (
                            <option key={status} value={status}>
                                {APPLICATION_STATUS_LABELS[status]}
                            </option>
                        ))}
                    </select>
                </div>   
                
                <div>
                    <label
                      htmlFor="link"
                      className="block text-sm font-medium text-slate-700"
                    >
                        Job link
                    </label>
                    <input
                      id="link"
                      name="link"
                      type="url"
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-950 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                    />
                </div>

                <div>
                    <label
                      htmlFor="notes"
                      className="block text-sm font-medium text-slate-700"
                    >
                        Notes
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={5}
                      className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm text-slate-950 shadow-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20"
                    />
                </div>

                <div className="flex justify-end">
                    <button
                      type="submit"
                      className="rounded-full bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
                    >
                        {submitLabel}
                    </button>    
                </div>                             
            </div>
        </form>
    );
}