"use client";
import { Brain, Target, Shield, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Focus Mode",
    description: "Intelligent algorithm detects your peak focus hours and auto-schedules deep work sessions.",
  },
  {
    icon: Target,
    title: "Smart Task Prioritization",
    description: "AI analyzes urgency, deadlines, and energy levels to rank your tasks perfectly every day.",
  },
  {
    icon: Shield,
    title: "Distraction Blocker",
    description: "Automatically blocks social media, news, and noisy apps when you're in deep work mode.",
  },
  {
    icon: BarChart3,
    title: "Deep Work Analytics",
    description: "Beautiful dashboards showing your focus trends, productivity score, and weekly insights.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Powerful Features for Real Focus
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to enter flow state and get 10x more done — without burning out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-800 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 
                         hover:shadow-2xl hover:border-purple-500 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-6 
                                group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}