import Image from "next/image";
import Link from "next/link";

import logo from "@/assets/logos/logo-white.svg";

export function FooterInfo() {
  return (
    <>
      <section>
        <div className="flex flex-col justify-center items-start gap-2">
          <button className="hover:scale-105 transition-all duration-200 ease-in-out">
            <Image src={logo} alt="Logo do Rachadão branca." className="w-40" />
          </button>
          <p className="text-white text-opacity-50 text-left text-xs font-medium tracking-tight max-w-64">
            RUA 20, 6 EDIF VIVALDI MOREIRA, NORTE (AGUAS CLARAS), CEP 71915-750,
            9701 - DF
          </p>

          <p className="text-white text-opacity-50 text-left text-xs mt-2 font-medium tracking-tight max-w-64">
            CNPJ: 57.428.661/0001-30
          </p>

          <p className="text-white text-opacity-80 text-left text-xs mt-2 font-medium tracking-tight max-w-64">
            Desenvolvido com 🤍 por{" "}
            <Link
              href={`https://lucasdaher.com`}
              className="underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lucas Daher
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
