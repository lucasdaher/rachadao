import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { faqs } from "./data/faqData";

export function Faq() {
  return (
    <section
      id="faq"
      className="w-full bg-black-900 bg-opacity-90 backdrop-blur-xl text-white py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Perguntas Frequentes
        </h2>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="tracking-tight font-semibold text-base">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-white/70 font-medium text-sm">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
