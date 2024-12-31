import { ArrowDown } from "lucide-react";
import { ComponentProps } from "react";

export type IntroductionCtaProps = ComponentProps<"button">;

export function IntroductionCta({ ...props }: IntroductionCtaProps) {
  return (
    <button
      className="flex justify-center items-center gap-2 bg-white text-black-900 hover:bg-zinc-300 rounded-xl px-4 py-2 text-base transition-all duration-200"
      title="Veja nossos planos de assinatura."
      {...props}
    >
      {props.children}
    </button>
  );
}
