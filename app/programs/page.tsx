import Link from "next/link";
import Image from "next/image";

export default function Programs() {
  const programs = [
    {
      id: "english",
      name: "English & Literature",
      description: "Explore the power of language, literature, and creative expression.",
      image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&q=80",
      href: "/programs/english"
    },
    {
      id: "history",
      name: "History",
      description: "Understand the past to shape the future.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      href: "/programs/history"
    },
    {
      id: "psychology",
      name: "Psychology",
      description: "Understand human behavior, thought, and emotion.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80",
      href: "/programs/psychology"
    },
    {
      id: "fine-arts",
      name: "Fine Arts",
      description: "Express your creativity and develop your artistic voice.",
      image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
      href: "/programs/fine-arts"
    },
    {
      id: "chemistry",
      name: "Chemistry",
      description: "Explore the molecular world and advance scientific discovery.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80",
      href: "/programs/chemistry"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80"
            alt="Academic programs"
            fill
            className="object-cover"
            unoptimized
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 via-primary-900/60 to-accent-900/65"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 w-full">
          <div className="max-w-3xl">
            <span className="text-sm font-semibold tracking-wider uppercase text-white/90 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 inline-block mb-6">
              Academic Programs
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-serif text-white mb-6 leading-[1.1] tracking-tight" id="programs-hero-title" data-content-well="programs-overview">
              Academic Programs
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-2xl font-light">
              Discover diverse programs across the humanities, sciences, arts, and social sciences. 
              Each program is designed to develop critical thinking, creativity, and real-world skills.
            </p>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-32 bg-white" id="all-programs-section" data-content-well="programs-list">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4 block">Our Programs</span>
            <h2 className="text-5xl md:text-6xl font-bold font-serif text-gray-900 mb-6">
              Our Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from five distinct majors, each offering rigorous academics, small class sizes, 
              and personalized faculty mentorship.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, idx) => (
              <Link
                key={program.id}
                href={program.href}
                className="group relative overflow-hidden rounded-2xl aspect-[4/3] shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
                data-program={program.id}
                data-major={program.name.toLowerCase()}
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
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold font-serif text-white mb-3 group-hover:translate-x-2 transition-transform duration-300">
                    {program.name}
                  </h3>
                  <p className="text-white/90 mb-4 group-hover:translate-x-2 transition-transform duration-300">
                    {program.description}
                  </p>
                  <div className="flex items-center text-white group-hover:translate-x-2 transition-transform duration-300">
                    <span className="text-sm font-medium">Learn more</span>
                    <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Liberal Arts */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white" id="liberal-arts-value" data-content-well="liberal-arts-explanation">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4 block">Liberal Arts</span>
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 mb-6">Why a Liberal Arts Education?</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                A liberal arts education at Northwinds College prepares you for success in any field. 
                Our interdisciplinary approach develops critical thinking, effective communication, 
                and problem-solving skills that employers value.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Whether you choose English, History, Psychology, Fine Arts, or Chemistry, you&apos;ll 
                receive personalized attention from distinguished faculty and gain hands-on experience 
                through research, internships, and creative projects.
              </p>
              <ul className="space-y-4 text-gray-700">
                {[
                  "Small class sizes (average 15 students)",
                  "Personalized faculty mentorship",
                  "Research and internship opportunities",
                  "Strong preparation for graduate school and careers",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary-600 mr-3 font-bold text-xl mt-0.5">✓</span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80"
                alt="Students studying together"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-primary-900 to-accent-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80"
            alt="Academic programs"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-primary-900/95 to-accent-900/95"></div>
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold font-serif mb-6">Ready to Explore?</h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto">
            Learn more about our programs and find the right fit for your academic and career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="group bg-white text-slate-900 px-10 py-5 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 inline-flex items-center justify-center hover:-translate-y-1"
            >
              Apply Now
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/campus-visit"
              className="group bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm hover:-translate-y-1"
            >
              Schedule Campus Visit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


