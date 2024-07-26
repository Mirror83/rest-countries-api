"use client";

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
    <div className="flex flex-wrap my-8">
      <div className="bg-dark-gray dark:bg-container-dark flex items-center p-4 gap-4 w-full mb-8 rounded-md">
        <p className="font-bold">Icon</p>
        <input
          className="bg-dark-gray dark:bg-container-dark border-none outline-none w-full"
          name="country"
          type="search"
          defaultValue={searchParams.get("name")?.toString()}
          placeholder="Search for a country..."
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
    </div>
  );
}
