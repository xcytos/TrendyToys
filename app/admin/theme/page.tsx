"use client";

import { useState } from "react";
import { useThemeStore } from "../../../lib/store/theme";
import { Card } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { Badge } from "../../../components/ui/badge";

export default function AdminThemePage() {
  const pastelMode = useThemeStore((state) => state.pastelMode);
  const togglePastelMode = useThemeStore((state) => state.togglePastelMode);
  const heroHeadline = useThemeStore((state) => state.heroHeadline);
  const setHeroHeadline = useThemeStore((state) => state.setHeroHeadline);
  const heroSubheadline = useThemeStore((state) => state.heroSubheadline);
  const setHeroSubheadline = useThemeStore(
    (state) => state.setHeroSubheadline
  );
  const [savedMessage, setSavedMessage] = useState("");

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold">
          Theme controls
        </h1>
        <p className="mt-2 text-sm text-text-muted">
          Adjust the demo hero content and pastel mode. All changes are local to
          this browser.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
        <Card className="space-y-6 border border-border-subtle bg-surface px-5 py-5">
          <div className="space-y-2">
            <h2 className="text-sm font-semibold text-text-main">
              Pastel mode
            </h2>
            <p className="text-xs text-text-muted">
              Toggle between softer pastel gradients and a slightly bolder hero
              background.
            </p>
            <div className="mt-3">
              <Button
                type="button"
                size="sm"
                variant={pastelMode ? "primary" : "outline"}
                onClick={togglePastelMode}
              >
                {pastelMode ? "Pastel mode on" : "Pastel mode off"}
              </Button>
            </div>
          </div>

          <div className="space-y-3">
            <div className="space-y-1">
              <label className="text-xs font-medium text-text-main">
                Hero headline
              </label>
              <Input
                value={heroHeadline}
                onChange={(event) => setHeroHeadline(event.target.value)}
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-medium text-text-main">
                Hero subheadline
              </label>
              <Input
                value={heroSubheadline}
                onChange={(event) =>
                  setHeroSubheadline(event.target.value)
                }
              />
            </div>
            <Button
              type="button"
              size="sm"
              className="mt-3"
              onClick={() => {
                setSavedMessage("Theme settings saved (demo). Public hero already updated.");
                window.setTimeout(() => setSavedMessage(""), 1200);
              }}
            >
              Save changes
            </Button>
            {savedMessage && (
              <p className="text-xs text-primary-strong">
                {savedMessage}
              </p>
            )}
          </div>
        </Card>

        <Card className="relative overflow-hidden bg-surface px-6 py-6">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-soft via-accent-purple/10 to-secondary-soft opacity-60 mix-blend-multiply" />
          <div className="relative z-10 space-y-4">
            <Badge>
              Live preview
            </Badge>
            <h2 className="max-w-xl text-2xl font-semibold tracking-tight text-text-main">
              {heroHeadline}
            </h2>
            <p className="max-w-xl text-sm text-text-muted">
              {heroSubheadline}
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
