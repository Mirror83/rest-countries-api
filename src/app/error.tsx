"use client";

import Link from "next/link";

export default function Page() {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center">
        <strong>Something went wrong</strong>
        <Link href={"/"}>Home</Link>
      </div>
    </div>
  );
}
