"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { regions } from "../app/data";

export function CountrySelect() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleSelect(region: string) {
    const params = new URLSearchParams(searchParams);
    if (region) {
      params.set("region", region);
    } else {
      params.delete("region");
    }

    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <select
      className="bg-container dark:bg-container-dark p-4 rounded-md"
      onChange={(e) => handleSelect(e.target.value)}
      defaultValue={searchParams?.get("region")?.toString()}
    >
      <option value="">Filter by region</option>
      {regions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  );
}
