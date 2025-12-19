"use client";

import { useState } from "react";

interface BookingFormProps {
  visitType: "weekday" | "saturday" | "virtual" | "info-session" | "group";
  onSubmit?: (data: BookingFormData) => void;
}

export interface BookingFormData {
  visitType: string;
  date: string;
  timeSlot: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  attendees: string;
  graduationYear?: string;
  currentSchool?: string;
  interests?: string;
  specialRequests?: string;
}

export default function BookingForm({ visitType, onSubmit }: BookingFormProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    visitType: visitType,
    date: "",
    timeSlot: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    attendees: "1",
    graduationYear: "",
    currentSchool: "",
    interests: "",
    specialRequests: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Time slots based on visit type
  const timeSlots = {
    weekday: ["10:00 AM", "2:00 PM"],
    saturday: ["11:00 AM"],
    virtual: ["10:00 AM", "2:00 PM", "4:00 PM"],
    "info-session": ["2:00 PM"],
    group: ["By arrangement - we will contact you"],
  };

  const availableSlots = timeSlots[visitType] || [];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      if (onSubmit) {
        onSubmit(formData);
      }

      // Reset form after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({
          visitType: visitType,
          date: "",
          timeSlot: "",
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          attendees: "1",
          graduationYear: "",
          currentSchool: "",
          interests: "",
          specialRequests: "",
        });
      }, 3000);
    }, 1500);
  };

  // Get minimum date (tomorrow)
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split("T")[0];

  // Get maximum date (3 months from now)
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 3);
  const maxDateStr = maxDate.toISOString().split("T")[0];

  if (showSuccess) {
    return (
      <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-12 text-center">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-green-900 mb-3">Visit Request Submitted!</h3>
        <p className="text-green-800 text-lg">
          Thank you for your interest in Northwinds College. We&apos;ll send a confirmation email to{" "}
          <span className="font-semibold">{formData.email}</span> within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
      <div className="space-y-6">
        {/* Date Selection */}
        <div>
          <label htmlFor="date" className="block text-sm font-semibold text-gray-900 mb-2">
            Select Date *
          </label>
          <input
            type="date"
            id="date"
            name="date"
            required
            min={minDate}
            max={maxDateStr}
            value={formData.date}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
          />
          <p className="text-sm text-gray-600 mt-1">Select a date within the next 3 months</p>
        </div>

        {/* Time Slot Selection */}
        <div>
          <label htmlFor="timeSlot" className="block text-sm font-semibold text-gray-900 mb-2">
            Select Time *
          </label>
          <select
            id="timeSlot"
            name="timeSlot"
            required
            value={formData.timeSlot}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
          >
            <option value="">Choose a time slot</option>
            {availableSlots.map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>

        {/* Personal Information */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              placeholder="(555) 555-5555"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
            />
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="graduationYear" className="block text-sm font-semibold text-gray-900 mb-2">
              Expected Graduation Year
            </label>
            <select
              id="graduationYear"
              name="graduationYear"
              value={formData.graduationYear}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
            >
              <option value="">Select year</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
            </select>
          </div>
          <div>
            <label htmlFor="attendees" className="block text-sm font-semibold text-gray-900 mb-2">
              Number of Attendees *
            </label>
            <select
              id="attendees"
              name="attendees"
              required
              value={formData.attendees}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
            >
              <option value="1">1 person</option>
              <option value="2">2 people</option>
              <option value="3">3 people</option>
              <option value="4">4 people</option>
              <option value="5+">5+ people</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="currentSchool" className="block text-sm font-semibold text-gray-900 mb-2">
            Current High School/College
          </label>
          <input
            type="text"
            id="currentSchool"
            name="currentSchool"
            value={formData.currentSchool}
            onChange={handleChange}
            placeholder="School name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
          />
        </div>

        <div>
          <label htmlFor="interests" className="block text-sm font-semibold text-gray-900 mb-2">
            Academic Interests
          </label>
          <input
            type="text"
            id="interests"
            name="interests"
            value={formData.interests}
            onChange={handleChange}
            placeholder="e.g., English, Psychology, Chemistry"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900"
          />
        </div>

        <div>
          <label htmlFor="specialRequests" className="block text-sm font-semibold text-gray-900 mb-2">
            Special Requests or Questions
          </label>
          <textarea
            id="specialRequests"
            name="specialRequests"
            rows={4}
            value={formData.specialRequests}
            onChange={handleChange}
            placeholder="Any specific areas you'd like to see or questions you have?"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-gray-900 resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-primary-600 text-white py-4 px-8 rounded-full text-lg font-semibold hover:bg-primary-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
        >
          {isSubmitting ? (
            <>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Submitting Request...
            </>
          ) : (
            "Schedule Visit"
          )}
        </button>

        <p className="text-sm text-gray-600 text-center">
          * Required fields. You&apos;ll receive a confirmation email within 24 hours.
        </p>
      </div>
    </form>
  );
}
