// src/app/country/[country_name]/page.tsx

import CountryCard from "../../components/CountryCard";

interface Country {
  name: string;
  population: number;
  capital: string;
}

const countryDetails: { [key: string]: Country } = {
  afghanistan: { name: "Afghanistan", population: 41000000, capital: "Kabul" },
  bangladesh: { name: "Bangladesh", population: 170000000, capital: "Dhaka" },
  egypt: { name: "Egypt", population: 110000000, capital: "Cairo" },
  indonesia: { name: "Indonesia", population: 280000000, capital: "Jakarta" },
  iran: { name: "Iran", population: 87000000, capital: "Tehran" },
  malaysia: { name: "Malaysia", population: 34000000, capital: "Kuala Lumpur" },
  morocco: { name: "Morocco", population: 37000000, capital: "Rabat" },
  pakistan: { name: "Pakistan", population: 240000000, capital: "Islamabad" },
  saudiarabia: { name: "Saudi Arabia", population: 36000000, capital: "Riyadh" },
  turkey: { name: "Turkey", population: 85000000, capital: "Ankara" },
};

// Define the expected props for the dynamic page, with params as a Promise
interface CountryPageProps {
  params: Promise<{ country_name: string }>;
}

export default async function CountryPage({ params }: CountryPageProps): Promise<JSX.Element> {
  // Await the params object before accessing its properties
  const { country_name } = await params;

  // Fetch the country data from the countryDetails object
  const country = countryDetails[country_name.toLowerCase()] || null;

  return (
    <div className="p-4">
      {country ? (
        // If country exists, display the CountryCard component with country details
        <CountryCard
          name={country.name}
          population={country.population}
          capital={country.capital}
        />
      ) : (
        // If country not found, display a message
        <p className="text-red-500">Country not found.</p>
      )}
    </div>
  );
}
