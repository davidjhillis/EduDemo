import Link from "next/link";
import Image from "next/image";

export default function Chemistry() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1920&q=80"
            alt="Chemistry lab"
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
              Chemistry
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight" id="chemistry-hero-title" data-content-well="chemistry-overview" data-program="chemistry" data-major="chemistry" style={{ fontFamily: 'Georgia, serif' }}>
              Chemistry
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-2xl font-light">
              Explore the molecular world and advance scientific discovery.
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-32 bg-white" id="chemistry-program-overview" data-content-well="chemistry-program-details">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1200&q=80"
                alt="Chemistry laboratory"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4 block">Why Study Chemistry</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>Why Study Chemistry at Northwinds?</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our Chemistry program combines rigorous theoretical study with hands-on laboratory experience, 
                preparing students for careers in research, industry, medicine, and education. Work in 
                state-of-the-art laboratories with faculty who are active researchers and published scientists.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Small class sizes ensure personalized attention, while research opportunities allow you to 
                work directly with faculty on cutting-edge projects in organic, inorganic, physical, and 
                analytical chemistry.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-accent-50/50 p-10 rounded-2xl shadow-lg border border-primary-100">
            <h3 className="text-2xl font-bold mb-8 text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>Key Highlights</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "State-of-the-art chemistry laboratories",
                "Research opportunities with faculty",
                "Modern instrumentation (NMR, GC-MS, HPLC)",
                "Internship placements in industry and research",
                "ACS-accredited curriculum",
                "Strong preparation for graduate school and medical school",
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
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white" id="chemistry-programs-offered" data-content-well="chemistry-degree-programs">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4 block">Programs</span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Programs Offered
            </h2>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100" data-major="chemistry" data-degree="bachelor-of-arts">
              <h3 className="text-3xl font-bold mb-6 text-primary-900" style={{ fontFamily: 'Georgia, serif' }}>
                Bachelor of Arts in Chemistry
              </h3>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h4 className="font-semibold mb-3 text-xl text-gray-900">Program Overview</h4>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    Our BA in Chemistry provides a solid foundation in all major areas of chemistry while 
                    allowing flexibility for students interested in combining chemistry with other fields 
                    such as education, business, or pre-professional programs.
                  </p>
                  <h4 className="font-semibold mb-2 text-lg text-gray-900">Duration</h4>
                  <p className="text-gray-700 text-lg mb-4">4 years (full-time)</p>
                  <h4 className="font-semibold mb-3 text-lg text-gray-900">Areas of Study</h4>
                  <ul className="space-y-2 text-gray-700 text-lg">
                    {[
                      "General Chemistry",
                      "Organic Chemistry",
                      "Inorganic Chemistry",
                      "Physical Chemistry",
                      "Analytical Chemistry",
                    ].map((area, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary-600 mr-3 font-bold">•</span>
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-xl text-gray-900">Career Outcomes</h4>
                  <ul className="space-y-2 text-gray-700 text-lg">
                    {[
                      "Chemical industry",
                      "Pharmaceutical research",
                      "Environmental science",
                      "Science education",
                      "Graduate study in chemistry",
                      "Medical school and health professions",
                      "Forensic science",
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

            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100" data-major="chemistry" data-degree="bachelor-of-science">
              <h3 className="text-3xl font-bold mb-6 text-primary-900" style={{ fontFamily: 'Georgia, serif' }}>
                Bachelor of Science in Chemistry
              </h3>
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h4 className="font-semibold mb-3 text-xl text-gray-900">Program Overview</h4>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    Our BS in Chemistry provides comprehensive, in-depth study of chemistry with additional 
                    mathematics and physics requirements. This program is ideal for students planning to 
                    pursue graduate study in chemistry or careers in research and development.
                  </p>
                  <h4 className="font-semibold mb-2 text-lg text-gray-900">Requirements</h4>
                  <p className="text-gray-700 text-lg">Chemistry major with additional advanced coursework in chemistry, mathematics, and physics</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-xl text-gray-900">Career Outcomes</h4>
                  <ul className="space-y-2 text-gray-700 text-lg">
                    {[
                      "Research and development",
                      "Pharmaceutical industry",
                      "Graduate programs in chemistry",
                      "Chemical engineering",
                      "Materials science",
                      "Analytical chemistry",
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
      <section className="py-32 bg-white" id="chemistry-curriculum" data-content-well="chemistry-coursework">
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
                  "General Chemistry I & II",
                  "Organic Chemistry I & II",
                  "Inorganic Chemistry",
                  "Physical Chemistry",
                  "Analytical Chemistry",
                  "Biochemistry",
                ]
              },
              {
                title: "Advanced Topics",
                items: [
                  "Advanced Organic Chemistry",
                  "Instrumental Analysis",
                  "Quantum Chemistry",
                  "Polymer Chemistry",
                  "Environmental Chemistry",
                  "Medicinal Chemistry",
                ]
              },
              {
                title: "Laboratory & Research",
                items: [
                  "Laboratory courses in all areas",
                  "Senior research project",
                  "Faculty research collaboration",
                  "Internship opportunities",
                  "Independent study options",
                  "Presentation at research symposia",
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

      {/* Research Opportunities */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white" id="chemistry-research" data-content-well="chemistry-research-opportunities">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4 block">Research</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>Research Opportunities</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Chemistry students at Northwinds have the opportunity to work directly with faculty on 
                cutting-edge research projects. Our faculty are active researchers in areas including 
                organic synthesis, materials chemistry, environmental chemistry, and biochemistry.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Students present their research at regional and national conferences and have opportunities 
                to co-author publications with faculty mentors.
              </p>
              <ul className="space-y-4 text-gray-700">
                {[
                  "Faculty-mentored research projects",
                  "Summer research opportunities",
                  "Presentation at scientific conferences",
                  "Co-authorship on research publications",
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
                src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=1200&q=80"
                alt="Chemistry research"
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
            src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=1920&q=80"
            alt="Chemistry lab"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-primary-900/95 to-accent-900/95"></div>
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif' }}>Start Your Chemistry Journey</h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto">
            Join our Chemistry program and explore the molecular world through hands-on research and discovery.
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


