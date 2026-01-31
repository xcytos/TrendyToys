"use client";

import { FormEvent, useState } from "react";
import { Header } from "../../components/layout/header";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setSuccess("");

    if (!name || !email || !message) {
      setError("Please fill in all fields before sending your message.");
      return;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSuccess(
      "Message sent (demo). In a real site this would create a support ticket or send an email."
    );
  };
  return (
    <>
      <Header />
      <div className="mx-auto max-w-xl px-6 py-10">
        <h1 className="mb-6 text-3xl font-semibold">
          Contact
        </h1>
        <p className="mb-6 text-sm text-text-muted">
          This is a demo-only contact form. Submissions are not sent anywhere,
          but the flow and layout mirror a real implementation.
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-1 text-sm">
            <label htmlFor="name" className="font-medium text-text-main">
              Name
            </label>
            <Input
              id="name"
              placeholder="Alex Doe"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="email" className="font-medium text-text-main">
              Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="space-y-1 text-sm">
            <label htmlFor="message" className="font-medium text-text-main">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full rounded-md border border-border-subtle bg-surface px-3 py-2 text-sm text-text-main outline-none ring-offset-background transition focus:border-border-strong focus:ring-2 focus:ring-focus-ring"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
          {error && (
            <p className="text-xs text-red-500">
              {error}
            </p>
          )}
          {success && (
            <p className="text-xs text-primary-strong">
              {success}
            </p>
          )}
          <Button type="submit" className="w-full">
            Send (demo)
          </Button>
        </form>
      </div>
    </>
  );
}
