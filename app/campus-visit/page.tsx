import Link from "next/link";
import Image from "next/image";

export default function CampusVisit() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-primary-900 to-accent-900">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1562774053-701939374585?w=1920&q=80"
            alt="College campus"
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
              Visit Us
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight" id="campus-visit-hero-title" data-content-well="campus-visit-overview" style={{ fontFamily: 'Georgia, serif' }}>
              Visit Northwinds College
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-2xl font-light">
              Experience our campus, meet our community, and see your future.
            </p>
          </div>
        </div>
      </section>

      {/* Campus Overview */}
      <section className="py-32 bg-white" id="campus-overview" data-content-well="campus-facilities">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl order-first md:order-last">
              <Image
                src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1200&q=80"
                alt="College campus"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4 block">Campus</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>Our Beautiful Campus</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Nestled on 200 acres of rolling hills, Northwinds College offers a picturesque setting 
                for your college experience. Our historic buildings blend seamlessly with modern facilities, 
                creating an inspiring environment for learning and growth.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From our state-of-the-art library to our vibrant student center, every space is designed 
                to foster intellectual curiosity and community engagement.
              </p>
            </div>
          </div>

          <div className="mt-20 bg-gradient-to-br from-primary-50 to-accent-50/50 p-10 rounded-2xl shadow-lg border border-primary-100">
            <h3 className="text-2xl font-bold mb-8 text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>Campus Highlights</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "200-acre campus with historic and modern buildings",
                "State-of-the-art library with extensive collections",
                "Modern science laboratories and research facilities",
                "Art studios and performance spaces",
                "Residential halls and dining facilities",
                "Recreation center and athletic facilities",
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

      {/* Visit Options */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white" id="visit-options" data-content-well="campus-visit-options">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4 block">Ways to Visit</span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Ways to Visit
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the option that works best for you—we&apos;re here to help you experience Northwinds.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-4 text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>In-Person Campus Tour</h3>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                Schedule a guided tour of our campus facilities. Tours are available Monday through Friday 
                and include visits to academic buildings, residence halls, dining facilities, and student 
                life areas.
              </p>
              <ul className="space-y-3 text-gray-700 mb-8">
                {[
                  "Duration: 90 minutes",
                  "Includes meeting with admissions counselor",
                  "Opportunity to sit in on a class (when available)",
                  "Meet current students and faculty",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary-600 mr-3 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/schedule-visit"
                className="group bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300 inline-flex items-center hover:-translate-y-1"
              >
                Schedule In-Person Tour
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <h3 className="text-2xl font-bold mb-4 text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>Virtual Tour</h3>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                Can&apos;t make it to campus? Take a virtual tour from the comfort of your home. 
                Our virtual tours include 360° views, video walkthroughs, and interactive experiences.
              </p>
              <ul className="space-y-3 text-gray-700 mb-8">
                {[
                  "Available 24/7",
                  "Interactive virtual reality experience",
                  "Schedule a virtual meeting with admissions",
                  "Live Q&A sessions with current students",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary-600 mr-3 font-bold">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/schedule-visit?tab=virtual"
                className="group bg-gradient-to-r from-accent-600 to-accent-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-accent-500/30 transition-all duration-300 inline-flex items-center hover:-translate-y-1"
              >
                Take Virtual Tour
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Info Sessions */}
      <section className="py-32 bg-white" id="info-sessions" data-content-well="information-sessions">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4 block">Information Sessions</span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Information Sessions
            </h2>
          </div>
          
          <div className="bg-gradient-to-br from-primary-50 to-accent-50/50 p-10 rounded-2xl shadow-xl border border-primary-100">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Join us for an information session to learn more about our programs, admissions process, 
              financial aid options, and student life. Sessions are held monthly and include Q&A 
              with faculty, current students, and admissions staff.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h4 className="font-bold text-xl mb-4 text-gray-900">Upcoming Sessions</h4>
                <ul className="space-y-3 text-gray-700">
                  {[
                    "January 15, 2025 - 2:00 PM",
                    "February 12, 2025 - 2:00 PM",
                    "March 19, 2025 - 2:00 PM",
                    "April 16, 2025 - 2:00 PM",
                  ].map((session, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary-600 mr-3 font-bold">•</span>
                      <span>{session}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-xl mb-4 text-gray-900">What to Expect</h4>
                <ul className="space-y-3 text-gray-700">
                  {[
                    "Academic program overview",
                    "Campus tour",
                    "Financial aid information",
                    "Application process guidance",
                    "Student life presentation",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary-600 mr-3 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              href="/schedule-visit?tab=info-sessions"
              className="group bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-primary-500/30 transition-all duration-300 inline-flex items-center hover:-translate-y-1"
            >
              Register for Info Session
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-primary-900 to-accent-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1920&q=80"
            alt="College campus"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-primary-900/95 to-accent-900/95"></div>
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif' }}>Ready to See Northwinds College?</h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto">
            Schedule your visit today and take the first step toward your liberal arts education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/schedule-visit"
              className="group bg-white text-slate-900 px-10 py-5 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 inline-flex items-center justify-center hover:-translate-y-1"
            >
              Schedule Campus Tour
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/admissions"
              className="group bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm hover:-translate-y-1"
            >
              Request Information
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


