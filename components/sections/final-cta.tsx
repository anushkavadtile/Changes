"use client"

import { Container } from "@/components/ui/container"
import { AnimatedButton } from "@/components/ui/animated-button"
import { CheckCircle2, Zap, Phone } from "lucide-react"
import { motion } from "framer-motion"

export function FinalCTA() {
    return (
        <section className="relative py-32 overflow-hidden" style={{ background: 'linear-gradient(135deg, #B33A4A 0%, #CB4154 50%, #EDB83D 100%)' }}>
            <Container className="relative z-10">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8 bg-white/10 backdrop-blur-md border border-white/20">
                        <Zap className="w-4 h-4 text-white" />
                        <span className="font-semibold text-sm text-white">Emergency Ready</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Ready For Connected, <br /> Smart Emergency Care?
                    </h2>

                    <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
                        Join families, hospitals, and ambulance operators who trust AmbAnaX to turn every ambulance ride into an active, doctor‑connected treatment window.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                        <AnimatedButton size="lg" className="bg-white hover:bg-white/90 text-lg h-14 px-10 shadow-2xl font-bold" style={{ color: "#B33A4A" }}>
                            <Phone className="w-5 h-5" style={{ color: "#B33A4A" }} /> Book Ambulance Now
                        </AnimatedButton>
                        <AnimatedButton size="lg" variant="glass" className="bg-white/10 hover:bg-white/20 border-white/30 text-white text-lg h-14 px-10 font-bold">
                            Schedule Hospital Meeting
                        </AnimatedButton>
                    </div>

                    <div className="inline-flex items-center gap-2 text-white/80 text-sm">
                        <CheckCircle2 className="w-4 h-4" />
                        <span>Built to align with modern prehospital care standards and the golden hour goals.</span>
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}