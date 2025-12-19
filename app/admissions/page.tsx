import Link from "next/link";
import Image from "next/image";

export default function Admissions() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Premium */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&q=80"
            alt="Students"
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
              Admissions
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight" id="admissions-hero-title" data-content-well="admissions-overview" style={{ fontFamily: 'Georgia, serif' }}>
              Begin Your Journey
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-2xl font-light">
              Your path to a transformative liberal arts education starts here.
            </p>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-32 bg-white" id="application-process" data-content-well="admissions-process">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4 block">Application</span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              How to Apply
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A straightforward process designed to help us get to know you and your aspirations.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Submit Application", description: "Complete your online application form or use the Common Application" },
              { step: 2, title: "Submit Documents", description: "Provide transcripts, test scores, and essays" },
              { step: 3, title: "Campus Visit", description: "Schedule a visit to experience our campus community" },
              { step: 4, title: "Enrollment", description: "Accept your offer and join the Northwinds community" },
            ].map((item, idx) => (
              <div key={item.step} className="text-center bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100" data-step={item.step}>
                <div className={`bg-gradient-to-br ${idx % 2 === 0 ? 'from-primary-600 to-primary-700' : 'from-accent-600 to-accent-700'} text-white rounded-full w-20 h-20 flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg`}>
                  {item.step}
                </div>
                <h3 className="font-semibold text-xl mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white" id="admission-requirements" data-content-well="admissions-requirements">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4 block">Requirements</span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Admission Requirements
            </h2>
          </div>
          
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>General Requirements</h3>
            <ul className="space-y-4 text-gray-700">
              {[
                "High school diploma or equivalent",
                "Official high school transcripts",
                "SAT or ACT scores (optional for 2025-2026)",
                "Personal essay or statement of purpose",
                "Two letters of recommendation",
                "Application fee or fee waiver",
              ].map((req, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-primary-600 mr-3 font-bold text-xl mt-0.5">✓</span>
                  <span className="text-lg">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>What We Look For</h3>
            <div className="space-y-6">
              {[
                { title: "Academic Excellence", description: "Strong performance in a rigorous high school curriculum, including honors and AP courses when available." },
                { title: "Intellectual Curiosity", description: "A demonstrated passion for learning, critical thinking, and engagement with diverse ideas and perspectives." },
                { title: "Character & Leadership", description: "Involvement in extracurricular activities, community service, and evidence of leadership potential." },
              ].map((item, idx) => (
                <div key={idx} className="border-l-4 border-primary-500 pl-6">
                  <h4 className="font-semibold text-xl mb-2 text-gray-900">{item.title}</h4>
                  <p className="text-gray-700 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Financial Aid */}
      <section className="py-32 bg-white" id="financial-aid" data-content-well="financial-aid-scholarships">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4 block">Financial Support</span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              Financial Aid & Scholarships
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are committed to making a Northwinds education accessible to all qualified students.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 p-10 rounded-2xl shadow-lg border border-primary-200 hover:shadow-xl transition-all transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>Need-Based Aid</h3>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                We are committed to making a Northwinds education accessible. Over 85% of our students 
                receive some form of financial assistance through grants, loans, and work-study programs.
              </p>
              <Link href="#" className="text-primary-700 font-semibold hover:text-primary-800 transition-colors inline-flex items-center">
                Learn more <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-accent-50 to-accent-100/50 p-10 rounded-2xl shadow-lg border border-accent-200 hover:shadow-xl transition-all transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4 text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>Merit Scholarships</h3>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                Academic excellence scholarships, leadership awards, and talent-based scholarships are 
                available. Awards range from $5,000 to full tuition.
              </p>
              <Link href="#" className="text-accent-700 font-semibold hover:text-accent-800 transition-colors inline-flex items-center">
                View scholarships <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-primary-900 to-accent-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1920&q=80"
            alt="Students studying"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-primary-900/95 to-accent-900/95"></div>
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Georgia, serif' }}>Ready to Apply?</h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto">
            Schedule a meeting with our admissions team to learn more about Northwinds College.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/campus-visit"
              className="group bg-white text-slate-900 px-10 py-5 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-white/20 transition-all duration-300 inline-flex items-center justify-center hover:-translate-y-1"
            >
              Schedule Campus Visit
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <button className="group bg-transparent border-2 border-white/30 text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300 inline-flex items-center justify-center backdrop-blur-sm hover:-translate-y-1">
              Request Information
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}


