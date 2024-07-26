type InfoRowProps = {
  name: string;
  value?: string | number;
};

export default function InfoRow({ name, value }: InfoRowProps) {
  return (
    <p className="leading-loose">
      <span className="font-bold">{name}: </span>
      {typeof value === "number" ? Intl.NumberFormat().format(value) : value}
    </p>
  );
}
