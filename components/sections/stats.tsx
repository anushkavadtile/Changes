"use client"

import * as React from "react"
import { Container } from "@/components/ui/container"
import { Card } from "@/components/ui/card"
import { Counter } from "@/components/ui/counter"
import { Particles } from "@/components/ui/floating-elements"
import { motion } from "framer-motion"
import { Users, Ambulance, Clock, Award } from "lucide-react"
import { useInView } from "framer-motion"
import { useRef } from "react"

const stats = [
    {
        icon: Users,
        value: 47,
        suffix: "%",
        label: "Mortality Reduction",
        description: "Potential reduction with prehospital digital ECG",
        color: "from-brick-500 to-brick-600",
        glow: "glow-red"
    },
    {
        icon: Clock,
        value: 60,
        suffix: " Min",
        label: "Golden Hour Saved",
        description: "By starting diagnostics in transit",
        color: "from-gold-500 to-gold-600",
        glow: "glow-amber"
    },
    {
        icon: Award,
        value: 82,
        suffix: " B",
        label: "Global Market",
        description: "Projected ambulance services by 2030",
        color: "from-teal-500 to-teal-600",
        glow: "glow-green"
    },
    {
        icon: Ambulance,
        value: 50000,
        suffix: "+",
        label: "Happy Patients",
        description: "Trusted across India",
        color: "from-brick-500 to-brick-600",
        glow: "shadow-lg shadow-info-500/50"
    }
]

export function Stats() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section className="relative py-24 bg-gradient-dark overflow-hidden">
            <Particles count={40} />
            <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ backgroundColor: "#CB4154" }} />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ backgroundColor: "#006D5B" }} />

            <Container className="relative z-10" ref={ref}>
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Designed To Save Time When <span className="gradient-text">Minutes Mean Life</span>
                    </h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Clinical studies show that shaving 15–60 minutes from prehospital and door-to-treatment time can measurably reduce deaths and long-term disability in trauma, heart attack, and stroke.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, index) => {
                        const IconComponent = stat.icon
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <Card variant="glass-dark" padding="lg" className="text-center hover-lift group relative overflow-hidden">
                                    <div
                                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl shadow-lg ${stat.glow} mb-6 relative z-10`}
                                        style={{
                                            background: stat.color.includes('brick')
                                                ? 'linear-gradient(135deg, #CB4154 0%, #B33A4A 100%)'
                                                : stat.color.includes('gold')
                                                    ? 'linear-gradient(135deg, #EDB83D 0%, #D9A735 100%)'
                                                    : 'linear-gradient(135deg, #006D5B 0%, #005C4B 100%)'
                                        }}
                                    >
                                        <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                                    </div>
                                    <div className="text-5xl font-bold text-white mb-3 relative z-10">
                                        <Counter end={stat.value} duration={1200} trigger={isInView} suffix={stat.suffix} />
                                    </div>
                                    <div className="text-xl font-semibold text-gray-200 mb-2 relative z-10">{stat.label}</div>
                                    <div className="text-sm text-gray-400 relative z-10">{stat.description}</div>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}