import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-primary-950 to-accent-950 text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <Logo isScrolled={false} className="mb-6" />
            <p className="text-gray-300 text-sm leading-relaxed">
              A premier liberal arts college preparing students for meaningful careers and lifelong learning.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-white">Programs</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/programs" className="hover:text-primary-300 transition-colors">All Programs</Link></li>
              <li><Link href="/programs/english" className="hover:text-primary-300 transition-colors">English & Literature</Link></li>
              <li><Link href="/programs/history" className="hover:text-primary-300 transition-colors">History</Link></li>
              <li><Link href="/programs/psychology" className="hover:text-primary-300 transition-colors">Psychology</Link></li>
              <li><Link href="/programs/fine-arts" className="hover:text-primary-300 transition-colors">Fine Arts</Link></li>
              <li><Link href="/programs/chemistry" className="hover:text-primary-300 transition-colors">Chemistry</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-white">Explore</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><Link href="/about" className="hover:text-primary-300 transition-colors">About Us</Link></li>
              <li><Link href="/admissions" className="hover:text-primary-300 transition-colors">Admissions</Link></li>
              <li><Link href="/campus-visit" className="hover:text-primary-300 transition-colors">Visit Campus</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-6 text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                888.789.6208
              </li>
              <li>
                <Link href="/admissions" className="hover:text-primary-300 transition-colors inline-flex items-center">
                  Request Information
                  <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>&copy; 2025 Northwinds College. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary-300 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
