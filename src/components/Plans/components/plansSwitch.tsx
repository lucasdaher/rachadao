"use client";

import { Switch } from "@/components/ui/switch";
import { useYearly } from "../contexts/yearlyContext";

export function PlansSwitch() {
  const { isYearly, setIsYearly } = useYearly();
  return (
    <div className="mt-16 flex justify-center">
      <div className="flex items-center gap-x-3">
        <span
          className={`text-sm ${
            isYearly ? "text-gray-500" : "font-semibold text-black-900"
          }`}
        >
          Mensal
        </span>
        <Switch checked={isYearly} onCheckedChange={setIsYearly} />
        <span
          className={`text-sm ${
            isYearly ? "font-semibold text-black-900" : "text-gray-500"
          }`}
        >
          Anual
        </span>
      </div>
    </div>
  );
}
