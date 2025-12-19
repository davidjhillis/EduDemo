"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Premium Full-Screen Experience */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            style={{ 
              objectPosition: 'center center', 
              transform: `scale(${1 + scrollY * 0.0005})`,
              minWidth: '100%',
              minHeight: '100%',
              width: '100%',
              height: '100%'
            }}
            preload="auto"
          >
            <source src="/8036712-uhd_4096_2160_25fps.mp4" type="video/mp4" />
            <source src="/14931859_3840_2160_32fps.mp4" type="video/mp4" />
            <source src="/5530414-uhd_3840_2160_25fps.mp4" type="video/mp4" />
            <source src="/campus-video.mp4" type="video/mp4" />
          </video>
          {/* Overlay Gradient - Minimal opacity for crisp, clear video */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/25 via-primary-900/20 to-accent-900/25"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 w-full">
          <div className="max-w-3xl">
            {/* Small Label */}
            <div className="mb-6 inline-block">
              <span className="text-sm font-semibold tracking-wider uppercase text-white/90 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20">
                Since 1895
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
              Education that
              <span className="block mt-2 bg-gradient-to-r from-primary-300 via-accent-300 to-primary-200 bg-clip-text text-transparent">
                transforms lives
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl sm:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl font-light">
              A premier liberal arts college preparing students for meaningful careers, 
              lifelong learning, and purposeful leadership.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/admissions"
                className="group relative bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 inline-flex items-center justify-center overflow-hidden hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1"
              >
                <span className="relative z-10">Begin Your Journey</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/campus-visit"
                className="group bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm hover:bg-white/10 hover:border-white/50 hover:-translate-y-1"
              >
                Explore Campus
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-16 flex flex-col items-center text-white/60 animate-bounce">
              <span className="text-sm mb-2">Scroll to explore</span>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar - Floating Above Content */}
      <section className="relative -mt-20 z-20 mb-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-100 p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent mb-2">95%</div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Graduate Success</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent-600 to-accent-700 bg-clip-text text-transparent mb-2">15:1</div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Student-Faculty Ratio</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent mb-2">$60K</div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Avg. Starting Salary</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-accent-500 to-primary-500 bg-clip-text text-transparent mb-2">85%</div>
                <div className="text-sm font-semibold text-gray-600 uppercase tracking-wider">Receive Financial Aid</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Northwinds - Premium Card Design */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50" id="why-northwinds" data-content-well="why-northwinds">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4 block">Why Choose Us</span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Every student matters.
              <br />
              <span className="text-gray-600">Every story counts.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              At Northwinds, we don&apos;t just educate—we transform. Our commitment to personalized 
              learning creates leaders, thinkers, and changemakers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                >
                  <source src="/5530414-uhd_3840_2160_25fps.mp4" type="video/mp4" />
                </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-5xl font-bold text-white mb-2">95%</div>
                  <h3 className="text-2xl font-bold text-white">Graduate Success</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-700 leading-relaxed">
                  Our graduates excel in diverse fields—from law and medicine to education and the arts, 
                  equipped with critical thinking and leadership skills.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                >
                  <source src="/5536728-uhd_3840_2160_25fps.mp4" type="video/mp4" />
                </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-accent-900/90 via-accent-900/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-5xl font-bold text-white mb-2">15:1</div>
                  <h3 className="text-2xl font-bold text-white">Small Classes</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-700 leading-relaxed">
                  With an average class size of 15 students, you&apos;ll receive personalized attention 
                  from distinguished faculty who know your name and your goals.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                >
                  <source src="/6549288-uhd_3840_2160_25fps.mp4" type="video/mp4" />
                </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-800/90 via-accent-800/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-5xl font-bold text-white mb-2">100%</div>
                  <h3 className="text-2xl font-bold text-white">Career Support</h3>
                </div>
              </div>
              <div className="p-8">
                <p className="text-gray-700 leading-relaxed">
                  Our comprehensive career services help you explore opportunities, connect with alumni, 
                  and launch your career with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview - Interactive Grid */}
      <section className="py-32 bg-white" id="programs-preview" data-content-well="programs-overview">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4 block">Academic Excellence</span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Explore Our Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Five distinct majors, each designed to develop critical thinking, creativity, 
              and real-world skills for tomorrow&apos;s leaders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "English & Literature", href: "/programs/english", image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=80" },
              { name: "History", href: "/programs/history", image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80" },
              { name: "Psychology", href: "/programs/psychology", image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80" },
              { name: "Fine Arts", href: "/programs/fine-arts", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80" },
              { name: "Chemistry", href: "/programs/chemistry", image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80" },
            ].map((program, idx) => (
              <Link
                key={program.name}
                href={program.href}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                data-program={program.name.toLowerCase().replace(/\s+/g, '-')}
                data-major={program.name.toLowerCase().replace(/\s+/g, '-')}
              >
                <div className="absolute inset-0">
                  <Image
                    src={program.image}
                    alt={program.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    unoptimized
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${
                    idx % 2 === 0 
                      ? 'from-primary-900/90 via-primary-900/60 to-primary-900/40 group-hover:from-primary-900/80' 
                      : 'from-accent-900/90 via-accent-900/60 to-accent-900/40 group-hover:from-accent-900/80'
                  } transition-all duration-500`}></div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:translate-x-2 transition-transform duration-300">
                    {program.name}
                  </h3>
                  <div className="flex items-center text-white/90 group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-sm font-medium">Learn more</span>
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/programs"
              className="inline-flex items-center text-lg font-semibold text-primary-600 hover:text-primary-700 transition-colors"
            >
              View all programs
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials - Premium Layout */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-blue-50/30" id="testimonials" data-content-well="student-testimonials">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=1200&q=80"
                alt="Student testimonial"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4 block">Student Story</span>
              <blockquote className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight italic">
                &quot;Northwinds College provided me with a solid foundation in critical thinking and 
                communication. The small class sizes and dedicated faculty helped me discover my passion 
                for literature.&quot;
              </blockquote>
              <div className="border-t-2 border-primary-200 pt-6">
                <p className="text-xl text-gray-900 font-semibold">Sarah Martinez</p>
                <p className="text-lg text-gray-600">English & Literature Graduate, Class of 2023</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition - Premium Design */}
      <section className="py-32 bg-white" id="awards-recognition" data-content-well="awards-recognition">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4 block">Recognition</span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Northwinds College has been recognized by leading educational organizations 
              for our commitment to academic excellence and student success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { org: "Carnegie Foundation", title: "Baccalaureate College", year: "2025" },
              { org: "U.S. News & World Report", title: "Best Liberal Arts Colleges", year: "2024-2025" },
              { org: "Georgetown University", title: "Top 10% Return on Investment", year: "2025" },
            ].map((award, idx) => (
              <div key={idx} className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="mb-6">
                  <div className={`bg-gradient-to-br ${
                    idx % 2 === 0 
                      ? 'from-primary-50 to-primary-100 border-primary-200' 
                      : 'from-accent-50 to-accent-100 border-accent-200'
                  } rounded-xl px-6 py-4 border-2`}>
                    <div className={`text-xs font-semibold ${
                      idx % 2 === 0 ? 'text-primary-600' : 'text-accent-600'
                    } uppercase tracking-wider mb-1`}>{award.org}</div>
                    <div className="text-sm font-bold text-gray-900">{award.title}</div>
                    <div className="text-xs text-gray-600 mt-1">{award.year}</div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Recognized for excellence in liberal arts education and exceptional student outcomes.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-primary-900 to-accent-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1503676260728-1c00e0947c63?w=1920&q=80"
            alt="Students studying"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-primary-900/95 to-accent-900/95"></div>
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Ready to begin your journey?</h2>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join a community of thinkers, leaders, and changemakers. Your future starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="group bg-white text-slate-900 px-10 py-5 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 inline-flex items-center justify-center hover:-translate-y-1"
            >
              Start Your Application
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/campus-visit"
              className="group bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm hover:-translate-y-1"
            >
              Schedule a Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
