"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.log(error);
  }, []);
  return (
    <div className="flex-auto flex items-center justify-center">
      <div className="flex flex-col items-center">
        <strong className="text-xl">{error.message}</strong>
        <div className="flex gap-4 items-center my-4">
          <Link href={"/"} className="underline">
            Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
