import { Github, FileText, Book } from 'lucide-react';

// ------------------------------------------------------------------------------------------------------------------------
// Project imports
// ------------------------------------------------------------------------------------------------------------------------
import { Logo } from '../Logo';


export function Footer() {
        return (
                <footer className="border-t bg-muted/30">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
                                        <div>
                                                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                                                        <Logo className="h-6 w-6 sm:h-8 sm:w-8" />
                                                        <span className="text-lg sm:text-xl">FlashAPI</span>
                                                </div>
                                                <p className="text-xs sm:text-sm text-muted-foreground">
                                                        A lightweight webserver framework for Rust
                                                </p>
                                        </div>

                                        <div>
                                                <h4 className="mb-3 sm:mb-4 text-sm sm:text-base">Documentation</h4>
                                                <ul className="space-y-2 text-xs sm:text-sm">
                                                        <li>
                                                                <a href="#installation" className="text-muted-foreground hover:text-foreground transition-colors">
                                                                        Getting Started
                                                                </a>
                                                        </li>
                                                        <li>
                                                                <a href="#examples" className="text-muted-foreground hover:text-foreground transition-colors">
                                                                        Examples
                                                                </a>
                                                        </li>
                                                        <li>
                                                                <a href="https://docs.rs/flashapi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                                                                        API Reference
                                                                </a>
                                                        </li>
                                                </ul>
                                        </div>

                                        <div>
                                                <h4 className="mb-3 sm:mb-4 text-sm sm:text-base">Resources</h4>
                                                <ul className="space-y-2 text-xs sm:text-sm">
                                                        <li>
                                                                <a href="https://crates.io/crates/flashapi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                                                                        <FileText className="h-3 w-3 sm:h-4 sm:w-4" />
                                                                        Crates.io
                                                                </a>
                                                        </li>
                                                        <li>
                                                                <a href="https://github.com/surajpheudin/flashapi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                                                                        <Github className="h-3 w-3 sm:h-4 sm:w-4" />
                                                                        GitHub
                                                                </a>
                                                        </li>
                                                        <li>
                                                                <a href="https://docs.rs/flashapi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2">
                                                                        <Book className="h-3 w-3 sm:h-4 sm:w-4" />
                                                                        Documentation
                                                                </a>
                                                        </li>
                                                </ul>
                                        </div>

                                        <div>
                                                <h4 className="mb-3 sm:mb-4 text-sm sm:text-base">Community</h4>
                                                <ul className="space-y-2 text-xs sm:text-sm">
                                                        <li className="text-muted-foreground">
                                                                MIT License
                                                        </li>
                                                        <li className="text-muted-foreground">
                                                                Version 0.2.2
                                                        </li>
                                                </ul>
                                        </div>
                                </div>

                                <div className="border-t mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-muted-foreground">
                                        <p>© 2025 FlashAPI. Built with Rust 🦀</p>
                                </div>
                        </div>
                </footer>
        );
}

