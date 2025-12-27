import Image from "next/image";

// ------------------------------------------------------------------------------------------------------------------------
// Project imports
// ------------------------------------------------------------------------------------------------------------------------
import { Examples } from "app/components/Examples";
import { Features } from "app/components/Features";
import { Footer } from "app/components/Footer";
import { Header } from "app/components/Header";
import { Hero } from "app/components/Hero";
import { Installation } from "app/components/Installation";

export default function Home() {
        return (
                <div className="min-h-screen bg-background">
                        <Header />

                        <main>
                                <Hero />
                                <Features />
                                <Installation />
                                <Examples />
                        </main>

                        <Footer />
                </div>);
}
