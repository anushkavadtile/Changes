"use client"

import * as React from "react"
import { Container } from "@/components/ui/container"
import { Card } from "@/components/ui/card"
import { GradientText } from "@/components/ui/gradient-text"
import { motion } from "framer-motion"
import { Timer, Activity, ShieldCheck } from "lucide-react"
import Image from "next/image"

const features = [
    {
        icon: Activity,
        title: "Smart Treatment On Wheels",
        description: "Equipped with connected devices for vitals, ECG, and point-of-care tests plus secure video so doctors can see the patient and guide care during the ride.",
        gradient: "from-brick-500 to-brick-600"
    },
    {
        icon: ShieldCheck,
        title: "Hospital Pre‑Alerted Before Arrival",
        description: "Live data, reports, and video reach the emergency team in advance so stroke, trauma, or cardiac pathways are activated before the ambulance reaches the gate.",
        gradient: "from-teal-500 to-teal-600"
    }
]

export function Vision() {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <Container>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <motion.div
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass mb-6"
                            whileHover={{ scale: 1.05 }}
                        >
                            <Timer className="w-4 h-4" style={{ color: "#B33A4A" }} />
                            <span className="font-semibold text-sm" style={{ color: "#B33A4A" }}>Protecting the Golden Hour</span>
                        </motion.div>

                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            From Just Transport To <br />
                            <GradientText variant="emergency">
                                A Mobile Mini–ER
                            </GradientText>
                        </h2>

                        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                            Most ambulances only rush patients to a hospital while the golden hour silently slips away. <strong>AmbAnaX upgrades that journey into a connected mobile mini–emergency room</strong> where diagnostics, triage, and doctor decisions begin inside the ambulance itself.
                        </p>

                        <div className="space-y-4">
                            {features.map((feature, index) => {
                                const IconComponent = feature.icon
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                    >
                                        <Card variant="glass" padding="lg" className="group hover-lift">
                                            <div className="flex items-start gap-4">
                                                <div
                                                    className="p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-200 relative z-10"
                                                    style={feature.gradient.includes('brick')
                                                        ? { background: 'linear-gradient(135deg, #CB4154 0%, #B33A4A 100%)' }
                                                        : { background: 'linear-gradient(135deg, #006D5B 0%, #005C4B 100%)' }
                                                    }
                                                >
                                                    <IconComponent className="w-6 h-6 text-white" strokeWidth={2} />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                                                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                                                </div>
                                            </div>
                                        </Card>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        className="relative"
                    >
                        <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl relative group">
                            <Image
                                src="/images/icu.png"
                                alt="Inside AmbAnaX Smart Ambulance"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.2 }}
                                    className="glass-dark p-6 rounded-2xl"
                                >
                                    <div className="text-2xl font-bold text-white mb-2">Connected Care</div>
                                    <p className="text-white/90">Real-time vitals stream to the hospital dashboard, helping cut door-to-needle times.</p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}