"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"

const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "How It Works", href: "/how-it-works" },
    { name: "Partner", href: "/contact" },
]

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isScrolled, setIsScrolled] = React.useState(false)
    const pathname = usePathname()

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-200 overflow-visible",
                    isScrolled
                        ? "py-2 shadow-lg"
                        : "py-3 bg-white lg:bg-white/95 backdrop-blur-sm"
                )}
                style={isScrolled ? {
                    background: 'rgba(255, 255, 255, 1)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
                } : {}}
            >
                <Container className="flex items-center justify-between">

                    <Link href="/" className="flex items-center gap-3 z-50 group">
                        <motion.div
                            className="relative flex items-center justify-center w-24 h-16 transition-transform"
                            whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                            transition={{ duration: 0.2 }}
                        >
                            <Image
                                src="/images/logo/final logo.png"
                                alt="AmbAnaX Logo"
                                width={97}
                                height={97}
                                className="object-contain absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-none"
                            />
                        </motion.div>
                        <span className="text-3xl font-bold tracking-tight ml-2">
                            <span className="text-[#CB4154]">Amb</span>
                            <span className="text-[#006D5B]">Ana</span>
                            <span className="text-[#EDB83D]">X</span>
                        </span>
                    </Link>


                    <nav className="hidden lg:flex items-center gap-1">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200",
                                        isActive
                                            ? "text-emergency-600"
                                            : "text-gray-700 hover:text-emergency-600"
                                    )}
                                >
                                    {item.name}
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-emergency"
                                            transition={{ type: "spring", stiffness: 500, damping: 35 }}
                                        />
                                    )}
                                </Link>
                            )
                        })}
                    </nav>


                    <div className="hidden lg:flex items-center gap-4">
                        <a
                            href="tel:7099636948"
                            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 hover:text-emergency-600 transition-colors rounded-lg hover:bg-gray-50"
                        >
                            <Phone className="w-4 h-4" />
                            <span>70996 36948</span>
                        </a>
                        <AnimatedButton size="default" variant="glow">
                            <Phone className="w-4 h-4 text-brick-600" />
                            Book Now
                        </AnimatedButton>
                    </div>


                    <button
                        className="lg:hidden z-50 p-2 text-gray-700 hover:text-emergency-600 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>

                </Container>

            </header>


            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] lg:hidden"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 35, stiffness: 400 }}
                            className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm glass-dark z-[70] shadow-2xl flex flex-col p-8 pt-24"
                        >
                            <nav className="flex flex-col gap-2">
                                {navigation.map((item) => {
                                    const isActive = pathname === item.href
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={cn(
                                                "px-4 py-3 text-lg font-semibold rounded-xl transition-all",
                                                isActive
                                                    ? "bg-gradient-emergency text-white shadow-lg"
                                                    : "text-white hover:bg-white/10"
                                            )}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    )
                                })}
                            </nav>

                            <div className="mt-8 pt-8 border-t border-white/10 space-y-4">
                                <a
                                    href="tel:7099636948"
                                    className="flex items-center gap-4 px-4 py-3 text-lg font-semibold text-white hover:bg-white/10 rounded-xl transition-colors"
                                >
                                    <div className="p-3 bg-gradient-emergency rounded-xl shadow-lg">
                                        <Phone className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-gray-400">Emergency Hotline</div>
                                        <div>70996 36948</div>
                                    </div>
                                </a>
                                <AnimatedButton className="w-full" size="lg" variant="glow">
                                    <Phone className="w-5 h-5 text-brick-600" />
                                    Book Ambulance Now
                                </AnimatedButton>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    )
}
