"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleLogin = () => {
    setIsSubmitting(true);
    setMessage("");
    setIsError(false);

    window.setTimeout(() => {
      if (email === "demo@trendytoys.com" && password === "demo123") {
        setMessage("Logged in (demo). Redirecting to dashboard…");
        setIsError(false);
        window.setTimeout(() => {
          router.push("/admin/dashboard");
        }, 500);
      } else {
        setMessage("Use demo@trendytoys.com / demo123 for the demo login.");
        setIsError(true);
      }
      setIsSubmitting(false);
    }, 400);
  };

  return (
    <div className="mx-auto max-w-md px-6 py-10">
      <h1 className="mb-6 text-3xl font-semibold">
        Admin Login
      </h1>
      <p className="mb-4 text-sm text-text-muted">
        This is a demo-only login. No real authentication is performed.
      </p>
      <div className="space-y-4">
        <div className="space-y-1 text-sm">
          <label htmlFor="email" className="font-medium text-text-main">
            Email
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="demo@trendytoys.com"
          />
        </div>
        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="font-medium text-text-main">
            Password
          </label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="demo123"
          />
        </div>
        <Button
          type="button"
          className="w-full"
          onClick={handleLogin}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Checking…" : "Login (demo)"}
        </Button>
        {message && (
          <p
            className={`text-xs ${
              isError ? "text-red-500" : "text-text-muted"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
}
