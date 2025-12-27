'use client';

import React from 'react';

// ------------------------------------------------------------------------------------------------------------------------
// Third party imports
// ------------------------------------------------------------------------------------------------------------------------
import { Check, Copy } from 'lucide-react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

// ------------------------------------------------------------------------------------------------------------------------
// Project imports
// ------------------------------------------------------------------------------------------------------------------------
import { Button } from '../ui/button';

interface CodeBlockProps {
        code: string;
        language: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
        const [copied, setCopied] = React.useState(false);

        const handleCopy = async () => {
                await navigator.clipboard.writeText(code);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
        };

        return (
                <div className="relative group">
                        <Button
                                variant="ghost"
                                size="sm"
                                className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={handleCopy}
                        >
                                {copied ? (
                                        <>
                                                <Check className="h-4 w-4 mr-2" />
                                                Copied
                                        </>
                                ) : (
                                        <>
                                                <Copy className="h-4 w-4 mr-2" />
                                                Copy
                                        </>
                                )}
                        </Button>

                        <SyntaxHighlighter
                                language={language}
                                style={oneDark}
                                customStyle={{
                                        borderRadius: '0.5rem',
                                        padding: '1.5rem',
                                        fontSize: '0.875rem',
                                        margin: 0,
                                }}
                                showLineNumbers
                        >
                                {code}
                        </SyntaxHighlighter>
                </div>
        );
}
