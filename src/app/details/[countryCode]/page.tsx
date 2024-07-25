import { getCountry } from "@/app/data";

export default async function Page({
  params,
}: {
  params: { countryCode: string };
}) {
  const country = await getCountry(params.countryCode);
  return <div>{country.name}</div>;
}
