"use client";

import { FaceFrownIcon, WifiIcon } from "@heroicons/react/24/outline";
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

  const isFetchError = error.message === "fetch failed";

  return (
    <div className="flex-auto flex items-center justify-center">
      <div className="flex flex-col items-center">
        {isFetchError ? (
          <WifiIcon height={60} className="mb-4" />
        ) : (
          <FaceFrownIcon height={60} className="mb-4" />
        )}
        <strong className="text-xl">
          {isFetchError
            ? "Check your internet connection and then try again."
            : error.message}
        </strong>
        <div className="flex gap-4 items-center my-4">
          <a href={"/"} className="underline">
            Back Home
          </a>
        </div>
      </div>
    </div>
  );
}
