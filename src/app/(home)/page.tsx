import InfoRow from "@/components/InfoRow";
import Loading from "@/components/Loading";
import { getAllCountries, Region, CountrySummary } from "@/lib/data";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";
import NotFound from "../not-found";

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

  if (summaries.length === 0) {
    return <NotFound showLink={false} />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <CountrySummaries
        summaries={summaries}
        className="flex w-full flex-wrap gap-8 py-8 px-8 justify-center lg:grid-cols-4"
      />
    </Suspense>
  );
}

function CountrySummaries({
  summaries,
  className,
}: {
  summaries: CountrySummary[];
  className?: string;
}) {
  return (
    <div className={cn(className)}>
      {summaries.map((summary) => (
        <CountrySummaryCard key={summary.name} {...summary} />
      ))}
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
        className="rounded-md h-[200px] object-cover shadow-sm"
        width={300}
        height={200}
        src={flags.png}
        alt={flags.alt || `Flag of the country ${name}`}
      />
      <div className="p-8">
        <Link href={`/details/${alpha3Code}`}>
          <strong className="text-lg font-extrabold">{name}</strong>
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
