import Link from "next/link";
import Image from "next/image";
import FAQSection from "@/components/FAQSection";

export default function Admissions() {
  const admissionsFAQs = [
    {
      question: "What is the application deadline for Northwinds College?",
      answer: "Northwinds College offers three application deadlines: <strong>Early Decision (November 15)</strong> for binding admission, <strong>Early Action (December 1)</strong> for non-binding early notification, and <strong>Regular Decision (February 1)</strong> for standard admission. Applications received after these dates will be considered on a rolling basis if space is available."
    },
    {
      question: "Is Northwinds College test-optional?",
      answer: "Yes, Northwinds College is test-optional for the 2025-2026 admissions cycle. Students may choose to submit SAT or ACT scores if they feel the scores strengthen their application, but they are not required. Our holistic review process evaluates academic performance, essays, recommendations, and extracurricular involvement regardless of test score submission."
    },
    {
      question: "What GPA do I need to be admitted to Northwinds College?",
      answer: "There is no minimum GPA requirement at Northwinds College. Our admissions process is holistic, considering the rigor of your coursework, grade trends, extracurricular activities, essays, and recommendations. Most admitted students have a weighted GPA of 3.5 or higher and have challenged themselves with honors or AP courses when available. We understand that academic performance should be evaluated in the context of opportunities available at your high school."
    },
    {
      question: "How much does it cost to attend Northwinds College?",
      answer: "The total cost of attendance for the 2025-2026 academic year is approximately <strong>$52,000</strong>, which includes tuition ($38,000), room and board ($12,000), and fees ($2,000). However, <strong>85% of our students receive financial aid</strong>, with the average need-based aid package totaling $28,000 per year. Merit scholarships ranging from $5,000 to full tuition are also available based on academic achievement and talent."
    },
    {
      question: "What financial aid options are available?",
      answer: "Northwinds College offers comprehensive financial aid including: <strong>Need-based grants</strong> (determined by FAFSA and CSS Profile), <strong>merit scholarships</strong> (no separate application required), <strong>federal student loans</strong>, <strong>work-study programs</strong>, and <strong>payment plans</strong>. We are committed to meeting 100% of demonstrated financial need for admitted students. To apply for financial aid, submit the FAFSA and CSS Profile by our priority deadline of February 15."
    },
    {
      question: "Can I apply if I'm an international student?",
      answer: "Absolutely! Northwinds College welcomes international students from around the world. International applicants should submit the same materials as domestic students, plus: <strong>TOEFL or IELTS scores</strong> (minimum TOEFL iBT 80 or IELTS 6.5), <strong>certified English translations</strong> of all academic documents, <strong>financial certification</strong> demonstrating ability to fund education, and <strong>copy of passport</strong>. International students are eligible for merit scholarships but not federal financial aid. We offer limited institutional aid for international students with demonstrated need."
    },
    {
      question: "What majors and programs does Northwinds College offer?",
      answer: "Northwinds College offers five majors in liberal arts: <strong>English & Literature</strong>, <strong>History</strong>, <strong>Psychology</strong>, <strong>Chemistry</strong>, and <strong>Fine Arts</strong>. All programs emphasize critical thinking, effective communication, and interdisciplinary learning. Students can also design individualized concentrations combining multiple disciplines. Our 15:1 student-faculty ratio ensures personalized attention and mentorship. Many students pursue double majors or add minors to customize their education."
    },
    {
      question: "Do I need to schedule a campus visit?",
      answer: "While campus visits are not required for admission, we <strong>highly recommend</strong> visiting Northwinds College to experience our community firsthand. Campus visits include a 90-minute guided tour, meetings with admissions counselors, opportunities to sit in on classes, and chances to meet current students. We offer <strong>weekday tours</strong> (Monday-Friday at 10:00 AM and 2:00 PM), <strong>Saturday tours</strong> (11:00 AM), <strong>virtual tours</strong>, and <strong>special admitted student days</strong>. Schedule your visit at least 2 weeks in advance, especially during peak admissions season (October-March)."
    },
    {
      question: "What are my chances of getting accepted?",
      answer: "Northwinds College has an acceptance rate of approximately <strong>45%</strong>, admitting students who demonstrate academic excellence, intellectual curiosity, and character. Our holistic admissions process considers: <strong>academic record</strong> (GPA and course rigor), <strong>personal essays</strong> (showcasing your voice and experiences), <strong>recommendations</strong> (from teachers and counselors), <strong>extracurricular involvement</strong> (depth over breadth), and <strong>demonstrated interest</strong> (campus visits, communication with admissions). The best way to strengthen your application is to challenge yourself academically, pursue activities you're passionate about, and craft thoughtful, authentic essays."
    },
    {
      question: "When will I receive an admissions decision?",
      answer: "Admission decisions are released on the following schedule: <strong>Early Decision applicants</strong> receive decisions by December 15, <strong>Early Action applicants</strong> by January 15, and <strong>Regular Decision applicants</strong> by April 1. All decisions are released electronically through your applicant portal. Accepted students have until <strong>May 1 (National College Decision Day)</strong> to submit their enrollment deposit and confirm attendance."
    },
    {
      question: "Can I transfer to Northwinds College from another college?",
      answer: "Yes, Northwinds College welcomes transfer students. Transfer applicants should have completed at least one semester (12 credits) at an accredited institution with a minimum GPA of <strong>2.75</strong>. Required materials include: <strong>college transcripts</strong>, <strong>high school transcripts</strong>, <strong>transfer essay</strong> explaining your reasons for transferring, and <strong>one academic recommendation</strong> from a college professor. Transfer credits are evaluated individually; typically, courses with grades of C or higher from accredited institutions may transfer. The transfer application deadline is <strong>March 15</strong> for fall enrollment and <strong>November 1</strong> for spring enrollment."
    },
    {
      question: "What housing options are available for first-year students?",
      answer: "All first-year students are required to live on campus in our residence halls, fostering community and engagement. First-year housing options include: <strong>traditional double rooms</strong> (most common), <strong>suite-style living</strong> (shared bathroom between two rooms), and <strong>wellness housing</strong> (substance-free floors). All residence halls feature study lounges, laundry facilities, and common areas. Room assignments are made in July based on housing preferences submitted with your enrollment deposit. <strong>Room and board</strong> is approximately $12,000 per year and includes a meal plan with dining hall access."
    }
  ];

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
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-serif text-white mb-6 leading-[1.1] tracking-tight" id="admissions-hero-title" data-content-well="admissions-overview">
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
            <h2 className="text-5xl md:text-6xl font-bold font-serif text-gray-900 mb-6">
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
            <h2 className="text-5xl md:text-6xl font-bold font-serif text-gray-900 mb-6">
              Admission Requirements
            </h2>
          </div>
          
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 mb-8">
            <h3 className="text-2xl font-bold font-serif mb-6 text-gray-900">General Requirements</h3>
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
            <h3 className="text-2xl font-bold font-serif mb-6 text-gray-900">What We Look For</h3>
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
            <h2 className="text-5xl md:text-6xl font-bold font-serif text-gray-900 mb-6">
              Financial Aid & Scholarships
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We are committed to making a Northwinds education accessible to all qualified students.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 p-10 rounded-2xl shadow-lg border border-primary-200 hover:shadow-xl transition-all transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold font-serif mb-4 text-gray-900">Need-Based Aid</h3>
              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                We are committed to making a Northwinds education accessible. Over 85% of our students 
                receive some form of financial assistance through grants, loans, and work-study programs.
              </p>
              <Link href="#" className="text-primary-700 font-semibold hover:text-primary-800 transition-colors inline-flex items-center">
                Learn more <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>

            <div className="bg-gradient-to-br from-accent-50 to-accent-100/50 p-10 rounded-2xl shadow-lg border border-accent-200 hover:shadow-xl transition-all transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold font-serif mb-4 text-gray-900">Merit Scholarships</h3>
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

      {/* FAQ Section */}
      <FAQSection
        title="Admissions Questions Answered"
        description="Get answers to the most common questions about applying to Northwinds College."
        faqs={admissionsFAQs}
      />

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
          <h2 className="text-5xl md:text-6xl font-bold font-serif mb-6">Ready to Apply?</h2>
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


