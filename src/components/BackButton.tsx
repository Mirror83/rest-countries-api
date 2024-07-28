"use client";

import { ArrowLeftIcon, BackwardIcon } from "@heroicons/react/16/solid";
import { useRouter } from "next/navigation";

export function BackButton() {
  const { back } = useRouter();
  return (
    <button
      className="flex gap-2 items-center mb-8 bg-container dark:bg-container-dark px-8 py-2 shadow-md rounded-md"
      onClick={back}
    >
      <ArrowLeftIcon height={20} />
      Back
    </button>
  );
}
