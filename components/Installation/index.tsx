import { CodeBlock } from "../CodeBlock";

export function Installation() {
        const cargoToml = `[dependencies]
flashapi = "0.2.2"`;

        return (
                <section id="installation" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                        <div className="max-w-4xl mx-auto">
                                <div className="text-center mb-8 sm:mb-12">
                                        <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl px-4">Installation</h2>
                                        <p className="text-muted-foreground text-sm sm:text-base px-4">
                                                Add FlashAPI to your Rust project in seconds
                                        </p>
                                </div>

                                <div className="space-y-4">
                                        <p className="text-sm sm:text-base text-muted-foreground px-2">
                                                Add to your <code className="px-2 py-1 bg-muted rounded text-xs sm:text-sm">Cargo.toml</code>:
                                        </p>
                                        <CodeBlock code={cargoToml} language="toml" />
                                </div>
                        </div>
                </section>
        );
}

