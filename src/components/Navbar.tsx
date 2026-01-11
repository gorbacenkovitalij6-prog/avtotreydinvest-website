"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Car, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Главная", href: "/" },
    { label: "О компании", href: "/about" },
    { label: "Калькулятор", href: "/calculator" },
    { label: "Преимущества", href: "/advantages" },
    { label: "Процесс", href: "/process" },
    { label: "Работы", href: "/examples" },
    { label: "FAQ", href: "/faq" },
    { label: "Контакты", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-gradient-to-r from-black/90 via-black/95 to-black/90 backdrop-blur-2xl border-b border-primary/40 shadow-[0_8px_32px_rgba(212,175,55,0.15)] py-4"
            : "bg-gradient-to-r from-black/60 via-black/70 to-black/60 backdrop-blur-xl border-b border-primary/20 py-6"
        }`}
      >
        {/* Premium gold accent line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg blur-md group-hover:blur-lg transition-all" />
                <div className="relative w-11 h-11 rounded-lg border-2 border-primary/50 bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center group-hover:border-primary group-hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all">
                  <Car className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-semibold tracking-wide gradient-text">АВТОТРЕЙДИНВЕСТ</span>
                <span className="text-[10px] text-muted-foreground tracking-wider uppercase">Premium Auto Import</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium tracking-wide transition-all relative group ${
                    pathname === item.href
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {item.label}
                  {pathname === item.href ? (
                    <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
                  ) : (
                    <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-0 group-hover:w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-300" />
                  )}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Link href="/contact">
                <Button size="sm" className="tracking-wider font-semibold relative overflow-hidden group">
                  <span className="relative z-10">СВЯЗАТЬСЯ</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-11 h-11 rounded-lg border-2 border-primary/40 bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center hover:border-primary hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-primary" />
              ) : (
                <Menu className="w-5 h-5 text-primary" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`absolute top-20 right-4 left-4 luxury-card border-2 border-primary/30 shadow-[0_20px_60px_rgba(212,175,55,0.2)] p-6 transform transition-all duration-300 ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0"
          }`}
        >
          {/* Decorative top line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="flex flex-col gap-2 mt-4">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-left px-5 py-3.5 rounded-lg font-medium transition-all relative group ${
                  pathname === item.href
                    ? "text-primary bg-primary/10 border-l-2 border-primary"
                    : "text-foreground/80 hover:text-primary hover:bg-primary/5 border-l-2 border-transparent hover:border-primary/50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent my-3" />
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full tracking-wider font-semibold h-12">
                СВЯЗАТЬСЯ
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
