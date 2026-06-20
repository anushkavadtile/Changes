"use client"

import * as React from "react"
import { Container } from "@/components/ui/container"
import { GradientText } from "@/components/ui/gradient-text"
import { Ambulance, HeartPulse, Plane, Stethoscope, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const services = [
    {
        title: "Ground Ambulance",
        description: "Fast-response ambulances for medical and trauma emergencies with live tracking, in‑ambulance monitoring, and direct coordination with your chosen hospital.",
        icon: Ambulance,
        href: "/services",
        gradient: "from-brick-500 to-brick-600"
    },
    {
        title: "ICU Ambulance",
        description: "Advanced life-support ambulances for high‑risk patients, combining ICU‑grade equipment with continuous teleconsults and real-time report sharing.",
        icon: HeartPulse,
        href: "/services",
        gradient: "from-teal-500 to-teal-600"
    },
    {
        title: "Air Ambulance",
        description: "For long-distance and inter‑state transfers, our networked air ambulances sync data and handovers so receiving hospitals are prepared before touchdown.",
        icon: Plane,
        href: "/services",
        gradient: "from-gold-500 to-gold-600"
    },
    {
        title: "On‑Demand Medical Support",
        description: "Teleconsults, protocol support, and specialist input for technicians and paramedics in complex trauma, cardiac, and stroke cases.",
        icon: Stethoscope,
        href: "/services",
        gradient: "from-teal-500 to-teal-600"
    },
]

export function ServicesSnapshot() {
    return (
        <section className="relative py-24 bg-white overflow-hidden">
            <Container className="relative z-10">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                        End‑To‑End Emergency{" "}
                        <GradientText variant="premium">Transport On One Platform</GradientText>
                    </h2>
                    <p className="text-xl text-gray-600">
                        From city emergencies to inter-hospital and long-distance transfers, AmbAnaX keeps patient, technician, driver, and hospital team connected on a single workflow.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {services.map((service, index) => {
                        const IconComponent = service.icon
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <Link href={service.href} className="block h-full">
                                    <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-200 h-full">
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-200"
                                            style={{
                                                background: service.gradient.includes('brick')
                                                    ? 'linear-gradient(135deg, #CB4154 0%, #B33A4A 100%)'
                                                    : service.gradient.includes('gold')
                                                        ? 'linear-gradient(135deg, #EDB83D 0%, #D9A735 100%)'
                                                        : 'linear-gradient(135deg, #006D5B 0%, #005C4B 100%)'
                                            }}
                                        >
                                            <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                        <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                                        <div className="inline-flex items-center text-sm font-semibold text-gray-900">
                                            Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}