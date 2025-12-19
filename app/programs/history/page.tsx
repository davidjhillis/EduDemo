import Link from "next/link";
import Image from "next/image";

export default function History() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
            alt="History"
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
              History
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight" id="history-hero-title" data-content-well="history-overview" data-program="history" data-major="history" style={{ fontFamily: 'Georgia, serif' }}>
              History
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-2xl font-light">
              Understand the past to shape the future.
            </p>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-32 bg-white" id="history-program-overview" data-content-well="history-program-details">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80"
                alt="History"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4 block">Why Study History</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>Why Study History at Northwinds?</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our History program develops critical thinking, research skills, and the ability to 
                analyze complex events and their consequences. History majors learn to evaluate evidence, 
                construct arguments, and communicate effectively—skills essential for careers in law, 
                education, public service, and beyond.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Work closely with faculty who are active researchers and published scholars, gaining 
                hands-on experience with primary sources and historical research methods.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-accent-50 to-primary-50/50 p-10 rounded-2xl shadow-lg border border-accent-100">
            <h3 className="text-2xl font-bold mb-8 text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>Key Highlights</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Access to extensive archives and primary sources",
                "Research opportunities with faculty",
                "Study abroad programs",
                "Internship opportunities at museums and archives",
                "Excellent preparation for law school and graduate study",
              ].map((highlight, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="text-accent-600 mr-3 font-bold text-xl mt-0.5">✓</span>
                  <span className="text-lg text-gray-700">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Programs Offered */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white" id="history-programs-offered" data-content-well="history-degree-programs">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4 block">Programs</span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Programs Offered
            </h2>
          </div>
          
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100" data-major="history" data-degree="bachelor-of-arts">
            <h3 className="text-3xl font-bold mb-6 text-primary-900" style={{ fontFamily: 'Georgia, serif' }}>
              Bachelor of Arts in History
            </h3>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h4 className="font-semibold mb-3 text-xl text-gray-900">Program Overview</h4>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  Our History major provides comprehensive coverage of American, European, and world 
                  history. Students develop expertise in historical research methods, analysis of 
                  primary sources, and historical writing.
                </p>
                <h4 className="font-semibold mb-2 text-lg text-gray-900">Duration</h4>
                <p className="text-gray-700 text-lg mb-4">4 years (full-time)</p>
                <h4 className="font-semibold mb-3 text-lg text-gray-900">Areas of Focus</h4>
                <ul className="space-y-2 text-gray-700 text-lg">
                  {[
                    "American History",
                    "European History",
                    "World History & Global Studies",
                    "Public History & Museum Studies",
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
                    "Law and legal professions",
                    "Teaching and education",
                    "Museums and archives",
                    "Public service and government",
                    "Journalism and media",
                    "Graduate study in history",
                    "Research and consulting",
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
      </section>

      {/* Curriculum Highlights */}
      <section className="py-32 bg-white" id="history-curriculum" data-content-well="history-coursework">
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
                  "World History Survey",
                  "American History Survey",
                  "European History Survey",
                  "Historical Methods & Research",
                  "Historiography",
                ]
              },
              {
                title: "Specialized Topics",
                items: [
                  "Civil War & Reconstruction",
                  "World War II & Modern Europe",
                  "Colonial America",
                  "African American History",
                  "Women&apos;s History",
                ]
              },
              {
                title: "Research & Experience",
                items: [
                  "Senior thesis project",
                  "Archive research methods",
                  "Museum studies courses",
                  "Internship opportunities",
                  "Study abroad programs",
                ]
              },
            ].map((category, idx) => (
              <div key={idx} className="bg-gradient-to-br from-accent-50 to-primary-50/50 p-8 rounded-2xl shadow-lg border border-accent-100">
                <h3 className="text-xl font-bold mb-4 text-gray-900">{category.title}</h3>
                <ul className="space-y-3 text-gray-700">
                  {category.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start">
                      <span className="text-accent-600 mr-3 font-bold">•</span>
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
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80"
            alt="History"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-primary-900/95 to-accent-900/95"></div>
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif' }}>Start Your History Journey</h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto">
            Join our History program and explore the stories that shape our world.
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
