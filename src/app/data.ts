export const regions = [
  "Africa",
  "Americas",
  "Asia",
  "Europe",
  "Oceania",
  "Polar",
];

export type Region =
  | "Africa"
  | "Americas"
  | "Asia"
  | "Europe"
  | "Oceania"
  | "Polar";

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
  borders?: Border[] | string[];
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

export interface Border {
  name: string;
  alpha3Code: string;
}

export interface ErrorResponse {
  message?: string;
  status?: string;
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
    let countries: CountrySummary[] = await res.json();

    const error = countries as ErrorResponse;
    if (error.status) {
      throw new Error(error.message);
    }

    if (region) {
      return countries.filter((country) => country.region === region);
    }

    return countries;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export async function getCountry(
  alpha3Code: string,
  withBorders: boolean = true
): Promise<CountryDetails> {
  try {
    const fields = withBorders
      ? "name,nativeName,population,region,flags,capital,subregion,languages,topLevelDomain,currencies,borders"
      : "name";
    const res = await fetch(
      `https://restcountries.com/v2/alpha/${alpha3Code}?fields=${fields}`
    );

    const countryDetails: CountryDetails = await res.json();

    const error = countryDetails as ErrorResponse;
    if (error.status) {
      throw new Error(error.message);
    }

    if (withBorders) {
      const borders = await getBorders(countryDetails);
      console.log(borders);
      return { ...countryDetails, borders: borders };
    } else return countryDetails;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function getBorders(country: CountryDetails): Promise<Border[]> {
  const borders: Border[] = [];
  if (country?.borders !== undefined) {
    for (let countryCode of country.borders) {
      let borderCountry = await getCountry(countryCode as string, false);

      borders.push({
        name: borderCountry.name,
        alpha3Code: countryCode as string,
      });
    }
  }

  console.log(borders);

  return borders;
}
