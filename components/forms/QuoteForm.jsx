"use client";

import { useState } from "react";

const initialForm = {
  name: "",
  phone: "",
  email: "",
  customerType: "Residential",
  serviceNeeded: "Concrete pumping",
  projectLocation: "",
  timeline: "",
  message: "",
  sourcePage: "",
  website: "",
};

export default function QuoteForm({ sourcePage = "contact" }) {
  const [form, setForm] = useState({ ...initialForm, sourcePage });
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  async function submitForm(event) {
    event.preventDefault();
    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (!response.ok) {
        setStatus("error");
        setFeedback(data.message || "Please check the form and try again.");
        return;
      }

      setStatus("success");
      setFeedback("Thanks. A&P received your project details. Call if the request is urgent.");
      setForm({ ...initialForm, sourcePage });
    } catch (error) {
      setStatus("error");
      setFeedback("Something went wrong while sending the request. Please call or try again.");
    }
  }

  return (
    <form onSubmit={submitForm} className="space-y-7">
      <input className="hidden" name="website" value={form.website} onChange={updateField} tabIndex={-1} autoComplete="off" />

      <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
        <Field label="Name" name="name" value={form.name} onChange={updateField} required />
        <Field label="Phone" name="phone" type="tel" value={form.phone} onChange={updateField} placeholder="(403) 000-0000" />
      </div>

      <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
        <Field label="Email" name="email" type="email" value={form.email} onChange={updateField} placeholder="email@example.com" />
        <Select
          label="Customer Type"
          name="customerType"
          value={form.customerType}
          onChange={updateField}
          options={["Residential", "Commercial", "Industrial", "Not sure"]}
        />
      </div>

      <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
        <Select
          label="Service Needed"
          name="serviceNeeded"
          value={form.serviceNeeded}
          onChange={updateField}
          options={[
            "Concrete pumping",
            "Concrete placing",
            "Concrete finishing",
            "Driveway",
            "Patio",
            "Garage pad",
            "Commercial concrete",
            "Industrial concrete",
            "Manpower / crew support",
            "Not sure",
          ]}
        />
        <Field label="Timeline" name="timeline" value={form.timeline} onChange={updateField} placeholder="Ideal timing" />
      </div>

      <Field label="Project Location" name="projectLocation" value={form.projectLocation} onChange={updateField} placeholder="City or jobsite area" />

      <div className="flex flex-col">
        <label htmlFor="message" className="mb-2 text-xs font-bold uppercase tracking-widest text-secondary">
          Project Details
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={updateField}
          required
          maxLength={2000}
          rows={5}
          className="rounded border-0 border-b-2 border-outline-variant bg-surface-container-high px-4 py-3 focus:border-primary focus:outline-none"
          placeholder="Tell us what you need poured, placed, finished, or supported."
        />
      </div>

      {feedback ? (
        <p className={`rounded p-4 text-sm font-bold ${status === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`} role="status">
          {feedback}
        </p>
      ) : null}

      <button
        className="w-full rounded bg-primary px-10 py-5 font-headline text-lg font-black text-on-primary shadow-lg shadow-primary/20 transition-colors hover:bg-primary-container md:w-auto"
        type="submit"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "Sending..." : "Request Quote"}
      </button>
    </form>
  );
}

function Field({ label, name, value, onChange, type = "text", placeholder = "", required = false }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-2 text-xs font-bold uppercase tracking-widest text-secondary">
        {label}
      </label>
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded border-0 border-b-2 border-outline-variant bg-surface-container-high px-4 py-3 focus:border-primary focus:outline-none"
      />
    </div>
  );
}

function Select({ label, name, value, onChange, options }) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-2 text-xs font-bold uppercase tracking-widest text-secondary">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        className="rounded border-0 border-b-2 border-outline-variant bg-surface-container-high px-4 py-3 focus:border-primary focus:outline-none"
      >
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
