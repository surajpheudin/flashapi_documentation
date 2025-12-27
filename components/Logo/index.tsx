interface LogoProps {
        className?: string;
}

export function Logo({ className = "h-8 w-8" }: LogoProps) {
        return (
                <svg
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={className}
                >
                        {/* Main circle background */}
                        <circle cx="50" cy="50" r="45" fill="url(#bgGradient)" />

                        {/* Stylized "F" made of geometric shapes */}
                        <path
                                d="M35 30 H60 V38 H43 V45 H57 V53 H43 V70 H35 V30Z"
                                fill="url(#fGradient)"
                        />

                        {/* Lightning accent on the F */}
                        <path
                                d="M60 30 L68 30 L58 48 L63 48 L53 65 L56 48 L51 48 L60 30Z"
                                fill="#FCD34D"
                        />

                        {/* Circular glow rings */}
                        <circle cx="50" cy="50" r="45" stroke="url(#ringGradient)" strokeWidth="2" fill="none" opacity="0.6" />
                        <circle cx="50" cy="50" r="40" stroke="#FBBF24" strokeWidth="1" fill="none" opacity="0.3" />

                        <defs>
                                <linearGradient id="bgGradient" x1="5" y1="5" x2="95" y2="95" gradientUnits="userSpaceOnUse">
                                        <stop offset="0%" stopColor="#1E293B" />
                                        <stop offset="100%" stopColor="#0F172A" />
                                </linearGradient>

                                <linearGradient id="fGradient" x1="35" y1="30" x2="60" y2="70" gradientUnits="userSpaceOnUse">
                                        <stop offset="0%" stopColor="#FCD34D" />
                                        <stop offset="100%" stopColor="#F59E0B" />
                                </linearGradient>

                                <linearGradient id="ringGradient" x1="5" y1="50" x2="95" y2="50" gradientUnits="userSpaceOnUse">
                                        <stop offset="0%" stopColor="#F59E0B" />
                                        <stop offset="50%" stopColor="#FCD34D" />
                                        <stop offset="100%" stopColor="#F59E0B" />
                                </linearGradient>
                        </defs>
                </svg>
        );
}
