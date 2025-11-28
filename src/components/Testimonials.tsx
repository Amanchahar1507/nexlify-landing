"use client";

import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Frontend Engineer @ Vercel",
    content: "FocusFlow changed how I work. I went from 3-4 hours of deep work to 7+ hours daily. My PRs are now 3x faster.",
    rating: 5,
  },
  {
    name: "Michael Torres",
    role: "Founder, Stealth Startup",
    content: "Best $12 I've ever spent. The AI actually understands my energy patterns and schedules my day perfectly.",
    rating: 5,
  },
  {
    name: "Emma Larsson",
    role: "Product Designer",
    content: "Finally an app that blocks distractions without feeling restrictive. The analytics are beautiful and actually useful.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Loved by Thousands of Focused Humans
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Join productive people who reclaimed their time
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-slate-900 rounded-2xl p-8 border border-gray-200 dark:border-slate-700 
                         hover:border-purple-500 transition-all duration-300 group"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-purple-500 text-purple-500" />
                ))}
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {t.content}
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=8b5cf6&color=fff&size=128&bold=true`}
                  alt={t.name}
                  className="w-14 h-14 rounded-full ring-4 ring-white dark:ring-slate-900 shadow-lg"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-purple-500 transition-colors">
                    {t.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}