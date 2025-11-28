"use client";

import { Twitter, Github, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-5 gap-10">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-4">FocusFlow</h2>
            <p className="text-gray-400 max-w-xs">
              AI-powered focus app that helps you enter deep work and 10x your productivity.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="hover:text-purple-400 transition">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-purple-400 transition">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-purple-400 transition">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-3">
              {["Features", "Pricing", "Changelog", "Roadmap"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-purple-400 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              {["About", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-purple-400 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-purple-400 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-sm text-gray-500">
          © 2025 FocusFlow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}