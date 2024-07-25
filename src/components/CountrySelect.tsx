"use client";

import { regions } from "../app/data";

export function CountrySelect() {
  return (
    <select
      className="bg-container dark:bg-container-dark p-4 rounded-md"
      onChange={(e) => console.log(e.target.value)}
      defaultValue={""}
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
