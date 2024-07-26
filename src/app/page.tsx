import Link from "next/link";
import { CountrySelect } from "../components/CountrySelect";
import { getAllCountries, CountrySummary } from "./data";
import InfoRow from "@/components/InfoRow";

export default async function Home() {
  const summaries = await getAllCountries();

  return (
    <div className="flex flex-col items-center">
      <div className="w-11/12">
        <div className="flex flex-wrap my-8">
          <div className="bg-dark-gray dark:bg-container-dark flex items-center p-4 gap-4 w-full mb-8 rounded-md">
            <p className="font-bold">Icon</p>
            <input
              className="bg-dark-gray dark:bg-container-dark border-none outline-none w-full"
              name="country"
              type="search"
              placeholder="Search for a country..."
            />
          </div>
        </div>
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
    <div className="bg-container w-[300px] dark:bg-container-dark rounded-md">
      {/** Flag */}
      {/* <div className="h-[200px] w-[300px] bg-yellow-800 rounded-md"></div> */}
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
