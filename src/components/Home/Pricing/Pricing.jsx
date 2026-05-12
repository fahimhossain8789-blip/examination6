import React from "react";
import { GiCheckMark } from "react-icons/gi";

const plans = [
  {
    title: "Starter",
    description: "Perfect for getting started",
    price: 0,
    features: [
      "Access to 10 free tools",
      "Basic templates",
      "Community support",
      "1 project per month",
    ],
    buttonText: "Get Started Free",
    gradient: false,
    highlight: false,
  },
  {
    title: "Pro",
    description: "Best for professionals",
    price: 29,
    features: [
      "Access to all premium tools",
      "Unlimited templates",
      "Priority support",
      "Cloud sync",
      "Advanced analytics",
    ],
    buttonText: "Start Pro Trial",
    gradient: true,
    highlight: "Most Popular",
  },
  {
    title: "Enterprise",
    description: "Enterprise",
    price: 99,
    features: [
      "Everything in Pro",
      "Team collaboration",
      "Custom integrations",
      "Dedicated support",
      "SLA guarantee",
      "Custom branding",
    ],
    buttonText: "Get Started Free",
    gradient: false,
    highlight: false,
  },
];

const PricingCard = ({ plan }) => (
  <div
    className={`flex flex-col justify-between border border-zinc-300 rounded-xl p-4 lg:p-8 ${
      plan.gradient ? "bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white" : "bg-white"
    } relative`}
  >
    {plan.highlight && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex py-1 px-4 rounded-full bg-[#FEF3C6] text-yellow-600 text-sm font-semibold">
        {plan.highlight}
      </span>
    )}

    <div className="flex flex-col space-y-4">
      <div>
        <h2 className={`text-xl font-bold ${plan.gradient ? "text-white" : "text-zinc-800"}`}>
          {plan.title}
        </h2>
        <p className={`${plan.gradient ? "text-white" : "text-zinc-400"}`}>{plan.description}</p>
      </div>

      <h2 className={`text-2xl font-bold ${plan.gradient ? "text-white" : "text-zinc-800"}`}>
        ${plan.price}
        <span className={`ml-1 text-base ${plan.gradient ? "text-white" : "text-zinc-400"}`}>/month</span>
      </h2>

      <div className="flex flex-col space-y-2">
        {plan.features.map((feature, i) => (
          <p key={i} className="flex items-center gap-2 text-sm">
            <span className={`p-1 rounded-full ${plan.gradient ? "bg-white/20" : "bg-green-100"}`}>
              <GiCheckMark className={`text-xs ${plan.gradient ? "text-green-300" : "text-green-300"}`} />
            </span>
            {feature}
           </p>
        ))}
      </div>

      <button
        className={`btn w-full rounded-full ${
          plan.gradient ? "bg-white text-[#4F39F6]" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
        }`}
      >
        {plan.buttonText}
      </button>
    </div>
  </div>
);

const Pricing = () => {
  return (
    <section className="my-20 container mx-auto md:max-w-7xl px-4">
      <div className="text-center my-6 md:my-8 lg:my-12 space-y-2">
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold">Simple, Transparent Pricing</h2>
        <p className="text-zinc-500">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} />
        ))}
      </div>
    </section>
  );
};

export default Pricing;