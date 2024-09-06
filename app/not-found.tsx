import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto min-h-screen grid">
      <div className="m-auto space-y-3">
        <h2 className="text-2xl font-semibold">Not Found</h2>
        <p>Could not find requested resource</p>
        <div className="mt-4">
          <Link
            className="py-3 px-5 bg-gray-500 hover:bg-gray-600 text-white rounded-sm"
            href="/"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
