import Image from "next/image";

export default function PokeCard({ pokemon }) {
  return (
    <div>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
        width={120}
        height={120}
        alt={pokemon.name}
      />
      <h3 className="text-red-400">{pokemon.name}</h3>
    </div>
  );
}
