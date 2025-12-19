interface FAQ {
  question: string;
  answer: string;
  category?: string;
}

interface FAQSectionProps {
  title?: string;
  description?: string;
  faqs: FAQ[];
}

export default function FAQSection({ title = "Frequently Asked Questions", description, faqs }: FAQSectionProps) {
  // Generate JSON-LD structured data for AEO (Answer Engine Optimization)
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      {/* Structured Data for Search Engines & AI Agents */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />

      <section className="py-32 bg-gray-50" id="faq">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6" style={{ fontFamily: 'Georgia, serif' }}>
              {title}
            </h2>
            {description && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {description}
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12 max-w-6xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <h3
                  className="text-xl font-bold text-gray-900 mb-3 leading-snug"
                  itemProp="name"
                >
                  {faq.question}
                </h3>
                <div
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div
                    className="text-gray-600 leading-relaxed text-base"
                    itemProp="text"
                    dangerouslySetInnerHTML={{ __html: faq.answer }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Additional Help CTA */}
          <div className="mt-16 text-center bg-gradient-to-br from-primary-50 to-accent-50/50 p-10 rounded-2xl border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Still Have Questions?</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Our admissions team is here to help you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:admissions@northwinds.edu"
                className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Admissions
              </a>
              <a
                href="tel:+15555551234"
                className="inline-flex items-center bg-white text-primary-600 border-2 border-primary-600 px-6 py-3 rounded-full font-semibold hover:bg-primary-50 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call (555) 555-1234
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
