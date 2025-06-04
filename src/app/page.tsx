import { DataTable } from "@/components/custom/table/page";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden flex flex-col items-center justify-center gap-4">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        Data.
      </span>
      <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <DataTable />
      </div>
    </main>
  );
}