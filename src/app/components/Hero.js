import Image from "next/image";
import Banner from "../assets/images/banner.png";

export default function Hero() {
  return (
    <div
      id="home"
      className="relative w-full h-[600px] 2xl:h-[800px] overflow-hidden"
    >
      <Image src={Banner} alt="" className="w-full h-full object-cover" />
      <div className="absolute top-1/2 left-1/2 lg:left-1/4 transform -translate-x-1/2 -translate-y-1/2 text-left text-neutral-1000 z-20">
        <h1 className="text-3xl leading-10 md:text-5xl font-bold mb-4 md:leading-[60px]">
          <span className="text-cyan-800">Best</span>
          <span className="text-cyan-600">Spaces</span>
        </h1>
        <p className="text-sm md:text-xl font-medium mb-8 text-cyan-800">
          A 1a plataforma aberta de IA <br /> para a busca do ponto comercial
          perfeito!
        </p>
      </div>
    </div>
  );
}
