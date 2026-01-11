"use client";

import { useEffect, useState } from "react";
import { Car } from "lucide-react";

export function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + 10;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Logo animation */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-primary/10 rounded-2xl blur-xl animate-pulse-glow" />
          <div className="relative w-24 h-24 rounded-2xl border-2 border-primary/50 bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center animate-float">
            <Car className="w-12 h-12 text-primary" />
          </div>
        </div>

        {/* Brand name */}
        <div className="text-center">
          <h1 className="text-3xl font-serif font-semibold gradient-text mb-2 tracking-wide">
            АВТОТРЕЙДИНВЕСТ
          </h1>
          <p className="text-sm text-muted-foreground tracking-wider uppercase">
            Premium Auto Import
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-64">
          <div className="h-1 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary via-yellow-400 to-primary transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 text-center">
            <span className="text-xs text-primary font-medium">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
