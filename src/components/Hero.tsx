"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="absolute inset-0 bg-grid-white/5"></div>
      <div className="relative container mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
                Master Your Day with <span className="text-purple-400">AI-Powered Focus</span>
              </h1>
              <p className="text-xl text-gray-300">
                FocusFlow helps you eliminate distractions and 10x your deep work using intelligent automation.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                Get Started Free <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-950">
                <Sparkles className="mr-2 h-5 w-5" /> Watch Demo
              </Button>
            </div>
          </div>

          {/* BEAUTIFUL MOCKUP — NO IMAGE NEEDED */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-3xl opacity-50 animate-pulse"></div>
            <div className="relative bg-slate-900/90 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/30 shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl"></div>
                    <div>
                      <div className="h-4 bg-purple-400/50 rounded w-32"></div>
                      <div className="h-3 bg-purple-400/30 rounded w-24 mt-2"></div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: `${i * 100}ms` }}></div>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-24 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-500/20 backdrop-blur-sm"></div>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="h-16 w-16 bg-green-500 rounded-full blur-xl opacity-70"></div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Focus Mode Active
                  </div>
                  <div className="h-16 w-16 bg-purple-500 rounded-full blur-xl opacity-70"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}