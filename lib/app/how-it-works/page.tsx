"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Container } from "@/components/ui/container"
import { GradientText } from "@/components/ui/gradient-text"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Particles, GradientOrb } from "@/components/ui/floating-elements"
import { Card } from "@/components/ui/card"
import {
    Phone, Smartphone, MessageCircle,
    Activity, Hospital,
    ShieldCheck, Clock
} from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"


const timelinePhases = [
    {
        id: "01",
        phase: "Activation",
        title: "Intelligent Response",
        desc: "The moment you reach out, our system identifies your location and shows nearby hospitals (Govt & Private). Dispatch is instant.",
        icon: Phone,
        phaseColor: "#B33A4A",
        gradient: "linear-gradient(135deg, #CB4154 0%, #B33A4A 100%)"
    },
    {
        id: "02",
        phase: "In-Transit",
        title: "The Mobile E.R.",
        desc: "Paramedics start vitals monitoring immediately. A live video link opens with the hospital, allowing doctors to guide stabilization.",
        icon: Activity,
        phaseColor: "#005C4B",
        gradient: "linear-gradient(135deg, #006D5B 0%, #005C4B 100%)"
    },
    {
        id: "03",
        phase: "Arrival",
        title: "Seamless Handoff",
        desc: "The hospital team is pre-alerted. They know the patient&apos;s vitals and condition before the ambulance doors even open.",
        icon: Hospital,
        phaseColor: "#D9A735",
        gradient: "linear-gradient(135deg, #EDB83D 0%, #D9A735 100%)"
    }
]


const bookingMethods = [
    {
        icon: Smartphone,
        title: "Mobile App",
        badge: "Best for Tracking",
        desc: "Full control. Choose hospital type, see live map tracking, and get family updates.",
        bgColor: "#F8FAFC",
        borderColor: "#E2E8F0"
    },
    {
        icon: MessageCircle,
        title: "WhatsApp",
        badge: "Fastest",
        desc: "Just send 'Hi'. Our bot captures location and books the ride in seconds.",
        bgColor: "#F0FDF4",
        borderColor: "#BBF7D0"
    },
    {
        icon: Phone,
        title: "Emergency Call",
        badge: "For Offline Use",
        desc: "Call our hotline. Our dispatcher manages everything and sends SMS updates.",
        bgColor: "#FDE8EA",
        borderColor: "#F9C3C9"
    }
]

export default function HowItWorksPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">

                <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-900 text-white">
                    <div className="absolute inset-0 bg-gradient-mesh opacity-20 pointer-events-none" />
                    <Particles count={30} className="opacity-30" />
                    <GradientOrb color="amber" size="xl" blur="3xl" className="top-0 left-0 opacity-10" />

                    <Container className="relative z-10">
                        <motion.div
                            className="text-center max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-white/10">
                                <Clock className="w-4 h-4" style={{ color: "#FBBF24" }} />
                                <span className="text-sm font-bold text-gray-200">The Patient Journey</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
                                From Panic To <br />
                                <GradientText variant="premium">Protection</GradientText>
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                                See how AmbAnaX orchestrates patients, ambulances, and hospitals into a single lifesaving workflow.
                            </p>
                        </motion.div>
                    </Container>
                </section>


                <section className="py-24 bg-white relative">
                    <Container>
                        <div className="relative">

                            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gray-100 -translate-y-1/2 z-0" />

                            <div className="grid lg:grid-cols-3 gap-12 relative z-10">
                                {timelinePhases.map((phase, index) => {
                                    const Icon = phase.icon
                                    return (
                                        <motion.div
                                            key={phase.id}
                                            initial={{ opacity: 0, y: 30 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: index * 0.2 }}
                                            className="group"
                                        >
                                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden h-full">

                                                <div className="absolute top-0 right-0 p-6 text-6xl font-bold text-gray-50 opacity-50 group-hover:text-gray-100 transition-colors">
                                                    {phase.id}
                                                </div>

                                                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg text-white relative z-10 group-hover:scale-110 transition-transform" style={{ background: phase.gradient }}>
                                                    <Icon className="w-8 h-8" />
                                                </div>

                                                <div className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: phase.phaseColor }}>
                                                    {phase.phase}
                                                </div>

                                                <h3 className="text-2xl font-bold text-gray-900 mb-4">{phase.title}</h3>
                                                <p className="text-gray-600 leading-relaxed">{phase.desc}</p>
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </div>
                    </Container>
                </section>


                <section className="py-24 bg-slate-50">
                    <Container>
                        <motion.div
                            className="text-center mb-16"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                                <GradientText variant="premium">Accessibility</GradientText> First
                            </h2>
                            <p className="text-xl text-gray-600">
                                Emergency technology is useless if you can&apos;t access it. We provide three simple entry points.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-6">
                            {bookingMethods.map((method, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Card className="h-full p-8 border hover:shadow-lg transition-shadow" style={{ backgroundColor: method.bgColor, borderColor: method.borderColor }}>
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="p-3 bg-white rounded-xl shadow-sm">
                                                <method.icon className="w-6 h-6 text-gray-700" />
                                            </div>
                                            <span className="px-3 py-1 rounded-full bg-white text-xs font-bold text-gray-600 shadow-sm">
                                                {method.badge}
                                            </span>
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">{method.desc}</p>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </Container>
                </section>


                <section className="py-24 bg-white overflow-hidden">
                    <Container>
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-flex items-center gap-2 font-bold mb-4" style={{ color: "#005C4B" }}>
                                    <ShieldCheck className="w-5 h-5" />
                                    <span>Safety Protocols</span>
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                                    Protection For <br />
                                    <span className="text-gray-400">Every Scenario</span>
                                </h2>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                                            <span className="font-bold text-gray-900">01</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-gray-900">Unknown Patients</h4>
                                            <p className="text-gray-600">Found someone unconscious? Our system automatically routes unknown patients to the nearest Government Hospital to ensure immediate acceptance without paperwork delays.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                                            <span className="font-bold text-gray-900">02</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-gray-900">Verified Drivers</h4>
                                            <p className="text-gray-600">Every ambulance pilot is background-checked, trained in basic life support, and monitored via GPS speed-tracking.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                                            <span className="font-bold text-gray-900">03</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg text-gray-900">Data Privacy</h4>
                                            <p className="text-gray-600">Patient medical data is encrypted and shared only with the assigned doctor and hospital. No third-party access.</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative">
                                    <Image
                                        src="/images/how-it-works/safety.png"
                                        alt="Safety Protocols"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                    <div className="absolute bottom-8 left-8 right-8">
                                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                                            <div className="flex items-center justify-between mb-4">
                                                <span className="text-white font-bold">Live Monitoring</span>
                                                <div className="flex items-center gap-2">
                                                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                                                    <span className="text-green-400 text-xs font-bold uppercase">Active</span>
                                                </div>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                                                    <div className="h-full bg-green-500 w-[98%]" />
                                                </div>
                                                <div className="flex justify-between text-xs text-white/60">
                                                    <span>System Uptime</span>
                                                    <span>99.9%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </Container>
                </section>


                <section className="py-20 text-white text-center" style={{ background: "linear-gradient(to right, #B33A4A, #CB4154)" }}>
                    <Container>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">Don&apos;t Wait For An Emergency</h2>
                        <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                            Download the AmbAnaX app today. Save your family&apos;s medical profile and be ready for the unexpected.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <AnimatedButton size="xl" className="bg-white text-[#B33A4A] hover:bg-gray-100 shadow-xl">
                                <Smartphone className="w-5 h-5 mr-2" />
                                Download App
                            </AnimatedButton>
                            <AnimatedButton size="xl" variant="outline" className="border-white text-white hover:bg-white/10">
                                Save Emergency Number
                            </AnimatedButton>
                        </div>
                    </Container>
                </section>

            </main>
            <Footer />
        </div>
    )
}