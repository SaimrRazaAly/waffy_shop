"use client";
import { faqsData } from "@/constants/data";
import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <>
      {faqsData.map((faq, index) => (
        <div key={index} className="py-2 w-[100%] md:w-[80%] mx-auto">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full font-main text-left text-2xl  flex bg-slate-200 py-4 items-center  main_text px-4 gap-3"
          >
            <span className="text-2xl">{openIndex === index ? "−" : "+"}</span>
            {faq.question}
          </button>

          <div
            className={`overflow-hidden transition-all font-serif duration-500 ${
              openIndex === index ? "max-h-[200px] opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 pt-2 text-gray-700 text-base">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
