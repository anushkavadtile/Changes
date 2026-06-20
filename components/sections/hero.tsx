"use client"

import { AnimatedButton } from "@/components/ui/animated-button"
import { Container } from "@/components/ui/container"
import { GradientText } from "@/components/ui/gradient-text"
import { GradientOrb, Particles } from "@/components/ui/floating-elements"
import { motion } from "framer-motion"
import { Phone, Activity, Video, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-mesh pointer-events-none" />
            <GradientOrb color="red" size="xl" blur="xl" className="top-0 -right-48 animate-pulse" />
            <GradientOrb color="green" size="lg" blur="xl" className="bottom-0 -left-32 animate-pulse" style={{ animationDelay: "1s" }} />
            <Particles count={30} />

            <Container className="relative z-10">
                <div className="grid lg:grid-cols-[0.85fr_1.5fr] gap-12 lg:gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 border-brick-100"
                        >
                            <Activity className="w-4 h-4" style={{ color: "#CB4154" }} />
                            <span className="text-sm font-bold" style={{ color: "#842D36" }}>Built For The Golden Hour</span>
                        </motion.div>

                        <h1 className="text-4xl lg:text-6xl font-bold tracking-tight mb-6 leading-[1.1]">
                            Smart Ambulances That <br />
                            <GradientText variant="premium">Start Treatment</GradientText> <br />
                            Before You Reach the Hospital
                        </h1>

                        <p className="text-xl text-gray-900 font-semibold mb-4 max-w-2xl">
                            One-tap ambulance booking, hospital choice, and doctor-guided care during the golden hour.
                        </p>

                        <p className="text-base text-gray-600 mb-8 max-w-xl leading-relaxed">
                            AmbAnaX turns every ambulance ride into an active treatment window by connecting paramedics, hospital doctors, and diagnostics in real time from the moment you call.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-10">
                            <AnimatedButton size="xl" variant="default" className="bg-[#CB4154] hover:bg-[#CB4154] shadow-brick-500/30">
                                <Phone className="w-5 h-5 mr-2" />
                                Book Ambulance Now
                            </AnimatedButton>
                            <AnimatedButton size="xl" variant="glass" style={{ color: "#004D3F" }}>
                                Partner with AmbAnaX
                            </AnimatedButton>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 text-sm font-medium text-gray-700">
                            {[
                                "24/7 Smart Response Network",
                                "Choice Of Public Or Private Hospitals",
                                "Clinically Aligned, Protocol-Driven Care",
                                "Trained Clinical Teams"
                            ].map((text, i) => (
                                <div key={i} className="flex items-center gap-2">
                                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#E6F7F4" }}>
                                        <CheckCircle2 className="w-3.5 h-3.5" style={{ color: "#005C4B" }} />
                                    </div>
                                    <span>{text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/3] lg:aspect-[1/1] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50">
                            <Image
                                src="/images/hero.png"
                                alt="Smart Connected Ambulance"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-xl flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center animate-pulse" style={{ backgroundColor: "#CB4154" }}>
                                    <Video className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <div className="text-xs text-white/80 uppercase font-bold">Live Connection</div>
                                    <div className="text-white font-bold">Doctor Connected via Telemedicine</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}