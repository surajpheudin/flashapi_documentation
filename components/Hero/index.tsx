import { Logo } from "../Logo";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export function Hero() {
        return (
                <section id="home" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
                        <div className="max-w-4xl mx-auto text-center">
                                <div className="flex items-center justify-center gap-2 mb-6">
                                        <Logo className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24" />
                                </div>

                                <h1 className="mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">FlashAPI</h1>

                                <p className="mb-6 sm:mb-8 text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg md:text-xl px-4">
                                        A lightweight webserver framework for Rust, designed to be simple and minimal.
                                </p>

                                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-4">
                                        <Badge variant="secondary" className="px-2 sm:px-3 py-1">
                                                <img src="https://img.shields.io/crates/v/flashapi.svg" alt="Crates.io" className="h-4 sm:h-5" />
                                        </Badge>
                                        <Badge variant="secondary" className="px-2 sm:px-3 py-1">
                                                <img src="https://docs.rs/flashapi/badge.svg" alt="Docs.rs" className="h-4 sm:h-5" />
                                        </Badge>
                                        <Badge variant="secondary" className="px-2 sm:px-3 py-1">
                                                <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License: MIT" className="h-4 sm:h-5" />
                                        </Badge>
                                </div>

                                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-4">
                                        <Button size="lg" asChild className="w-full sm:w-auto">
                                                <a href="#installation">Get Started</a>
                                        </Button>
                                        <Button size="lg" variant="outline" asChild className="w-full sm:w-auto">
                                                <a href="https://github.com/surajpheudin/flashapi" target="_blank" rel="noopener noreferrer">
                                                        View on GitHub
                                                </a>
                                        </Button>
                                </div>
                        </div>
                </section>
        );
}

