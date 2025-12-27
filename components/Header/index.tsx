'use client';

import { useState } from 'react';

// ------------------------------------------------------------------------------------------------------------------------
// Project imports
// ------------------------------------------------------------------------------------------------------------------------
import { Menu, X } from 'lucide-react';
import { Logo } from '../Logo';
import { Button } from '../ui/button';


export function Header() {
        const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

        const scrollToSection = (id: string) => {
                setMobileMenuOpen(false);
                const element = document.getElementById(id);
                if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                }
        };

        return (
                <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                                <div className="flex h-16 items-center justify-between">
                                        <div className="flex items-center gap-2">
                                                <Logo className="h-8 w-8" />
                                                <span className="text-xl">FlashAPI</span>
                                        </div>

                                        <nav className="hidden md:flex items-center gap-6">
                                                <button
                                                        onClick={() => scrollToSection('home')}
                                                        className="transition-colors hover:text-foreground/80"
                                                >
                                                        Home
                                                </button>
                                                <button
                                                        onClick={() => scrollToSection('features')}
                                                        className="transition-colors hover:text-foreground/80"
                                                >
                                                        Features
                                                </button>
                                                <button
                                                        onClick={() => scrollToSection('installation')}
                                                        className="transition-colors hover:text-foreground/80"
                                                >
                                                        Installation
                                                </button>
                                                <button
                                                        onClick={() => scrollToSection('examples')}
                                                        className="transition-colors hover:text-foreground/80"
                                                >
                                                        Examples
                                                </button>
                                        </nav>

                                        <div className="hidden md:flex items-center gap-2 lg:gap-4">
                                                <Button variant="outline" size="sm" asChild className="hidden lg:flex">
                                                        <a href="https://docs.rs/flashapi" target="_blank" rel="noopener noreferrer">
                                                                Docs
                                                        </a>
                                                </Button>
                                                <Button size="sm" asChild>
                                                        <a href="https://crates.io/crates/flashapi" target="_blank" rel="noopener noreferrer">
                                                                Get Started
                                                        </a>
                                                </Button>
                                        </div>

                                        {/* Mobile menu button */}
                                        <button
                                                className="md:hidden p-2"
                                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                                aria-label="Toggle menu"
                                        >
                                                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                                        </button>
                                </div>

                                {/* Mobile menu */}
                                {mobileMenuOpen && (
                                        <div className="md:hidden border-t py-4">
                                                <nav className="flex flex-col gap-4">
                                                        <button
                                                                onClick={() => scrollToSection('home')}
                                                                className="text-left py-2 transition-colors hover:text-foreground/80"
                                                        >
                                                                Home
                                                        </button>
                                                        <button
                                                                onClick={() => scrollToSection('features')}
                                                                className="text-left py-2 transition-colors hover:text-foreground/80"
                                                        >
                                                                Features
                                                        </button>
                                                        <button
                                                                onClick={() => scrollToSection('installation')}
                                                                className="text-left py-2 transition-colors hover:text-foreground/80"
                                                        >
                                                                Installation
                                                        </button>
                                                        <button
                                                                onClick={() => scrollToSection('examples')}
                                                                className="text-left py-2 transition-colors hover:text-foreground/80"
                                                        >
                                                                Examples
                                                        </button>
                                                        <div className="flex flex-col gap-2 pt-2 border-t">
                                                                <Button variant="outline" asChild className="w-full">
                                                                        <a href="https://docs.rs/flashapi" target="_blank" rel="noopener noreferrer">
                                                                                Docs
                                                                        </a>
                                                                </Button>
                                                                <Button asChild className="w-full">
                                                                        <a href="https://crates.io/crates/flashapi" target="_blank" rel="noopener noreferrer">
                                                                                Get Started
                                                                        </a>
                                                                </Button>
                                                        </div>
                                                </nav>
                                        </div>
                                )}
                        </div>
                </header>
        );
}
