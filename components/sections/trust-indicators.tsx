"use client"

import * as React from "react"
import { Container } from "@/components/ui/container"
import { Card } from "@/components/ui/card"
import { ShieldCheck, Award, Users, HeartPulse } from "lucide-react"
import { motion } from "framer-motion"

const indicators = [
    {
        icon: ShieldCheck,
        title: "Clinically Aligned Platform",
        description: "Built around evidence-based emergency protocols and hospital-grade data practices.",
        gradient: "from-brick-500 to-brick-600"
    },
    {
        icon: Award,
        title: "Built For The Golden Hour",
        description: "Designed to cut 15–60 minutes from prehospital and door-to-treatment delays in trauma and stroke.",
        gradient: "from-gold-500 to-gold-600"
    },
    {
        icon: Users,
        title: "Trained Clinical Teams",
        description: "Technicians trained on telemedicine, smart devices, and hospital coordination workflows.",
        gradient: "from-teal-500 to-teal-600"
    },
    {
        icon: HeartPulse,
        title: "24/7 Connected Coverage",
        description: "Always-on ambulance and hospital network, reachable by app or call at any hour.",
        gradient: "from-brick-500 to-brick-600"
    }
]

export function TrustIndicators() {
    return (
        <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 border-y border-gray-100">
            <Container>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {indicators.map((indicator, index) => {
                        const IconComponent = indicator.icon
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                                <Card variant="glass" padding="lg" className="text-center group hover-lift h-full">
                                    <div className="relative inline-block mb-4">
                                        <div
                                            className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200 relative z-10"
                                            style={{
                                                background: indicator.gradient.includes('brick') 
                                                    ? 'linear-gradient(135deg, #CB4154 0%, #B33A4A 100%)'
                                                    : indicator.gradient.includes('gold')
                                                    ? 'linear-gradient(135deg, #EDB83D 0%, #D9A735 100%)'
                                                    : 'linear-gradient(135deg, #006D5B 0%, #005C4B 100%)'
                                            }}
                                        >
                                            <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
                                        </div>
                                        <div className={`absolute inset-0 bg-gradient-to-br ${indicator.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-200 -z-10`} />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2 text-lg">{indicator.title}</h3>
                                    <p className="text-sm text-gray-600">{indicator.description}</p>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>
            </Container>
        </section>
    )
}