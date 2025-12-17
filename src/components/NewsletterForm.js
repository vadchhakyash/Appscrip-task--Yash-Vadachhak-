"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In production, replace with actual API call
      // await fetch('/api/newsletter', { method: 'POST', body: JSON.stringify({ email }) });

      setMessage("Thank you for subscribing!");
      setEmail("");
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="newsletterForm" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter your e-mail..."
        className="emailInput"
        aria-label="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button
        type="submit"
        className="subscribeButton"
        disabled={isSubmitting}
        aria-label="Subscribe to newsletter"
      >
        {isSubmitting ? "SUBSCRIBING..." : "SUBSCRIBE"}
      </button>
      {message && (
        <p className="statusMessage" role="status">
          {message}
        </p>
      )}
    </form>
  );
}
