import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request: NextRequest) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "");

  try {
    const origin =
      request.headers.get("origin") ||
      "http://localhost:3000" ||
      "https://rachadao.vercel.app/";

    const session = await stripe.checkout.sessions.create({
      ui_mode: "embedded",
      line_items: [
        {
          quantity: 1,
          price: "price_1Qdb48IzmFcH6e5E9qT7YQ8A",
        },
      ],
      mode: "subscription",
      payment_method_types: ["card"],
      return_url: `${origin}/payment-confirmation?session_id={CHECKOUT_SESSION_ID}`,
    });

    return NextResponse.json({
      id: session.id,
      client_secret: session.client_secret,
    });
  } catch (error) {
    console.error("Erro ao criar sessão de checkout:", error);
    return NextResponse.json(
      {
        error: "Erro ao criar sessão de checkout.",
        details: error instanceof Error ? error.message : String(error),
      },
      { status: 400 }
    );
  }
}
