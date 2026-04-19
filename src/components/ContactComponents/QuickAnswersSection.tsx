/** @format */

"use client";

import { useState } from "react";
import { ChevronDown, MapPin } from "lucide-react";
import {
  MotionReveal,
  MotionStagger,
  MotionStaggerItem,
} from "../CommonComponents/MotionReveal";

type FAQItem = {
  question: string;
  answer: string;
};

const FAQAccordion = ({ item }: { item: FAQItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-start justify-between w-full gap-4 hover:opacity-70 transition-opacity"
      >
        <h4 className="text-primary text-sm md:text-base font-semibold text-left">
          {item.question}
        </h4>
        <ChevronDown
          className={`w-5 h-5 flex-shrink-0 text-button-bg transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <p className="text-secondary text-xs md:text-sm mt-3 leading-6">
          {item.answer}
        </p>
      )}
    </div>
  );
};

const QuickAnswersSection = () => {
  const faqItems: FAQItem[] = [
    {
      question: "How do I cancel my subscription?",
      answer:
        "You can cancel at any time from your dashboard or by emailing hello@famora.ai. Cancellations take effect at the end of your current billing period.",
    },
    {
      question:
        "I haven't received my WhatsApp activation link — what do I do?",
      answer:
        "Check your spam folder first. If it's not there, email us with your order confirmation number and we'll resend it within 30 minutes.",
    },
    {
      question: "Can I switch between plans?",
      answer:
        "Yes. You can upgrade or downgrade your plan at any time from your dashboard. Plan changes take effect immediately, and billing is adjusted pro-rata.",
    },
    {
      question: "How do I add a new family member?",
      answer:
        "In your dashboard, go to Family Members and click 'Invite Member'. They'll receive a WhatsApp message to activate their connection to the shared Famora bot.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes — all new subscribers get a 7-day free trial. No credit card is required to start. You'll only be charged if you keep your subscription after the trial period.",
    },
  ];

  return (
    <MotionReveal className="space-y-6">
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-primary mb-2">
          Quick Answers
        </h3>
        <p className="text-xs md:text-sm text-secondary">COMMON QUESTIONS</p>
      </div>

      <MotionStagger className="space-y-0">
        {faqItems.map((item, index) => (
          <MotionStaggerItem key={index}>
            <FAQAccordion item={item} />
          </MotionStaggerItem>
        ))}
      </MotionStagger>

      {/* Registered Office Section */}
      <MotionReveal
        delay={0.3}
        className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200"
      >
        <div className="flex gap-3">
          <MapPin className="w-5 h-5 text-button-bg flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="text-primary font-semibold text-sm md:text-base mb-2">
              Registered Office
            </h4>
            <p className="text-primary text-xs md:text-sm font-medium mb-1">
              Famora Technologies Ltd
            </p>
            <p className="text-secondary text-xs md:text-sm leading-6">
              20 Farringdon Road
              <br />
              London, EC1M 3HE
              <br />
              United Kingdom
            </p>
            <p className="text-button-bg text-xs md:text-sm font-medium mt-2">
              Company No: 14872931 • VAT Reg: 408 456 788 0D
            </p>
          </div>
        </div>
      </MotionReveal>
    </MotionReveal>
  );
};

export default QuickAnswersSection;
