export const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];
export type Region = "Africa" | "America" | "Asia" | "Europe" | "Oceania";

export interface CountrySummary {
  name: string;
  population: number;
  region: Region;
  capital: string;
}

export async function getCountries(): Promise<CountrySummary[]> {
  const res = await fetch("http://localhost:5000/countries");
  const countires = await res.json();

  return countires;
}
