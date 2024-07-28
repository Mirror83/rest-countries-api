import { Border, CountryDetails, getCountry } from "@/app/data";
import { BackButton } from "@/components/BackButton";
import InfoRow from "@/components/InfoRow";
import Loading from "@/components/Loading";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page({
  params,
}: {
  params: { countryCode: string };
}) {
  const details = await getCountry(params.countryCode);

  return (
    <div className="flex flex-col items-center pb-12 pt-12 px-8">
      <div className="lg:w-11/12">
        <BackButton />
        <Suspense fallback={<Loading />}>
          <DetailCard
            details={details}
            className="lg:grid grid-cols-2 gap-16 items-center"
          />
        </Suspense>
      </div>
    </div>
  );
}

type DetailCardProps = {
  details: CountryDetails;
  className?: string;
};

function DetailCard({ details, className }: DetailCardProps) {
  const borders = details.borders as Border[];

  return (
    <div className={cn(className)}>
      <img
        width={600}
        height={500}
        src={details.flags.svg}
        alt={details.flags.alt || `Flag of the country ${details.name}`}
      />
      <div>
        <div className="my-8 lg:mt-0">
          <strong className="text-2xl font-extrabold">{details.name}</strong>
        </div>

        <div className="lg:grid md:grid-cols-2">
          <div className="mb-8">
            <InfoRow name={"Native name"} value={details.nativeName} />
            <InfoRow name={"Population"} value={details.population} />
            <InfoRow name={"Region"} value={details.region} />
            <InfoRow name={"Sub Region"} value={details.subregion} />
            <InfoRow name={"Capital"} value={details.capital} />
          </div>

          <div className="mb-8">
            <InfoRow
              name={"Top Level Domain"}
              value={details.topLevelDomain.join(", ")}
            />
            <InfoRow
              name={"Currencies"}
              value={details.currencies
                ?.map((currency) => currency.name)
                .join(", ")}
            />
            <InfoRow
              name={"Languages"}
              value={details.languages
                ?.map((language) => language.name)
                .join(", ")}
            />
          </div>
        </div>

        <div>
          <p className="font-bold mb-4">Border Countries:</p>

          <div className="flex flex-wrap gap-2">
            {borders.map((border) => (
              <Link
                key={border.alpha3Code}
                href={`/details/${border.alpha3Code}`}
              >
                <div className="px-4 py-2 bg-container dark:bg-container-dark shadow-sm">
                  {border.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
