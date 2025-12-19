import Link from "next/link";
import Image from "next/image";

export default function English() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80"
            alt="English literature"
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
              English & Literature
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight" id="english-hero-title" data-content-well="english-overview" data-program="english" data-major="english" style={{ fontFamily: 'Georgia, serif' }}>
              English & Literature
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-2xl font-light">
              Explore the power of language, literature, and creative expression.
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-32 bg-white" id="english-program-overview" data-content-well="english-program-details">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1200&q=80"
                alt="English literature"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4 block">Why Study English</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>Why Study English at Northwinds?</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our English & Literature program develops critical thinking, analytical skills, and 
                effective communication—skills valued across all professions. Whether you&apos;re drawn 
                to creative writing, literary analysis, or cultural studies, you&apos;ll work closely 
                with published faculty who are passionate about teaching.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Small class sizes ensure personalized attention, while our diverse curriculum explores 
                literature from around the world and across centuries.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-accent-50/50 p-10 rounded-2xl shadow-lg border border-primary-100">
            <h3 className="text-2xl font-bold mb-8 text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>Key Highlights</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Average class size of 12 students",
                "Published faculty authors and poets",
                "Creative writing workshops",
                "Literary magazine and publishing opportunities",
                "Strong preparation for graduate school",
              ].map((highlight, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="text-primary-600 mr-3 font-bold text-xl mt-0.5">✓</span>
                  <span className="text-lg text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white" id="english-programs-offered" data-content-well="english-degree-programs">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4 block">Programs</span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Programs Offered
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100" data-major="english" data-degree="bachelor-of-arts">
              <h3 className="text-3xl font-bold mb-6 text-primary-900" style={{ fontFamily: 'Georgia, serif' }}>
                Bachelor of Arts in English
              </h3>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h4 className="font-semibold mb-3 text-xl text-gray-900">Program Overview</h4>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    Our comprehensive English major provides a strong foundation in literary analysis, 
                    critical theory, and writing. Students explore British, American, and world literature 
                    while developing their own voice as writers and critics.
                  </p>
                  <h4 className="font-semibold mb-2 text-lg text-gray-900">Duration</h4>
                  <p className="text-gray-700 text-lg">4 years (full-time)</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-xl text-gray-900">Career Outcomes</h4>
                  <ul className="space-y-2 text-gray-700 text-lg">
                    {[
                      "Publishing and editing",
                      "Teaching and education",
                      "Law and legal writing",
                      "Marketing and communications",
                      "Graduate study in literature or creative writing",
                    ].map((outcome, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary-600 mr-3 font-bold">•</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100" data-major="english" data-concentration="creative-writing">
              <h3 className="text-3xl font-bold mb-6 text-primary-900" style={{ fontFamily: 'Georgia, serif' }}>
                Creative Writing Concentration
              </h3>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h4 className="font-semibold mb-3 text-xl text-gray-900">Program Overview</h4>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    Focus on developing your craft as a writer through intensive workshops in fiction, 
                    poetry, creative nonfiction, and screenwriting. Work with published authors and 
                    build a portfolio of creative work.
                  </p>
                  <h4 className="font-semibold mb-2 text-lg text-gray-900">Requirements</h4>
                  <p className="text-gray-700 text-lg">English major with creative writing focus</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-xl text-gray-900">Career Outcomes</h4>
                  <ul className="space-y-2 text-gray-700 text-lg">
                    {[
                      "Creative writing and publishing",
                      "Content writing and copywriting",
                      "Screenwriting and film",
                      "MFA programs in creative writing",
                      "Literary journalism",
                    ].map((outcome, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary-600 mr-3 font-bold">•</span>
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="py-32 bg-white" id="english-curriculum" data-content-well="english-coursework">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4 block">Curriculum</span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Curriculum Highlights
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Core Courses",
                items: [
                  "British Literature Survey",
                  "American Literature Survey",
                  "World Literature",
                  "Literary Theory & Criticism",
                  "Advanced Writing Seminar",
                ]
              },
              {
                title: "Specialized Topics",
                items: [
                  "Shakespeare Studies",
                  "Modern & Contemporary Poetry",
                  "Postcolonial Literature",
                  "Women&apos;s Literature",
                  "Environmental Literature",
                ]
              },
              {
                title: "Writing Workshops",
                items: [
                  "Fiction Writing",
                  "Poetry Workshop",
                  "Creative Nonfiction",
                  "Screenwriting",
                  "Literary Magazine Production",
                ]
              },
            ].map((category, idx) => (
              <div key={idx} className="bg-gradient-to-br from-primary-50 to-accent-50/50 p-8 rounded-2xl shadow-lg border border-primary-100">
                <h3 className="text-xl font-bold mb-4 text-gray-900">{category.title}</h3>
                <ul className="space-y-3 text-gray-700">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start">
                      <span className="text-primary-600 mr-3 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-primary-900 to-accent-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80"
            alt="English literature"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-primary-900/95 to-accent-900/95"></div>
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif' }}>Start Your English Journey</h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto">
            Join our English program and discover the power of language and literature.
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
