"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import BookingForm from "@/components/BookingForm";

type VisitTab = "campus-visit" | "events" | "info-sessions" | "virtual" | "group-visit";

export default function ScheduleVisit() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<VisitTab>("campus-visit");
  const [selectedTourType, setSelectedTourType] = useState<"weekday" | "saturday" | null>(null);
  const [showVirtualForm, setShowVirtualForm] = useState(false);
  const [showInfoSessionForm, setShowInfoSessionForm] = useState(false);

  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam && ["campus-visit", "events", "info-sessions", "virtual", "group-visit"].includes(tabParam)) {
      setActiveTab(tabParam as VisitTab);
    }
  }, [searchParams]);

  const tabs = [
    { id: "campus-visit" as VisitTab, label: "Campus Visits" },
    { id: "events" as VisitTab, label: "Prospective Student Events" },
    { id: "info-sessions" as VisitTab, label: "Information Sessions" },
    { id: "virtual" as VisitTab, label: "Virtual Programs" },
    { id: "group-visit" as VisitTab, label: "Group Visits" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-slate-900 via-primary-900 to-accent-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Schedule Your Visit
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Experience Northwinds College firsthand. Choose from our variety of visit options to find what works best for you.
            </p>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <nav className="flex overflow-x-auto hide-scrollbar -mb-px">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  flex-shrink-0 px-6 py-4 text-sm font-semibold border-b-3 transition-all duration-200
                  ${activeTab === tab.id
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                  }
                `}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
      </section>

      {/* Tab Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

          {/* Campus Visit Tab */}
          {activeTab === "campus-visit" && (
            <div className="max-w-5xl">
              <h2 className="text-4xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
                Campus Tours
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Experience Northwinds College in person with a guided campus tour. Tours include visits to academic buildings,
                residence halls, dining facilities, and more. Meet with current students and admissions counselors.
              </p>

              {!selectedTourType ? (
                <>
                  <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                      <h3 className="text-2xl font-bold mb-4 text-primary-900">Weekday Tours</h3>
                      <p className="text-gray-700 mb-4">Monday - Friday, 10:00 AM & 2:00 PM</p>
                      <ul className="space-y-2 text-gray-600 mb-6">
                        <li className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span>90-minute guided tour</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span>Meet with admissions counselor</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span>Optional class visit</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-primary-600 mr-2">•</span>
                          <span>Lunch in dining hall available</span>
                        </li>
                      </ul>
                      <button
                        onClick={() => setSelectedTourType("weekday")}
                        className="w-full bg-primary-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-primary-700 transition-colors"
                      >
                        Schedule Weekday Tour
                      </button>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                      <h3 className="text-2xl font-bold mb-4 text-accent-900">Saturday Tours</h3>
                      <p className="text-gray-700 mb-4">Saturdays, 11:00 AM</p>
                      <ul className="space-y-2 text-gray-600 mb-6">
                        <li className="flex items-start">
                          <span className="text-accent-600 mr-2">•</span>
                          <span>75-minute guided tour</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-600 mr-2">•</span>
                          <span>Information session included</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-600 mr-2">•</span>
                          <span>Campus facilities access</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-accent-600 mr-2">•</span>
                          <span>Family-friendly format</span>
                        </li>
                      </ul>
                      <button
                        onClick={() => setSelectedTourType("saturday")}
                        className="w-full bg-accent-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-accent-700 transition-colors"
                      >
                        Schedule Saturday Tour
                      </button>
                    </div>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-lg">
                    <p className="text-blue-900 font-semibold mb-2">Planning Your Visit</p>
                    <p className="text-blue-800">
                      We recommend scheduling your tour at least 2 weeks in advance. Tours fill up quickly during peak admissions season (October - March).
                    </p>
                  </div>
                </>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {selectedTourType === "weekday" ? "Schedule Weekday Tour" : "Schedule Saturday Tour"}
                    </h3>
                    <button
                      onClick={() => setSelectedTourType(null)}
                      className="text-primary-600 hover:text-primary-700 font-semibold flex items-center"
                    >
                      <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Back to Tour Options
                    </button>
                  </div>
                  <BookingForm visitType={selectedTourType} />
                </div>
              )}
            </div>
          )}

          {/* Events Tab */}
          {activeTab === "events" && (
            <div className="max-w-4xl">
              <h2 className="text-4xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
                Prospective Student Events
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Join us for special events designed specifically for prospective students and their families.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Fall Open House",
                    date: "October 15, 2025",
                    time: "9:00 AM - 2:00 PM",
                    description: "Experience a full day at Northwinds with campus tours, academic sessions, student panels, and lunch.",
                  },
                  {
                    title: "Admitted Student Day",
                    date: "April 5, 2025",
                    time: "10:00 AM - 3:00 PM",
                    description: "For accepted students only. Explore your future home with specialized sessions, housing tours, and meet your potential classmates.",
                  },
                  {
                    title: "Preview Weekend",
                    date: "November 8-9, 2025",
                    time: "Overnight event",
                    description: "Stay overnight in residence halls, attend classes, meet faculty, and experience student life firsthand.",
                  },
                ].map((event, idx) => (
                  <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{event.title}</h3>
                      <span className="text-primary-600 font-semibold">{event.date}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{event.time}</p>
                    <p className="text-gray-700 mb-6">{event.description}</p>
                    <button className="bg-primary-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-primary-700 transition-colors">
                      Register for Event
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Info Sessions Tab */}
          {activeTab === "info-sessions" && (
            <div className="max-w-5xl">
              <h2 className="text-4xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
                Information Sessions
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Learn about academics, admissions, financial aid, and student life in an interactive presentation format.
              </p>

              {!showInfoSessionForm ? (
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-8">
                  <h3 className="text-2xl font-bold mb-6 text-gray-900">Monthly Information Sessions</h3>
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="font-bold text-lg mb-4 text-gray-900">Upcoming Sessions</h4>
                      <ul className="space-y-3">
                        {[
                          "January 15, 2025 - 2:00 PM EST",
                          "February 12, 2025 - 2:00 PM EST",
                          "March 19, 2025 - 2:00 PM EST",
                          "April 16, 2025 - 2:00 PM EST",
                        ].map((session, idx) => (
                          <li key={idx} className="flex items-center text-gray-700">
                            <svg className="w-5 h-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                            </svg>
                            {session}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-4 text-gray-900">What You&apos;ll Learn</h4>
                      <ul className="space-y-3">
                        {[
                          "Academic programs & majors",
                          "Admissions requirements & timeline",
                          "Financial aid & scholarships",
                          "Student life & campus resources",
                          "Housing & dining options",
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <span className="text-primary-600 mr-2">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowInfoSessionForm(true)}
                    className="bg-primary-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-primary-700 transition-colors"
                  >
                    Register for Info Session
                  </button>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">Register for Information Session</h3>
                    <button
                      onClick={() => setShowInfoSessionForm(false)}
                      className="text-primary-600 hover:text-primary-700 font-semibold flex items-center"
                    >
                      <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Back to Session Details
                    </button>
                  </div>
                  <BookingForm visitType="info-session" />
                </div>
              )}
            </div>
          )}

          {/* Virtual Tab */}
          {activeTab === "virtual" && (
            <div className="max-w-5xl">
              <h2 className="text-4xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
                Virtual Programs
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Can&apos;t make it to campus? Explore Northwinds from anywhere in the world with our virtual options.
              </p>

              {!showVirtualForm ? (
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Self-Guided Virtual Tour</h3>
                    <p className="text-gray-700 mb-6">
                      Explore campus at your own pace with our interactive 360° virtual tour. Available 24/7 with no registration required.
                    </p>
                    <button className="w-full bg-primary-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-primary-700 transition-colors">
                      Start Virtual Tour
                    </button>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">Live Virtual Chat</h3>
                    <p className="text-gray-700 mb-6">
                      Connect one-on-one with an admissions counselor via Zoom. Discuss programs, ask questions, and get personalized guidance.
                    </p>
                    <button
                      onClick={() => setShowVirtualForm(true)}
                      className="w-full bg-accent-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-accent-700 transition-colors"
                    >
                      Schedule Virtual Meeting
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">Schedule Virtual Meeting</h3>
                    <button
                      onClick={() => setShowVirtualForm(false)}
                      className="text-primary-600 hover:text-primary-700 font-semibold flex items-center"
                    >
                      <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                      Back to Virtual Options
                    </button>
                  </div>
                  <BookingForm visitType="virtual" />
                </div>
              )}
            </div>
          )}

          {/* Group Visit Tab */}
          {activeTab === "group-visit" && (
            <div className="max-w-4xl">
              <h2 className="text-4xl font-bold mb-6 text-gray-900" style={{ fontFamily: 'Georgia, serif' }}>
                Group Visits
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Planning a visit with your school, organization, or community group? We&apos;d love to welcome your group to Northwinds College.
              </p>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">Group Visit Options</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg text-primary-900 mb-2">High School Groups</h4>
                    <p className="text-gray-700 mb-4">
                      Customized tours and information sessions for high school groups of 10 or more students.
                      Includes academic presentations, campus tour, and Q&A with current students.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary-900 mb-2">Community Organizations</h4>
                    <p className="text-gray-700 mb-4">
                      Educational visits for community groups, educational access programs, and non-profit organizations.
                      Tours can be tailored to your group&apos;s specific interests.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-primary-900 mb-2">International Groups</h4>
                    <p className="text-gray-700 mb-4">
                      Special programming for international student groups including information about our
                      international student support services and cultural resources.
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                  <p className="text-gray-900 font-semibold mb-2">Group Visit Requirements</p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Minimum group size: 10 people</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Request must be submitted at least 3 weeks in advance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Chaperones required for minor students (1 per 10 students)</span>
                    </li>
                  </ul>
                </div>

                <button className="mt-8 bg-primary-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-primary-700 transition-colors">
                  Request Group Visit
                </button>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-br from-slate-900 via-primary-900 to-accent-900 text-white">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions About Your Visit?</h2>
          <p className="text-lg text-white/90 mb-8">
            Our admissions team is here to help. Contact us at{" "}
            <a href="mailto:visit@northwinds.edu" className="text-primary-300 hover:text-primary-200 font-semibold">
              visit@northwinds.edu
            </a>{" "}
            or call{" "}
            <a href="tel:+15555551234" className="text-primary-300 hover:text-primary-200 font-semibold">
              (555) 555-1234
            </a>
          </p>
          <Link
            href="/admissions"
            className="inline-flex items-center bg-white text-slate-900 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all hover:-translate-y-1"
          >
            Learn More About Admissions
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
