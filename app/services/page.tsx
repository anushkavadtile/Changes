"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Container } from "@/components/ui/container"
import { AnimatedButton } from "@/components/ui/animated-button"
import { GradientText } from "@/components/ui/gradient-text"
import { Particles, GradientOrb } from "@/components/ui/floating-elements"

import { Ambulance, HeartPulse, Plane, Stethoscope, CheckCircle2, Wifi, Zap, Activity, ArrowRight } from "lucide-react"

import Image from "next/image"
import { motion } from "framer-motion"

const services = [
    {
        id: "ground",
        title: "Ground Ambulance",
        description: "Our primary response fleet. Not just transport, but a connected first-response unit designed to stabilize trauma and medical emergencies immediately.",
        features: [
            "Live GPS Tracking & ETA sharing",
            "Basic Life Support (BLS) capability",
            "Direct video link to hospital ER",
            "Real-time vital sign transmission"
        ],
        image: "/images/ground.png",
        icon: Ambulance,
        iconColor: "#B33A4A",
        badgeBg: "#FDE8EA",
        badgeText: "#842D36",
        buttonBg: "#B33A4A",
        buttonHover: "#9C3340",
        checkColor: "#CB4154",
        shadowColor: "rgba(203, 65, 84, 0.2)",
        gradient: "linear-gradient(135deg, #CB4154 0%, #B33A4A 100%)"
    },
    {
        id: "icu",
        title: "ICU on Wheels",
        description: "For critical inter-hospital transfers and high-risk patients. These units replicate an Intensive Care Unit environment with specialized equipment and staff.",
        features: [
            "Advanced Life Support (ALS) setup",
            "Onboard Ventilator & Defibrillator",
            "Critical Care Nurse/Doctor on board",
            "Continuous cardiac monitoring"
        ],
        image: "/images/icu.png",
        icon: HeartPulse,
        iconColor: "#005C4B",
        badgeBg: "#E6F7F4",
        badgeText: "#004D3F",
        buttonBg: "#005C4B",
        buttonHover: "#004D3F",
        checkColor: "#006D5B",
        shadowColor: "rgba(0, 109, 91, 0.2)",
        gradient: "linear-gradient(135deg, #006D5B 0%, #005C4B 100%)"
    },
    {
        id: "air",
        title: "Air Ambulance",
        description: "Time-critical long-distance transport. We coordinate bed-to-bed transfers across cities and states with complete medical supervision.",
        features: [
            "Pressurized cabin for patient safety",
            "Flight-certified medical crew",
            "Seamless ground-to-air handover",
            "Organ transport coordination"
        ],
        image: "/images/air.png",
        icon: Plane,
        iconColor: "#D9A735",
        badgeBg: "#FEF9E7",
        badgeText: "#B8902D",
        buttonBg: "#D9A735",
        buttonHover: "#B8902D",
        checkColor: "#EDB83D",
        shadowColor: "rgba(237, 184, 61, 0.2)",
        gradient: "linear-gradient(135deg, #EDB83D 0%, #D9A735 100%)"
    },
    {
        id: "medical",
        title: "Medical Command Center",
        description: "Our centralized support hub where emergency physicians monitor active cases, guide paramedics, and coordinate with receiving hospitals.",
        features: [
            "24/7 Specialist Tele-consultation",
            "Stroke & Trauma pathway activation",
            "Corporate & Event medical standby",
            "Second opinion during transport"
        ],
        image: "/images/hero.png",
        icon: Stethoscope,
        iconColor: "#3B82F6",
        badgeBg: "#EFF6FF",
        badgeText: "#1E40AF",
        buttonBg: "#3B82F6",
        buttonHover: "#2563EB",
        checkColor: "#60A5FA",
        shadowColor: "rgba(59, 130, 246, 0.2)",
        gradient: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)"
    },
]

const techSpecs = [
    { icon: Wifi, title: "5G Connectivity", desc: "Zero-latency video uplink to hospitals." },
    { icon: Activity, title: "Digital Telemetry", desc: "ECG streams directly to the cardiologist's phone." },
    { icon: Zap, title: "Power Backup", desc: "Redundant power for ventilators and life support." },
]

export default function ServicesPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">

                <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-900 text-white">
                    <div className="absolute inset-0 bg-gradient-mesh opacity-20 pointer-events-none" />
                    <Particles count={40} className="opacity-30" />
                    <GradientOrb color="medical" size="xl" blur="3xl" className="top-0 right-0 opacity-20" />
                    <GradientOrb color="emergency" size="lg" blur="3xl" className="bottom-0 left-0 opacity-20" />

                    <Container className="relative z-10">
                        <motion.div
                            className="text-center max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-white/10">
                                <HeartPulse className="w-4 h-4" style={{ color: "#56C5B0" }} />
                                <span className="text-sm font-bold text-gray-200">Comprehensive Care</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
                                Emergency Solutions <br />
                                <GradientText variant="premium">For Every Critical Need</GradientText>
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
                                From rapid ground response to complex ICU transfers, our fleet is connected, staffed, and ready for the golden hour.
                            </p>
                        </motion.div>
                    </Container>
                </section>


                <section className="py-12 bg-white border-b border-gray-100">
                    <Container>
                        <div className="grid md:grid-cols-3 gap-8">
                            {techSpecs.map((spec, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 transition-colors"
                                >
                                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-900">
                                        <spec.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">{spec.title}</div>
                                        <div className="text-sm text-gray-500">{spec.desc}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </Container>
                </section>


                <section className="py-24 bg-gray-50/50">
                    <Container>
                        <div className="space-y-32">
                            {services.map((service, index) => {
                                const Icon = service.icon
                                const isEven = index % 2 === 0

                                return (
                                    <motion.div
                                        key={service.id}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.5 }}
                                        className={`flex flex-col lg:flex-row gap-16 items-center ${!isEven ? 'lg:flex-row-reverse' : ''}`}
                                    >

                                        <div className="w-full lg:w-1/2">
                                            <div className="relative group">
                                                <div className="absolute inset-0 rounded-[2.5rem] opacity-10 transform rotate-3 group-hover:rotate-6 transition-transform duration-300" style={{ background: service.gradient }} />
                                                <div className="aspect-[4/3] relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-white border-4 border-white">
                                                    <Image
                                                        src={service.image}
                                                        alt={service.title}
                                                        fill
                                                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                                                    />

                                                    <div className={`absolute bottom-6 ${isEven ? 'right-6' : 'left-6'} w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center z-20`}>
                                                        <Icon className="w-8 h-8" style={{ color: service.iconColor }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="w-full lg:w-1/2">
                                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-6 uppercase tracking-wide" style={{ backgroundColor: service.badgeBg, color: service.badgeText }}>
                                                {service.title}
                                            </div>

                                            <h2 className="text-4xl font-bold text-gray-900 mb-6">{service.title}</h2>
                                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                                {service.description}
                                            </p>

                                            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
                                                <ul className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                                                    {service.features.map((feature, fIndex) => (
                                                        <li key={fIndex} className="flex items-start gap-3">
                                                            <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: service.checkColor }} />
                                                            <span className="text-gray-700 text-sm font-medium">{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="flex gap-4">
                                                <AnimatedButton
                                                    size="lg"
                                                    className="text-white shadow-lg transition-colors"
                                                    style={{ backgroundColor: service.buttonBg, boxShadow: `0 10px 15px -3px ${service.shadowColor}, 0 4px 6px -4px ${service.shadowColor}` }}
                                                    onMouseEnter={(e: React.MouseEvent<HTMLButtonElement>) => e.currentTarget.style.backgroundColor = service.buttonHover}
                                                    onMouseLeave={(e: React.MouseEvent<HTMLButtonElement>) => e.currentTarget.style.backgroundColor = service.buttonBg}
                                                >
                                                    Book {service.title}
                                                </AnimatedButton>
                                                <AnimatedButton variant="ghost" size="lg" className="group">
                                                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                                </AnimatedButton>
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </Container>
                </section>


                <section className="py-24 bg-white border-t border-gray-100">
                    <Container>
                        <div className="bg-gradient-premium rounded-3xl p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-black/10" />
                            <div className="relative z-10 max-w-2xl mx-auto">
                                <h2 className="text-3xl md:text-5xl font-bold mb-6">Not Sure Which Service You Need?</h2>
                                <p className="text-white/90 text-lg mb-10">
                                    Our emergency medical dispatchers are available 24/7 to assess your situation and deploy the right team immediately.
                                </p>
                                <div className="flex flex-col sm:flex-row justify-center gap-4">
                                    <AnimatedButton size="xl" variant="glow" className="bg-white hover:bg-gray-50" style={{ color: "#B33A4A" }}>
                                        <div className="flex items-center gap-2">
                                            <span>Call Emergency Line</span>
                                        </div>
                                    </AnimatedButton>
                                    <AnimatedButton size="xl" variant="glass" className="border-white/30 text-white hover:bg-white/10">
                                        Talk to Medical Expert
                                    </AnimatedButton>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </div >
    )
}