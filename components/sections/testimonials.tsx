"use client"

import { Container } from "@/components/ui/container"
import { Card } from "@/components/ui/card"
import { GradientText } from "@/components/ui/gradient-text"
import { motion } from "framer-motion"
import { Star, Quote, CheckCircle } from "lucide-react"

const testimonials = [
    {
        name: "Rajesh Kumar",
        role: "Verified Family Member",
        location: "Delhi",
        rating: 5,
        text: "We could see the ambulance moving towards us, and within minutes of boarding the technician started a video call with the hospital doctor—by the time we reached, the team was ready and treatment began immediately.",
        avatar: "RK",
        gradient: "linear-gradient(135deg, #CB4154 0%, #B33A4A 100%)"
    },
    {
        name: "Priya Sharma",
        role: "Verified Patient Attendant",
        location: "Mumbai",
        rating: 5,
        text: "During my father’s heart attack at 2 AM, being able to choose a government hospital, track the ambulance, and know doctors were already watching his vitals on the way gave us real peace of mind.",
        avatar: "PS",
        gradient: "linear-gradient(135deg, #EDB83D 0%, #D9A735 100%)"
    },
    {
        name: "Dr. Amit Verma",
        role: "Consultant Emergency Physician",
        location: "Bangalore",
        rating: 5,
        text: "AmbAnaX brings us into the case while the patient is still on the road—with vitals, ECG, and basic reports already shared, our team can activate stroke or cardiac pathways much faster than before.",
        avatar: "AV",
        gradient: "linear-gradient(135deg, #006D5B 0%, #005C4B 100%)"
    }
]

export function Testimonials() {
    return (
        <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
            <Container className="relative z-10">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Real Experiences From{" "}
                        <GradientText variant="premium">Emergencies</GradientText>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        What families and doctors say about smart, connected ambulance care.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.08 }}
                        >
                            <Card variant="elevated" padding="lg" className="relative overflow-hidden group hover-lift h-full">
                                <Quote className="absolute top-6 right-6 w-10 h-10 text-gray-200 group-hover:text-gray-300 transition-colors" />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg" style={{ background: testimonial.gradient }}>
                                            {testimonial.avatar}
                                        </div>
                                        <div>
                                            <div className="font-bold text-gray-900 text-lg">{testimonial.name}</div>
                                            <div className="text-sm text-gray-500 flex items-center gap-1">
                                                {testimonial.role} • {testimonial.location}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex gap-1 mb-6">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 leading-relaxed text-base mb-4">
                                        &quot;{testimonial.text}&quot;
                                    </p>
                                    <div className="flex items-center gap-2 text-sm font-semibold" style={{ color: "#005C4B" }}>
                                        <CheckCircle className="w-4 h-4" />
                                        <span>Verified</span>
                                    </div>
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" style={{ background: testimonial.gradient }} />
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </section>
    )
}