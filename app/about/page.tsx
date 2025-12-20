import Link from "next/link";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1920&q=80"
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
              About Us
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold font-serif text-white mb-6 leading-[1.1] tracking-tight" id="about-hero-title" data-content-well="about-overview">
              About Northwinds College
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 leading-relaxed max-w-2xl font-light">
              Excellence in liberal arts education since 1895.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-white" id="mission-vision" data-content-well="mission-vision-values">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1562774053-701939374585?w=1200&q=80"
                alt="College campus"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4 block">Our Mission</span>
              <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Northwinds College is dedicated to providing a transformative liberal arts education 
                that fosters critical thinking, creativity, and ethical leadership. We prepare students 
                for meaningful careers and lifelong learning through rigorous academics, small class sizes, 
                and close faculty mentorship.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our commitment extends beyond the classroom, fostering a vibrant intellectual community 
                where students explore diverse perspectives, engage with complex ideas, and develop the 
                skills needed to thrive in an ever-changing world.
              </p>
            </div>

            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl order-first md:order-last">
              <Image
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=80"
                alt="Students on campus"
                fill
                className="object-cover"
                unoptimized
              />
            </div>
            <div>
              <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4 block">Our Vision</span>
              <h2 className="text-4xl md:text-5xl font-bold font-serif mb-6 text-gray-900">Our Vision</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                To be recognized as a premier liberal arts college that produces graduates who are 
                thoughtful, engaged citizens and leaders in their chosen fields. We envision a future 
                where our alumni make meaningful contributions to their communities, professions, and 
                the world at large.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through our commitment to academic excellence, diversity, and innovation, we strive 
                to set the standard for liberal arts education in the 21st century.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white" id="core-values" data-content-well="college-values">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4 block">Our Values</span>
            <h2 className="text-5xl md:text-6xl font-bold font-serif text-gray-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at Northwinds College.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Intellectual Rigor", description: "We challenge students to think critically, question assumptions, and engage deeply with complex ideas across disciplines." },
              { title: "Integrity", description: "We conduct ourselves with honesty, transparency, and ethical behavior in all aspects of academic and campus life." },
              { title: "Student-Centered", description: "Every decision we make prioritizes student success, providing personalized support and resources to help each student achieve their goals." },
              { title: "Diversity & Inclusion", description: "We celebrate diverse perspectives and backgrounds, creating an inclusive community where all students can thrive and contribute." },
              { title: "Community", description: "We foster a sense of belonging and collaboration among students, faculty, and staff, creating a supportive learning community." },
              { title: "Civic Engagement", description: "We prepare students to be active, engaged citizens who contribute positively to their communities and address global challenges." },
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <h3 className="text-2xl font-bold font-serif mb-4 text-primary-900">{value.title}</h3>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-32 bg-white" id="college-history" data-content-well="college-history">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4 block">Our Story</span>
            <h2 className="text-5xl md:text-6xl font-bold font-serif text-gray-900 mb-6">
              Our History
            </h2>
          </div>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Founded in 1895, Northwinds College began with a vision to provide accessible, high-quality 
              liberal arts education. What started as a small institution has grown into a respected college 
              offering diverse programs across the humanities, sciences, arts, and social sciences.
            </p>
            <p>
              Over the years, we&apos;ve expanded our facilities, enhanced our curriculum, and built 
              partnerships with institutions around the world. Our graduates have gone on to successful 
              careers in law, medicine, education, business, the arts, and public service.
            </p>
            <p>
              Today, Northwinds College continues to evolve, incorporating innovative teaching methods 
              and technologies while maintaining our commitment to the core values of liberal arts 
              education: critical thinking, effective communication, and ethical leadership.
            </p>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white" id="accreditations" data-content-well="accreditations-recognition">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider mb-4 block">Recognition</span>
            <h2 className="text-5xl md:text-6xl font-bold font-serif text-gray-900 mb-6">
              Accreditations & Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Northwinds College has been recognized by leading educational organizations for our commitment to academic excellence.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold font-serif mb-4 text-gray-900">Regional Accreditation</h3>
              <p className="text-gray-700 mb-4 leading-relaxed text-lg">
                Northwinds College is accredited by the Higher Learning Commission (HLC), ensuring that 
                our programs meet rigorous standards for quality education and student outcomes.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                This accreditation ensures that credits earned at Northwinds are transferable and 
                recognized by other institutions and employers.
              </p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold font-serif mb-4 text-gray-900">Program Accreditations</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 font-bold">•</span>
                  <span className="text-lg">Psychology programs accredited by APA</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 font-bold">•</span>
                  <span className="text-lg">Fine Arts programs accredited by NASAD</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 font-bold">•</span>
                  <span className="text-lg">Education programs accredited by CAEP</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary-600 mr-3 font-bold">•</span>
                  <span className="text-lg">All programs meet regional accreditation standards</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-primary-900 to-accent-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1920&q=80"
            alt="College campus"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-primary-900/95 to-accent-900/95"></div>
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold font-serif mb-6">Join Our Community</h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto">
            Discover how Northwinds College can help you achieve your academic and career goals.
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
              Visit Campus
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}


