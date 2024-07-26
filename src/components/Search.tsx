"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSearch(name: string) {
    const urlSearchParams = new URLSearchParams(searchParams);
    if (name) {
      urlSearchParams.set("name", name);
    } else {
      urlSearchParams.delete("name");
    }

    replace(`${pathname}?${urlSearchParams.toString()}`);
  }
  return (
    <div className="bg-container dark:bg-container-dark shadow-md flex items-center p-4 gap-2 w-full my-8 rounded-md">
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
