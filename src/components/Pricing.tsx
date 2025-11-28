"use client";

import { useState } from "react";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

const plans = [
  {
    name: "Free",
    priceMonthly: 0,
    priceAnnual: 0,
    description: "Perfect for getting started",
    features: [
      "Up to 3 focus sessions/day",
      "Basic distraction blocking",
      "Simple analytics",
      "Mobile & desktop apps",
    ],
    cta: "Start Free",
    popular: false,
  },
  {
    name: "Pro",
    priceMonthly: 12,
    priceAnnual: 10,
    description: "For power users & creators",
    features: [
      "Unlimited focus sessions",
      "AI-powered scheduling",
      "Advanced distraction blocker",
      "Deep work analytics & insights",
      "Priority support",
      "Custom focus modes",
    ],
    cta: "Go Pro",
    popular: true,
  },
  {
    name: "Team",
    priceMonthly: 29,
    priceAnnual: 24,
    description: "For teams & companies",
    features: [
      "Everything in Pro",
      "Team analytics dashboard",
      "Admin controls",
      "Shared focus modes",
      "SSO & integrations",
      "Dedicated success manager",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Choose the plan that fits your focus needs
          </p>

          {/* Monthly / Annual Toggle */}
          <div className="flex items-center justify-center gap-4">
            <span className={`text-lg ${!annual ? "text-purple-600 font-semibold" : "text-gray-500"}`}>
              Monthly
            </span>
            <Switch checked={annual} onCheckedChange={setAnnual} className="data-[state=checked]:bg-purple-600" />
            <span className={`text-lg ${annual ? "text-purple-600 font-semibold" : "text-gray-500"}`}>
              Annual <span className="text-sm bg-purple-100 text-purple-700 px-2 py-1 rounded-full ml-1">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 transition-all duration-300 ${
                plan.popular
                  ? "bg-gradient-to-br from-purple-600 to-pink-600 text-white shadow-2xl scale-105"
                  : "bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <span className="bg-yellow-400 text-black text-sm font-bold px-4 py-2 rounded-full flex items-center gap-2">
                    <Zap className="w-4 h-4" /> Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold ${plan.popular ? "text-white" : "text-gray-900 dark:text-white"}`}>
                  {plan.name}
                </h3>
                <p className={`mt-2 ${plan.popular ? "text-purple-100" : "text-gray-600 dark:text-gray-400"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold">${annual ? plan.priceAnnual : plan.priceMonthly}</span>
                  <span className={`ml-2 ${plan.popular ? "text-purple-200" : "text-gray-500"}`}>
                    /month {annual && plan.priceAnnual !== plan.priceMonthly && "(billed yearly)"}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className={`w-6 h-6 flex-shrink-0 ${plan.popular ? "text-yellow-300" : "text-purple-600"}`} />
                    <span className={plan.popular ? "text-purple-50" : "text-gray-700 dark:text-gray-300"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className={`w-full ${
                  plan.popular
                    ? "bg-white text-purple-600 hover:bg-gray-100"
                    : "bg-purple-600 hover:bg-purple-700 text-white"
                }`}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}