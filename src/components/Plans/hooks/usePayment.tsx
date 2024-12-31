"use client";

import { useState } from "react";

export function usePayment() {
  const [paymentOpen, setPaymentOpen] = useState<boolean>(false);

  function handlePayment() {
    setPaymentOpen(!paymentOpen);
  }

  return { paymentOpen, setPaymentOpen, handlePayment };
}
