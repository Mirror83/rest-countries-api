export const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
export type Region = "Africa" | "America" | "Asia" | "Europe" | "Oceania";
import mockData from "@/data.json";

export interface CountrySummary {
  alpha3Code: string;
  name: string;
  population: number;
  region: Region | string;
  capital?: string;
  flags: Flags;
}

export interface CountryDetails extends CountrySummary {
  nativeName: string;
  subregion: string;
  topLevelDomain: string[];
  currencies?: Currency[];
  languages: Language[];
  borders?: string[];
}
export interface Currency {
  code: string;
  name: string;
  symbol: string;
}

export interface Flags {
  alt?: string;
  png: string;
  svg: string;
}

export interface Language {
  name: string;
  nativeName?: string;
}

export async function getAllCountries(
  countryName?: string,
  region?: Region
): Promise<CountrySummary[]> {
  try {
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
  } catch (err) {
    console.error(err);
  }

  return mockData.countries.map((country) => {
    return {
      alpha3Code: country.alpha3Code,
      name: country.name,
      flags: country.flags,
      population: country.population,
      region: country.region,
      capital: country.capital,
    };
  });
}

export async function getCountry(alpha3Code: string): Promise<CountryDetails> {
  try {
    const fields =
      "name,nativeName,population,region,flags,capital,subregion,languages,topLevelDomain,currencies,borders";
    const res = await fetch(
      `https://restcountries.com/v2/alpha/${alpha3Code}?fields=${fields}`
    );

    const countryDetails: CountryDetails = await res.json();

    return countryDetails;
  } catch (err) {
    console.error(err);
  }

  const country = mockData.countries.find((country) => {
    country.alpha3Code == alpha3Code;
  });

  if (!country) {
    throw new Error("Invalid country code.");
  }

  return country;
}
