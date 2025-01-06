import { ArrowDown } from "lucide-react";
import { IntroductionTitle } from "./components/introductionTitle";
import { IntroductionCta } from "./components/IntroductionCta";
import { IntroductionContainer } from "./components/introductionContainer";
import { Button } from "@/components/ui/button";

import { moveToPlans } from "./functions/moveToPlans";
import { moveToFeatures } from "./functions/moveToFeatures";

export function Introduction() {
  return (
    <IntroductionContainer>
      <IntroductionTitle />

      <IntroductionCta>
        <Button
          variant="default"
          size="lg"
          onClick={moveToPlans}
          className="bg-green-600 text-white hover:bg-green-700 font-semibold tracking-tight"
        >
          Adquirir assinatura
          <ArrowDown className="h-4 w-4" />
        </Button>
        <Button
          size="lg"
          variant="secondary"
          className="font-semibold text-green-600 bg-white"
          onClick={moveToFeatures}
        >
          Conhecer funcionalidades
        </Button>
      </IntroductionCta>
    </IntroductionContainer>
  );
}
