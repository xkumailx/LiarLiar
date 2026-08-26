"use client";

import { useState, ChangeEvent, FormEvent } from "react";

export default function ConfessionForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    confession: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/confessions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setMessage(data.message);

        setFormData({
          name: "",
          email: "",
          confession: "",
        });
      } else {
        setMessage(data.message || "Failed to submit confession.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full py-10 sm:py-16 md:py-20">
      <div className="mx-auto w-full max-w-3xl">
        {/* Heading */}
        <div className="mb-8 text-center sm:mb-12">
          <p className="mb-3 font-space text-xs font-extrabold uppercase tracking-[0.25em] text-[#FF3B11] sm:text-sm">
            Your Turn
          </p>

          <h2 className="font-migra text-4xl font-extrabold tracking-[0.03em] text-[#FF3B11] sm:text-5xl md:text-6xl">
            Share Your Confession
          </h2>

          <p className="mx-auto mt-4 max-w-xl font-space text-sm leading-relaxed text-[#F0E9DF]/80 sm:text-base">
            Tell us something true. Or close enough to it. Your confession will
            be reviewed before joining the legend.
          </p>
        </div>

        {/* Form Card */}
        <form
          onSubmit={handleSubmit}
          className="rounded-[1.5rem] border border-[#FF3B11] bg-[#220715] p-5 sm:p-8 md:p-12"
        >
          {/* Name + Email */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-space text-xs font-bold uppercase tracking-[0.15em] text-[#F0E9DF]"
              >
                Your Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-[#FF3B11]/40 bg-transparent px-4 py-3.5 font-space text-sm text-[#F0E9DF] outline-none transition duration-300 placeholder:text-[#F0E9DF]/40 focus:border-[#FF3B11] focus:ring-1 focus:ring-[#FF3B11]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block font-space text-xs font-bold uppercase tracking-[0.15em] text-[#F0E9DF]"
              >
                Your Email
              </label>

              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-lg border border-[#FF3B11]/40 bg-transparent px-4 py-3.5 font-space text-sm text-[#F0E9DF] outline-none transition duration-300 placeholder:text-[#F0E9DF]/40 focus:border-[#FF3B11] focus:ring-1 focus:ring-[#FF3B11]"
              />
            </div>
          </div>

          {/* Confession */}
          <div className="mt-5 sm:mt-7">
            <label
              htmlFor="confession"
              className="mb-2 block font-space text-xs font-bold uppercase tracking-[0.15em] text-[#F0E9DF]"
            >
              Your Confession
            </label>

            <textarea
              id="confession"
              name="confession"
              placeholder="Write your confession here..."
              value={formData.confession}
              onChange={handleChange}
              required
              rows={7}
              className="w-full resize-none rounded-lg border border-[#FF3B11]/40 bg-transparent px-4 py-4 font-space text-sm leading-relaxed text-[#F0E9DF] outline-none transition duration-300 placeholder:text-[#F0E9DF]/40 focus:border-[#FF3B11] focus:ring-1 focus:ring-[#FF3B11] sm:text-base"
            />
          </div>

          {/* Submit */}
          <div className="mt-6 flex flex-col items-center sm:mt-8">
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-[#FF3B11] px-8 py-4 font-space text-xs font-extrabold uppercase tracking-[0.18em] text-[#220715] transition duration-300 hover:scale-[1.02] hover:bg-[#F0E9DF] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:min-w-[240px]"
            >
              {loading ? "Submitting..." : "Submit Confession"}
            </button>

            {message && (
              <p className="mt-5 text-center font-space text-sm text-[#F0E9DF]">
                {message}
              </p>
            )}
            <p className="mt-4 text-center font-space text-xs leading-relaxed text-[#F0E9DF]/50">
              Every confession is reviewed before being published.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
