import { FaLinkedinIn } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Logo from "../assets/images/Logo.png";
import Image from "next/image";

export default function Footer() {
  return (
    <div className=" bg-slate-800 ">
      <div className="grid lg:flex py-20 gap-y-10 justify-center items-center gap-x-24 border-b-2 border-neutral-500">
        <div className="mb-4 md:mb-0 flex flex-col justify-center items-center">
          <Image src={Logo} alt="Logotipo da Empresa" className="mb-2"></Image>
          <span className="text-neutral-100 text-center">
            A 1º Inteligência Artifical <br /> aberta para expansão do varejo.
          </span>
        </div>

        <div>
          <ul className="grid gap-4">
            <li className="flex items-center">
              <span className="text-neutral-100 text-lg font-semibold">
                Contato:{" "}
              </span>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/best-spaces/"
                target="_blank"
                className="text-black flex items-center gap-2"
              >
                <div className="bg-neutral-100 rounded-full w-10 h-10 flex justify-center items-center">
                  <FaLinkedinIn />
                </div>
                <span className="text-neutral-100">BestSpaces</span>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <div className="bg-neutral-100 rounded-full w-10 h-10 flex justify-center items-center">
                <FaPhone />
              </div>
              <span className="text-neutral-100">+55 11 4208-7186</span>
            </li>
            <li className="flex items-center gap-2">
              <div className="bg-neutral-100 rounded-full w-10 h-10 flex justify-center items-center">
                <IoMdMail />
              </div>
              <span className="text-neutral-100">
                contato@bestspaces.com.br
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <span className="text-center text-neutral-100">
          Desenvolvido por{" "}
          <a
            href="https://github.com/IagoPuzer"
            target="_blank"
            rel="noopener noreferrer"
          >
            @IagoPuzer
          </a>
        </span>
      </div>
    </div>
  );
}
