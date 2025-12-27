import { Zap, Feather, Boxes, Rocket } from 'lucide-react';



const features = [
        {
                icon: Feather,
                title: 'Lightweight',
                description: 'Minimal dependencies and a small footprint for fast compilation and runtime performance.',
                color: 'from-blue-500 to-cyan-500',
        },
        {
                icon: Zap,
                title: 'Simple API',
                description: 'Easy routing with handler functions and an intuitive API for quick prototyping.',
                color: 'from-yellow-500 to-orange-500',
        },
        {
                icon: Boxes,
                title: 'JSON Support',
                description: 'Built-in JSON response support via serde and serde_json for modern web APIs.',
                color: 'from-purple-500 to-pink-500',
        },
        {
                icon: Rocket,
                title: 'Quick Prototyping',
                description: 'Get your web server up and running in minutes with minimal boilerplate code.',
                color: 'from-green-500 to-emerald-500',
        },
];

export function Features() {
        return (
                <section id="features" className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-muted/30 relative overflow-hidden">
                        {/* Decorative background elements */}
                        <div className="absolute inset-0 overflow-hidden pointer-events-none">
                                <div className="absolute -top-40 -right-40 w-60 h-60 sm:w-80 sm:h-80 bg-yellow-500/10 rounded-full blur-3xl" />
                                <div className="absolute -bottom-40 -left-40 w-60 h-60 sm:w-80 sm:h-80 bg-blue-500/10 rounded-full blur-3xl" />
                        </div>

                        <div className="max-w-6xl mx-auto relative">
                                <div className="text-center mb-12 sm:mb-16">
                                        <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 bg-yellow-500/10 rounded-full border border-yellow-500/20">
                                                <span className="text-xs sm:text-sm text-yellow-600 dark:text-yellow-400">Why FlashAPI?</span>
                                        </div>
                                        <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-4xl px-4">Features</h2>
                                        <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg px-4">
                                                Everything you need to build fast and efficient web servers in Rust
                                        </p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                                        {features.map((feature, index) => {
                                                const Icon = feature.icon;
                                                return (
                                                        <div
                                                                key={index}
                                                                className="group relative bg-card rounded-xl p-6 sm:p-8 border hover:border-yellow-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                                                        >
                                                                {/* Gradient background on hover */}
                                                                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl from-yellow-500 to-orange-500" />

                                                                <div className="relative">
                                                                        <div className={`inline-flex p-2.5 sm:p-3 rounded-lg bg-gradient-to-br ${feature.color} mb-3 sm:mb-4`}>
                                                                                <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                                                                        </div>

                                                                        <h3 className="mb-2 sm:mb-3 text-lg sm:text-xl">{feature.title}</h3>
                                                                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                                                                </div>

                                                                {/* Corner accent */}
                                                                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                                        <div className={`absolute top-4 right-4 w-2 h-2 rounded-full bg-gradient-to-br ${feature.color}`} />
                                                                </div>
                                                        </div>
                                                );
                                        })}
                                </div>

                                {/* Additional stats or info */}
                                <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 text-center">
                                        <div className="p-4 sm:p-6">
                                                <div className="text-2xl sm:text-3xl mb-2 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                                                        Minimal
                                                </div>
                                                <p className="text-xs sm:text-sm text-muted-foreground">Few dependencies</p>
                                        </div>
                                        <div className="p-4 sm:p-6">
                                                <div className="text-2xl sm:text-3xl mb-2 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                                                        Fast
                                                </div>
                                                <p className="text-xs sm:text-sm text-muted-foreground">Blazing performance</p>
                                        </div>
                                        <div className="p-4 sm:p-6">
                                                <div className="text-2xl sm:text-3xl mb-2 bg-gradient-to-r from-yellow-500 to-orange-500 bg-clip-text text-transparent">
                                                        Simple
                                                </div>
                                                <p className="text-xs sm:text-sm text-muted-foreground">Easy to learn</p>
                                        </div>
                                </div>
                        </div>
                </section>
        );
}

