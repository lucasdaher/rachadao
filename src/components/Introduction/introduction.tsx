import { ArrowDown } from "lucide-react";
import { IntroductionTitle } from "./components/introductionTitle";
import { IntroductionCta } from "./components/IntroductionCta";
import { IntroductionContainer } from "./components/introductionContainer";

export function Introduction() {
  return (
    <IntroductionContainer>
      <IntroductionTitle />

      <IntroductionCta>
        Ver planos de assinatura
        <ArrowDown className="w-5 h-5" />
      </IntroductionCta>
    </IntroductionContainer>
  );
}
