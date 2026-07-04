"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded-2xl border-3 border-navy bg-white p-8 text-center shadow-[4px_4px_0px_var(--color-navy)] animate-in zoom-in-95 duration-200">
        <p className="font-display text-xl font-extrabold text-navy">
          Message Sent!
        </p>
        <p className="mt-2 text-ink/75 font-medium">
          We&apos;ll get back to you soon. Cardamom cookies are on the way!
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <h2 className="font-display text-2xl font-extrabold text-navy bubbly-text-shadow-white">
        Send a Message
      </h2>

      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-bold text-navy">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="clay-input min-h-11"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-bold text-navy">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="clay-input min-h-11"
          placeholder="yourname@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-bold text-navy">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          className="clay-input min-h-[120px] resize-none"
          placeholder="What dessert are you craving today?"
        />
      </div>

      <button
        type="submit"
        className="clay-btn-sky w-full min-h-11 py-3 font-display font-extrabold tracking-wider cursor-pointer"
      >
        Send Message
      </button>
    </form>
  );
}

