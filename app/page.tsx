import Author from "@/components/Author";

export default function Home() {
  return (
    <main className="grid min-h-screen place-content-center space-y-10 text-center">
      <h1 className="text-3xl font-medium text-slate-900">
        Frontend Mentor Challenge
      </h1>
      <p className="text-2xl font-semibold text-sky-600">
        Basic Template - Next.js
      </p>
      <Author />
    </main>
  );
}
