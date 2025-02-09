"use client";

import { cn } from "@/lib/utils";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Search({ className }: { className?: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((name: string) => {
    const urlSearchParams = new URLSearchParams(searchParams);
    if (name) {
      urlSearchParams.set("name", name);
    } else {
      urlSearchParams.delete("name");
    }

    replace(`${pathname}?${urlSearchParams.toString()}`);
  }, 300);

  return (
    <div
      className={cn(
        "bg-container dark:bg-container-dark shadow-md flex items-center p-4 gap-2 w-full my-8 rounded-md",
        className
      )}
    >
      <MagnifyingGlassIcon height={30} />
      <input
        className="bg-container dark:bg-container-dark border-none outline-none w-full"
        name="country"
        type="search"
        defaultValue={searchParams.get("name")?.toString()}
        placeholder="Search for a country..."
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
}
