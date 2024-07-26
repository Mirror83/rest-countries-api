"use client";

import { useRouter } from "next/navigation";

export function BackButton() {
  "use client";
  const { back } = useRouter();
  return (
    <button
      className="mb-16 bg-container dark:bg-container-dark px-8 py-2"
      onClick={back}
    >
      Back
    </button>
  );
}
