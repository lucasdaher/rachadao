import { PlansCards } from "./components/plansCards";
import { PlansSwitch } from "./components/plansSwitch";
import { PlansTitle } from "./components/plansTitle";
import { PlansContainer } from "./components/plansContainer";

export function Plans() {
  return (
    <PlansContainer>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <PlansTitle />
        <PlansCards />
      </div>
    </PlansContainer>
  );
}
