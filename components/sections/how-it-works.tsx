"use client";

import * as React from "react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { GradientText } from "@/components/ui/gradient-text";
import { motion } from "framer-motion";
import { Smartphone, MapPin, Building2, Truck, ArrowRight } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Step 1: Open App, WhatsApp, Or Call",
        description:
            "Tap the AmbAnaX app, send a message to our WhatsApp number, or dial our emergency line—each connects you to the same smart booking system.",
        icon: Smartphone,
        gradient: "from-brick-500 to-brick-600",
    },
    {
        id: 2,
        title: "Step 2: Tell Us Who Needs Help",
        description:
            "Confirm whether you are booking for yourself or someone else and share the patient’s current location so we can dispatch the nearest suitable ambulance.",
        icon: MapPin,
        gradient: "from-gold-500 to-gold-600",
    },
    {
        id: 3,
        title: "Step 3: Choose Public Or Private Hospital",
        description:
            "Choose a government or private hospital based on cost, preference, or need—unknown patients are safely guided to the nearest government hospital by default.",
        icon: Building2,
        gradient: "from-teal-500 to-teal-600",
    },
    {
        id: 4,
        title: "Step 4: Ambulance Assigned And Tracked Live",
        description:
            "The system allocates the nearest appropriate ambulance, notifies the hospital, and lets you track the vehicle and contact the technician until it reaches the patient.",
        icon: Truck,
        gradient: "from-brick-500 to-brick-600",
    },
];

export function HowItWorks() {
    return (
        <section className="py-24 bg-gradient-to-br from-gray-100 via-white to-gray-200 relative overflow-hidden">
            <Container className="relative z-10">
                <motion.div
                    className="text-center max-w-2xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        How To Book AmbAnaX{' '}
                        <GradientText variant="premium">In An Emergency</GradientText>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Use whichever channel is fastest for you—app, WhatsApp, or call—the same safe, guided flow runs in the background.
                    </p>
                </motion.div>

                <div className="relative max-w-6xl mx-auto">
                    <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-brick-500 via-gold-500 via-teal-500 to-brick-500 opacity-30 rounded-full" />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => {
                            const IconComponent = step.icon;
                            return (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                    <Card variant="elevated" padding="lg" className="text-center group hover-lift h-full relative overflow-hidden bg-white/30 backdrop-blur-lg border border-white/20 hover:scale-105 transition-transform duration-300">
                                        {/* Step Number Badge */}
                                        <div className="absolute top-4 right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 font-bold text-sm">
                                            {step.id}
                                        </div>

                                        {/* Icon */}
                                        <div className="relative inline-block mb-6">
                                            <div
                                                className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-200 relative z-10"
                                                style={{
                                                    background: step.gradient.includes("brick")
                                                        ? "linear-gradient(135deg, #CB4154 0%, #B33A4A 100%)"
                                                        : step.gradient.includes("gold")
                                                            ? "linear-gradient(135deg, #EDB83D 0%, #D9A735 100%)"
                                                            : "linear-gradient(135deg, #006D5B 0%, #005C4B 100%)"
                                                }}
                                            >
                                                <IconComponent className="w-10 h-10 text-white" strokeWidth={2} style={{ stroke: "white" }} />
                                            </div>
                                            {/* Glow effect */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-200 -z-10`} />
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600">{step.title}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed group-hover:text-primary-600">{step.description}</p>

                                        {/* Arrow Indicator (Desktop) */}
                                        {index < steps.length - 1 && (
                                            <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-20">
                                                <div className={`w-8 h-8 bg-gradient-to-br ${step.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                                                    <ArrowRight className="w-4 h-4 text-white" />
                                                </div>
                                            </div>
                                        )}

                                        {/* Bottom Gradient Border */}
                                        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${step.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-200`} />
                                    </Card>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px", amount: 0.3 }}
                    transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
                >
                    <p className="text-gray-600 mb-4">Ready to get started?</p>
                    <div className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full">
                        <Smartphone className="w-5 h-5 text-emergency-600" />
                        <span className="font-bold text-gray-900">Download the app today</span>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
