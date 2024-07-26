"use client";

import { ArrowLeftIcon, BackwardIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";

export function BackButton() {
  const { back } = useRouter();
  return (
    <button
      className="mb-16 bg-container dark:bg-container-dark px-8 py-2 shadow-md rounded-md"
      onClick={back}
    >
      <div className="flex gap-2 items-center">
        <ArrowLeftIcon height={20} />
        <span>Back</span>
      </div>
    </button>
  );
}
