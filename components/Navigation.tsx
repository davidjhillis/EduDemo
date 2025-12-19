"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white backdrop-blur-xl shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Logo isScrolled={isScrolled} />

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            <Link
              href="/"
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                isScrolled 
                  ? 'text-gray-900 hover:text-primary-600 hover:bg-gray-50' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Home
            </Link>
            <Link
              href="/admissions"
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                isScrolled 
                  ? 'text-gray-900 hover:text-primary-600 hover:bg-gray-50' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Admissions
            </Link>
            <div className="relative group">
              <button 
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all flex items-center ${
                  isScrolled 
                    ? 'text-gray-900 hover:text-primary-600 hover:bg-gray-50' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                Programs
                <svg className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100 overflow-hidden">
                <Link href="/programs" className="block px-5 py-3 text-sm font-semibold text-primary-600 hover:bg-primary-50 border-b border-gray-100">
                  All Programs
                </Link>
                <Link href="/programs/english" className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                  English & Literature
                </Link>
                <Link href="/programs/history" className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                  History
                </Link>
                <Link href="/programs/psychology" className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                  Psychology
                </Link>
                <Link href="/programs/fine-arts" className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                  Fine Arts
                </Link>
                <Link href="/programs/chemistry" className="block px-5 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                  Chemistry
                </Link>
              </div>
            </div>
            <Link
              href="/about"
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                isScrolled 
                  ? 'text-gray-900 hover:text-primary-600 hover:bg-gray-50' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              About Us
            </Link>
            <Link
              href="/campus-visit"
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                isScrolled 
                  ? 'text-gray-900 hover:text-primary-600 hover:bg-gray-50' 
                  : 'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Visit Campus
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex md:items-center">
            <Link
              href="/admissions"
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                isScrolled
                  ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg hover:shadow-xl hover:-translate-y-0.5'
                  : 'bg-white text-slate-900 hover:bg-gray-50 shadow-lg hover:shadow-xl hover:-translate-y-0.5'
              }`}
            >
              Request Info
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled 
                  ? 'text-gray-900 hover:bg-gray-100' 
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-xl">
          <div className="px-6 py-4 space-y-1">
            <Link
              href="/"
              className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/admissions"
              className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Admissions
            </Link>
            <Link
              href="/programs"
              className="block px-4 py-3 text-primary-600 hover:bg-primary-50 rounded-lg font-semibold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              All Programs
            </Link>
            <Link
              href="/programs/english"
              className="block px-8 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              English & Literature
            </Link>
            <Link
              href="/programs/history"
              className="block px-8 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              History
            </Link>
            <Link
              href="/programs/psychology"
              className="block px-8 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Psychology
            </Link>
            <Link
              href="/programs/fine-arts"
              className="block px-8 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Fine Arts
            </Link>
            <Link
              href="/programs/chemistry"
              className="block px-8 py-2 text-gray-600 hover:bg-gray-50 rounded-lg text-sm transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Chemistry
            </Link>
            <Link
              href="/about"
              className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/campus-visit"
              className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Visit Campus
            </Link>
            <Link
              href="/admissions"
              className="block px-4 py-3 bg-primary-600 text-white rounded-lg text-center font-semibold hover:bg-primary-700 transition-colors mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Request Info
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}


