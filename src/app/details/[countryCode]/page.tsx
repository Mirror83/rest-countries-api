import { Border, CountryDetails, getCountry } from "@/app/data";
import { BackButton } from "@/components/BackButton";
import InfoRow from "@/components/InfoRow";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: { countryCode: string };
}) {
  const details = await getCountry(params.countryCode);

  return (
    <div className="flex flex-col items-center pb-8 pt-12 px-8 md:p-0">
      <div>
        <BackButton />
        <DetailCard details={details} />
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
      {/** Flag */}
      {/* <div className="h-[200px] w-[300px] bg-yellow-800 rounded-md"></div> */}
      <img
        width={300}
        height={200}
        src={details.flags.png}
        alt={details.flags.alt || `Flag of the country ${details.name}`}
      />
      <div className="my-8">
        <strong className="text-2xl font-extrabold">{details.name}</strong>
      </div>
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
          value={details.languages?.map((language) => language.name).join(", ")}
        />
      </div>

      <div>
        <p className="font-bold mb-4">Border Countries:</p>

        <div className="flex flex-wrap gap-2">
          {borders.map((border) => (
            <Link
              key={border.alpha3Code}
              href={`/details/${border.alpha3Code}`}
            >
              <div className="px-4 py-2 bg-container dark:bg-container-dark">
                {border.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
