import { CountrySelect } from "@/components/CountrySelect";
import Search from "@/components/Search";

export default async function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-auto flex-col">
      <div className="flex flex-wrap w-full justify-between items-center px-8">
        <Search className="md:max-w-[500px]" />
        <CountrySelect />
      </div>
      {children}
    </div>
  );
}
