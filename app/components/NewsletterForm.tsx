"use client";

export default function NewsletterForm() {
  return (
    <form className="mt-4 flex gap-2" onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="Your email"
        className="clay-input !rounded-full py-2 px-4 text-sm bg-white placeholder:text-ink/40 min-h-11 flex-1"
      />
      <button
        type="submit"
        className="clay-btn-sky px-5 py-2 font-display text-sm font-extrabold cursor-pointer shrink-0"
      >
        Join
      </button>
    </form>
  );
}

