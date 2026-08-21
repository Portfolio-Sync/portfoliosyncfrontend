import { Link, useLocation } from 'react-router-dom';

export default function NotFound() {
    const { pathname } = useLocation();

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] relative overflow-hidden p-4">
            {/* Grid pattern background */}
            <div className="absolute inset-0 opacity-5 bg-[linear-gradient(#2a2a4a_1px,transparent_1px),linear-gradient(90deg,#2a2a4a_1px,transparent_1px)] bg-[size:50px_50px]" />

            {/* Radial glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#f72585] opacity-[0.05] blur-[100px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#4cc9f0] opacity-[0.05] blur-[100px] rounded-full" />
            </div>

            <div className="relative z-10 bg-[#1a1a2e] border-3 border-[#4cc9f0] p-8 max-w-md w-full text-center shadow-[0_0_20px_rgba(76,201,240,0.3)]">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f72585] via-[#b537f2] to-[#4cc9f0]" />

                {/* Scanline overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-30 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.3)_2px,rgba(0,0,0,0.3)_4px)]" />

                <div className="relative">
                    <h1 className="text-6xl font-bold text-[#4cc9f0] tracking-widest mb-2 [text-shadow:0_0_20px_rgba(76,201,240,0.6)]">
                        404
                    </h1>

                    <h2 className="text-xl font-bold text-[#e8e8e8] tracking-widest uppercase mb-2">
                        Route Not Found
                    </h2>

                    <p className="text-[#666666] font-mono text-xs uppercase tracking-widest mb-6">
            // No such path on this host
                    </p>

                    <div className="border-2 border-[#2a2a4a] bg-[#0a0a0f] p-4 mb-6 overflow-hidden">
                        <p className="text-[#4cc9f0] font-mono text-sm truncate">
                            <span className="text-[#666666]">&gt;</span> {pathname}
                        </p>
                    </div>

                    <div className="space-y-3">
                        <Link
                            to="/"
                            className="block w-full px-6 py-3 bg-[#f72585] border-3 border-[#f72585] text-white font-bold uppercase tracking-wide text-sm hover:shadow-[0_0_15px_rgba(247,37,133,0.5)] transition-all text-center"
                        >
                            Return Home
                        </Link>

                        <Link
                            to="/learn-more"
                            className="block w-full px-6 py-3 bg-transparent border-3 border-[#2a2a4a] text-[#a0a0a0] font-bold uppercase tracking-wide text-sm hover:border-[#4cc9f0] hover:text-[#4cc9f0] transition-all text-center"
                        >
                            How It Works
                        </Link>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-4 text-[10px] text-[#444455] font-mono">
                © 2026 // PORTFOLIOSYNC // ERROR CODE: ROUTE_404
            </div>
        </div>
    );
}
