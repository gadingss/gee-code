"use client";

import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Send, Terminal, Copy, Check, Loader2 } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const endpoints = [
    { path: "/api/v1/profile", label: "/api/v1/profile" },
    { path: "/api/v1/skills", label: "/api/v1/skills" },
    { path: "/api/v1/contact", label: "/api/v1/contact" },
];

export function ApiPlayground() {
    const { t } = useLanguage();
    const [activeEndpoint, setActiveEndpoint] = useState(endpoints[0]);
    const [response, setResponse] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [copied, setCopied] = useState(false);
    const [statusCode, setStatusCode] = useState<number | null>(null);
    const [responseTime, setResponseTime] = useState<number | null>(null);
    const [baseUrl, setBaseUrl] = useState("");
    const responseRef = useRef<HTMLPreElement>(null);

    useEffect(() => {
        setBaseUrl(window.location.origin);
    }, []);

    const handleSend = async () => {
        setLoading(true);
        setResponse(null);
        setStatusCode(null);
        setResponseTime(null);

        const start = performance.now();

        try {
            const res = await fetch(activeEndpoint.path);
            const end = performance.now();
            setResponseTime(Math.round(end - start));
            setStatusCode(res.status);

            const data = await res.json();
            setResponse(JSON.stringify(data, null, 2));
        } catch (err) {
            const end = performance.now();
            setResponseTime(Math.round(end - start));
            setStatusCode(500);
            setResponse(JSON.stringify({ error: t.apiPlayground.error }, null, 2));
        } finally {
            setLoading(false);
        }
    };

    const handleCopy = () => {
        if (response) {
            navigator.clipboard.writeText(response);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    // Auto-scroll response container
    useEffect(() => {
        if (responseRef.current && response) {
            responseRef.current.scrollTop = 0;
        }
    }, [response]);

    return (
        <section id="api-playground" className="py-24 px-6 md:px-12">
            <div className="container mx-auto max-w-4xl">
                {/* Section Header */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-emerald-500/10 rounded-lg border border-emerald-500/20">
                            <Terminal className="w-6 h-6 text-emerald-400" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                            {t.apiPlayground.title}
                        </h2>
                    </div>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        {t.apiPlayground.subtitle}
                    </p>
                </motion.div>

                {/* Terminal Window */}
                <motion.div
                    className="rounded-2xl overflow-hidden border border-border/50 shadow-2xl shadow-black/20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                >
                    {/* Terminal Title Bar */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a2e] border-b border-white/5">
                        <div className="flex items-center gap-1.5">
                            <div className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-[0_0_6px_#ff5f5744]" />
                            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_6px_#ffbd2e44]" />
                            <div className="w-3 h-3 rounded-full bg-[#28c840] shadow-[0_0_6px_#28c84044]" />
                        </div>
                        <span className="ml-3 text-xs font-mono text-muted-foreground/60 select-none">
                            api-tester.sh
                        </span>
                    </div>

                    {/* Terminal Body */}
                    <div className="bg-[#0d1117] p-5 md:p-6">
                        <div className="flex flex-col lg:flex-row gap-6">
                            {/* Left: Controls */}
                            <div className="flex-1 space-y-5">
                                {/* Endpoint Tabs */}
                                <div>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground/50 mb-2.5 block">
                                        {t.apiPlayground.endpoint}
                                    </span>
                                    <div className="flex flex-wrap gap-2">
                                        {endpoints.map((ep) => (
                                            <button
                                                key={ep.path}
                                                onClick={() => {
                                                    setActiveEndpoint(ep);
                                                    setResponse(null);
                                                    setStatusCode(null);
                                                    setResponseTime(null);
                                                }}
                                                className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium transition-all duration-200 border cursor-pointer ${
                                                    activeEndpoint.path === ep.path
                                                        ? "bg-emerald-500/15 text-emerald-400 border-emerald-500/30 shadow-[0_0_12px_-3px_rgba(16,185,129,0.3)]"
                                                        : "bg-white/[0.03] text-muted-foreground/70 border-white/[0.06] hover:bg-white/[0.06] hover:text-muted-foreground hover:border-white/10"
                                                }`}
                                            >
                                                {ep.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Request URL */}
                                <div>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground/50 mb-2.5 block">
                                        {t.apiPlayground.requestUrl}
                                    </span>
                                    <div className="flex items-center gap-2.5">
                                        <span className="shrink-0 text-[11px] font-bold font-mono bg-emerald-500/15 text-emerald-400 px-3 py-2 rounded-lg border border-emerald-500/25">
                                            GET
                                        </span>
                                        <div className="flex-1 relative">
                                            <input
                                                type="text"
                                                readOnly
                                                value={`${baseUrl}${activeEndpoint.path}`}
                                                className="w-full bg-white/[0.04] text-sm font-mono text-foreground/80 px-4 py-2 rounded-lg border border-white/[0.08] focus:outline-none focus:border-emerald-500/40 focus:ring-1 focus:ring-emerald-500/20 transition-all"
                                            />
                                            {/* Animated underline */}
                                            <motion.div
                                                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full"
                                                initial={{ width: "0%" }}
                                                animate={{ width: "100%" }}
                                                key={activeEndpoint.path}
                                                transition={{ duration: 0.4, ease: "easeOut" }}
                                            />
                                        </div>
                                        <motion.button
                                            onClick={handleSend}
                                            disabled={loading}
                                            className="shrink-0 flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold text-sm px-5 py-2 rounded-lg transition-all duration-200 shadow-[0_0_20px_-5px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_-3px_rgba(16,185,129,0.5)] cursor-pointer"
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.97 }}
                                        >
                                            {loading ? (
                                                <Loader2 className="w-4 h-4 animate-spin" />
                                            ) : (
                                                <Send className="w-4 h-4" />
                                            )}
                                            {t.apiPlayground.send}
                                        </motion.button>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Response Panel */}
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-2.5">
                                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground/50">
                                        {t.apiPlayground.response}
                                    </span>
                                    <div className="flex items-center gap-2">
                                        {/* Status badge */}
                                        {statusCode !== null && (
                                            <motion.span
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className={`text-[10px] font-bold font-mono px-2 py-0.5 rounded-md ${
                                                    statusCode === 200
                                                        ? "bg-emerald-500/15 text-emerald-400"
                                                        : "bg-red-500/15 text-red-400"
                                                }`}
                                            >
                                                {statusCode}
                                            </motion.span>
                                        )}
                                        {/* Response time */}
                                        {responseTime !== null && (
                                            <motion.span
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                className="text-[10px] font-mono text-muted-foreground/50"
                                            >
                                                {responseTime}ms
                                            </motion.span>
                                        )}
                                        {/* Copy button */}
                                        {response && (
                                            <button
                                                onClick={handleCopy}
                                                className="p-1 text-muted-foreground/40 hover:text-muted-foreground transition-colors cursor-pointer"
                                                title="Copy response"
                                            >
                                                {copied ? (
                                                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                                                ) : (
                                                    <Copy className="w-3.5 h-3.5" />
                                                )}
                                            </button>
                                        )}
                                    </div>
                                </div>

                                <div className="relative rounded-xl border border-white/[0.06] bg-[#161b22] overflow-hidden min-h-[220px] max-h-[340px]">
                                    {/* Scanline effect */}
                                    <div className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.01)_2px,rgba(255,255,255,0.01)_4px)] z-10" />

                                    {response ? (
                                        <pre
                                            ref={responseRef}
                                            className="p-4 text-[12px] leading-relaxed font-mono text-emerald-300/80 overflow-auto max-h-[340px] whitespace-pre-wrap break-words"
                                            style={{ scrollbarWidth: 'none' }}
                                        >
                                            <motion.span
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                {response}
                                            </motion.span>
                                        </pre>
                                    ) : (
                                        <div className="flex items-center justify-center h-[220px]">
                                            {loading ? (
                                                <div className="flex flex-col items-center gap-3">
                                                    <Loader2 className="w-6 h-6 animate-spin text-emerald-500/50" />
                                                    <span className="text-xs font-mono text-muted-foreground/30">
                                                        {t.apiPlayground.fetching}
                                                    </span>
                                                </div>
                                            ) : (
                                                <span className="text-sm font-mono text-muted-foreground/25 italic">
                                                    {t.apiPlayground.placeholder}
                                                </span>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
