"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Container } from "@/components/ui/container"
import { GradientText } from "@/components/ui/gradient-text"
import { Particles, GradientOrb } from "@/components/ui/floating-elements"
import { Card } from "@/components/ui/card"
import { AnimatedButton } from "@/components/ui/animated-button"
import { HeartPulse, Clock, Shield, Users, Activity } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

const values = [
    {
        icon: Clock,
        title: "Speed Is Treatment",
        desc: "We don't just drive fast. We start diagnosis and stabilization instantly, making every second of the journey clinically productive.",
        bgColor: "#FDE8EA",
        iconColor: "#B33A4A"
    },
    {
        icon: Shield,
        title: "Radical Transparency",
        desc: "No hidden costs or blind routing. We give patients the power to choose their hospital and see exactly what they are paying for.",
        bgColor: "#E6F7F4",
        iconColor: "#005C4B"
    },
    {
        icon: Activity,
        title: "Clinical Excellence",
        desc: "Our technology serves medicine, not the other way around. Every feature is designed to help doctors save lives.",
        bgColor: "#FEF9E7",
        iconColor: "#D9A735"
    }
]

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">

                <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-900 text-white">
                    <div className="absolute inset-0 bg-gradient-mesh opacity-20 pointer-events-none" />
                    <Particles count={40} className="opacity-30" />
                    <GradientOrb color="emergency" size="xl" blur="3xl" className="top-0 right-0 opacity-20" />

                    <Container className="relative z-10">
                        <motion.div
                            className="max-w-4xl mx-auto text-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border-white/10">
                                <Users className="w-4 h-4" style={{ color: "#CB4154" }} />
                                <span className="text-sm font-bold text-gray-200">Our Mission</span>
                            </div>

                            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
                                We Are The <br />
                                <GradientText variant="premium">Golden Hour Guardians</GradientText>
                            </h1>

                            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto font-light">
                                AmbAnaX was built to solve a single, deadly problem: <span className="text-white font-semibold">The &quot;Blind Spot&quot;</span> between an emergency call and hospital arrival.
                            </p>
                        </motion.div>
                    </Container>
                </section>


                <section className="py-24 bg-white relative overflow-hidden">
                    <Container>
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4 }}
                            >
                                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                    The Gap In <GradientText variant="emergency">Modern Healthcare</GradientText>
                                </h2>
                                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                    <p>
                                        Modern hospitals are miracles of science. But for a patient suffering a stroke, cardiac arrest, or trauma on the road, that science is often too far away.
                                    </p>
                                    <p>
                                        For decades, ambulances have been treated as &quot;medical taxis&quot;—rushing blindly to the nearest door while valuable diagnostic time ticks away. Doctors typically see the patient for the first time only when they arrive.
                                    </p>
                                    <p className="font-semibold text-gray-900">
                                        We asked: What if the hospital could come to the patient?
                                    </p>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.2 }}
                                className="relative"
                            >
                                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 relative z-10">
                                    <Image
                                        src="/images/how-it-works/ambulance-interior.png"
                                        alt="Technician connecting with doctor"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                    <div className="absolute bottom-8 left-8 right-8">
                                        <div className="flex items-center gap-3 mb-2">
                                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                                            <span className="text-green-400 font-mono text-sm font-bold tracking-wider">LIVE CONNECTION ACTIVE</span>
                                        </div>
                                        <p className="text-white/90 text-lg">
                                            &quot;He&apos;s having a STEMI. Prepare the Cath Lab immediately.&quot;
                                        </p>
                                    </div>
                                </div>

                                <div className="absolute -inset-4 bg-gradient-to-tr from-brick-500/20 to-teal-500/20 rounded-[2.5rem] blur-2xl -z-10" />
                            </motion.div>
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
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                                Driven By <GradientText variant="premium">Values</GradientText>
                            </h2>
                            <p className="text-gray-600 max-w-2xl mx-auto">
                                We are building the operating system for emergency response.
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {values.map((item, index) => {
                                const Icon = item.icon
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Card variant="elevated" padding="lg" className="h-full group hover:border-gray-300 transition-all">
                                            <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-sm" style={{ backgroundColor: item.bgColor, color: item.iconColor }}>
                                                <Icon className="w-7 h-7" strokeWidth={2} />
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                                        </Card>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </Container>
                </section>


                <section className="py-24 bg-white">
                    <Container>
                        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-16 text-white relative overflow-hidden shadow-2xl">
                            <GradientOrb color="medical" size="xl" blur="3xl" className="top-0 left-0 opacity-20" />
                            <GradientOrb color="amber" size="lg" blur="3xl" className="bottom-0 right-0 opacity-10" />

                            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                        Join The Network Saving Lives
                                    </h2>
                                    <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                                        Whether you are a hospital looking to improve outcomes, a fleet owner wanting to upgrade technology, or a patient preparing for the unexpected—AmbAnaX is your partner in safety.
                                    </p>
                                    <div className="flex flex-wrap gap-4">
                                        <AnimatedButton variant="default" size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
                                            <HeartPulse className="w-5 h-5 mr-2" style={{ color: "#B33A4A" }} />
                                            Partner With Us
                                        </AnimatedButton>
                                        <AnimatedButton variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                                            Contact Support
                                        </AnimatedButton>
                                    </div>
                                </div>


                                <div className="grid grid-cols-2 gap-4">
                                    <div className="glass-dark p-6 rounded-2xl text-center">
                                        <div className="text-3xl font-bold mb-1" style={{ color: "#56C5B0" }}>50k+</div>
                                        <div className="text-sm text-gray-400">Lives Touched</div>
                                    </div>
                                    <div className="glass-dark p-6 rounded-2xl text-center">
                                        <div className="text-3xl font-bold mb-1" style={{ color: "#F9A8B4" }}>15m</div>
                                        <div className="text-sm text-gray-400">Avg. Time Saved</div>
                                    </div>
                                    <div className="glass-dark p-6 rounded-2xl text-center">
                                        <div className="text-3xl font-bold mb-1" style={{ color: "#FBBF24" }}>24/7</div>
                                        <div className="text-sm text-gray-400">Doctor Access</div>
                                    </div>
                                    <div className="glass-dark p-6 rounded-2xl text-center">
                                        <div className="text-3xl font-bold text-white mb-1">100%</div>
                                        <div className="text-sm text-gray-400">Reliable</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </section>
            </main>
            <Footer />
        </div>
    )
}