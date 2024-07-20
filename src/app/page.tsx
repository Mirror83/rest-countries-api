const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

type Region = "Africa" | "America" | "Asia" | "Europe" | "Oceania";

export default function Home() {
  return (
    <main>
      <div className="flex flex-row flex-wrap justify-between items-baseline bg-container dark:bg-container-dark shadow p-8">
        <a href="/">
          <h1 className="font-bold">Where in the World?</h1>
        </a>
        <p>Dark Mode</p>
      </div>

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

            <select className="bg-container dark:bg-container-dark p-4 rounded-md">
              <option value="" selected>
                Filter by region
              </option>
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          {CountrySummaryCard({
            name: "Germany",
            population: 81_770_800,
            region: "Europe",
            capital: "Berlin",
          })}
        </div>
      </div>
    </main>
  );
}

interface CountrySummary {
  name: string;
  population: number;
  region: Region;
  capital: string;
}

function CountrySummaryCard({
  name,
  population,
  region,
  capital,
}: CountrySummary) {
  return (
    <div className="bg-container dark:bg-container-dark rounded-md">
      {/** Flag */}
      <div className="h-[200px] bg-yellow-800 rounded-md"></div>
      <div className="p-8">
        <strong className="text-lg">{name}</strong>
        <div className="mt-4">
          <p>
            <span className="font-bold">Population: </span>
            {new Intl.NumberFormat().format(population)}
          </p>
          <p>
            <span className="font-bold">Region: </span>
            {region}
          </p>
          <p>
            <span className="font-bold">Capital: </span>
            {capital}
          </p>
        </div>
      </div>
    </div>
  );
}
