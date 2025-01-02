import { ArrowDown } from "lucide-react";
import { IntroductionTitle } from "./components/introductionTitle";
import { IntroductionCta } from "./components/IntroductionCta";
import { IntroductionContainer } from "./components/introductionContainer";

export function Introduction() {
  function moveToPlans() {
    const plansElement = document.getElementById("plans");
    if (plansElement) {
      plansElement.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <IntroductionContainer>
      <IntroductionTitle />

      <IntroductionCta onClick={moveToPlans}>
        Ver planos de assinatura
        <ArrowDown className="w-5 h-5" />
      </IntroductionCta>
    </IntroductionContainer>
  );
}
