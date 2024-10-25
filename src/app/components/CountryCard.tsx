// app/components/CountryCard.tsx
interface CountryCardProps {
  name: string;
  population: number;
  capital: string;
}

const CountryCard: React.FC<CountryCardProps> = ({ name, population, capital }) => {
  return (
    <div className="border p-4 rounded shadow-md">
      <h2 className="text-xl font-bold">{name}</h2>
      <p><strong>Population:</strong> {population.toLocaleString()}</p>
      <p><strong>Capital:</strong> {capital}</p>
    </div>
  );
};

export default CountryCard;
