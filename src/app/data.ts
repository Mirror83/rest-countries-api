export const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
export type Region = "Africa" | "America" | "Asia" | "Europe" | "Oceania";

export interface CountrySummary {
  alpha3Code: string;
  name: string;
  population: number;
  region: Region;
  capital: string;
  flag: Flag;
}

export interface CountryDetails extends CountrySummary {
  nativeName: string;
  subRegion: string;
  topLevelDomain: string;
  currencies: Currency[];
  languages: Language[];
  borders: string[];
}
export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Flag {
  alt?: string;
  png: string;
  svg: string;
}

export interface Language {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
}

export async function getAllCountries(
  countryName?: string,
  region?: Region
): Promise<CountrySummary[]> {
  const fields = "alpha3Code,name,population,region,flags,capital";

  const url = countryName
    ? `https://restcountries.com/v2/name/${countryName}`
    : `https://restcountries.com/v2/all`;

  const res = await fetch(`${url}?fields=${fields}`);
  const countires: CountrySummary[] = await res.json();

  if (region) {
    return countires.filter((country) => country.region == region);
  }

  return countires;
}

export async function getCountry(alpha3Code: string): Promise<CountryDetails> {
  const fields =
    "name,nativeName,population,region,flags,capital,subregion,languages,topLevelDomain,currencies,borders";
  const res = await fetch(
    `https://restcountries.com/v2/alpha/${alpha3Code}?fields=${fields}`
  );

  const countryDetails: CountryDetails = await res.json();

  return countryDetails;
}
