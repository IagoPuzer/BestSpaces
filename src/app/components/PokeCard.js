import Image from "next/image";

export default function PokeCard({ pokemon }) {
  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`;

  return (
    <div className="w-56 mx-auto bg-white rounded-xl overflow-hidden shadow-md">
      <div className="h-48 relative">
        <Image
          src={spriteUrl}
          alt={pokemon.name}
          layout="fill"
          className="rounded-t-xl"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-slate-900">{pokemon.name}</h3>
      </div>
    </div>
  );
}
