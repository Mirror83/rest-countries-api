import Link from "next/link";
import { CountrySelect } from "../components/CountrySelect";
import { getAllCountries, CountrySummary, Region } from "./data";
import InfoRow from "@/components/InfoRow";
import Search from "@/components/Search";

export default async function Home({
  searchParams,
}: {
  searchParams: {
    name?: string;
    region?: string;
  };
}) {
  const summaries = await getAllCountries(
    searchParams.name,
    searchParams.region as Region
  );

  return (
    <div className="flex flex-col items-center">
      <div className="w-11/12">
        <Search />
        <CountrySelect />
      </div>

      <div className="flex flex-1 flex-wrap gap-8 justify-center my-8">
        {summaries.map((summary) => (
          <CountrySummaryCard key={summary.name} {...summary} />
        ))}
      </div>
    </div>
  );
}

function CountrySummaryCard({
  alpha3Code,
  name,
  population,
  region,
  capital,
  flags,
}: CountrySummary) {
  return (
    <div className="bg-container w-[300px] dark:bg-container-dark rounded-md shadow-md">
      <img
        className="rounded-md h-[200px] object-cover"
        width={300}
        height={200}
        src={flags.png}
        alt={flags.alt || `Flag of the country ${name}`}
      />
      <div className="p-8">
        <Link href={`/details/${alpha3Code}`}>
          <strong className="text-lg">{name}</strong>
        </Link>
        <div className="mt-4">
          <InfoRow name="Population" value={population} />
          <InfoRow name="Region" value={region} />
          <InfoRow name="Capital" value={capital} />
        </div>
      </div>
    </div>
  );
}
