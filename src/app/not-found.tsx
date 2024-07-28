"use client";
import { FaceFrownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function NotFound({ showLink = true }: { showLink?: boolean }) {
  return (
    <div className="flex-auto flex items-center justify-center">
      <div className="flex flex-col items-center">
        <FaceFrownIcon height={60} />
        <div className="mt-2 mb-4 text-center">
          <strong className="text-xl">Not Found </strong>
          <p>The country with the given name (or code) does not exist</p>
        </div>
        {showLink && (
          <Link href="/" className="underline">
            Go back home
          </Link>
        )}
      </div>
    </div>
  );
}
