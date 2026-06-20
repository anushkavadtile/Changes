"use client"

import { Container } from "@/components/ui/container"
import { AnimatedButton } from "@/components/ui/animated-button"
import { GradientText } from "@/components/ui/gradient-text"
import { Smartphone, Apple, CheckCircle, Zap, MapPin, FileText } from "lucide-react"
import { motion } from "framer-motion"

const features = [
    {
        icon: Zap,
        title: "One-Tap Emergency Booking",
        description: "Save critical seconds in emergencies"
    },
    {
        icon: MapPin,
        title: "Real-Time GPS Tracking",
        description: "See exactly where your ambulance is"
    },
    {
        icon: FileText,
        title: "Booking History & Medical Records",
        description: "Access past bookings and reports anytime"
    }
]

export function AppDownload() {
    return (
        <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">

            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }} />
            </div>


            <div className="absolute top-20 left-10 w-72 h-72 bg-emergency-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-medical-500/20 rounded-full blur-3xl" />

            <Container>
                <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Be prepared before an{" "}
                            <GradientText variant="premium">
                                Emergency Happens
                            </GradientText>
                        </h2>
                        <p className="text-xl text-gray-300 mb-10">
                            Download the AmbAnaX app now so your family has one‑tap access to smart emergency care when it matters most.
                        </p>


                        <div className="space-y-6 mb-10">
                            {features.map((feature, index) => {
                                const IconComponent = feature.icon
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                        className="flex items-start gap-4 group"
                                    >
                                        <div className="w-12 h-12 bg-gradient-medical rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-200">
                                            <IconComponent
                                                className="w-6 h-6 text-white"
                                                strokeWidth={2}
                                                style={{ stroke: 'white' }}
                                            />
                                        </div>
                                        <div>
                                            <div className="font-bold text-lg mb-1">{feature.title}</div>
                                            <div className="text-sm text-gray-400">{feature.description}</div>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>


                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.15 }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <AnimatedButton size="lg" variant="glass" className="bg-white/10 hover:bg-white/20 border-white/20">
                                <Apple className="w-5 h-5" />
                                App Store
                            </AnimatedButton>
                            <AnimatedButton size="lg" variant="glass" className="bg-white/10 hover:bg-white/20 border-white/20">
                                <Smartphone className="w-5 h-5" />
                                Google Play
                            </AnimatedButton>
                        </motion.div>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                        className="relative flex justify-center"
                    >
                        <motion.div
                            className="relative w-72 h-[580px]"
                            animate={{
                                y: [0, -20, 0],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >

                            <div className="relative w-full h-full bg-gray-900 rounded-[3.5rem] border-[14px] border-gray-800 shadow-2xl overflow-hidden">

                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-20" />


                                <div className="w-full h-full bg-gradient-to-br from-brick-500/30 via-gold-500/30 to-teal-500/30 relative overflow-hidden">

                                    <div className="absolute inset-0 flex flex-col p-6 pt-12">

                                        <div className="mb-8">
                                            <div className="text-white/90 text-sm mb-2">Welcome back,</div>
                                            <div className="text-white font-bold text-2xl">Emergency Ready</div>
                                        </div>


                                        <motion.div
                                            className="mb-6"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <div className="bg-gradient-emergency p-6 rounded-3xl shadow-xl">
                                                <div className="flex items-center justify-between mb-3">
                                                    <div className="text-white font-bold text-lg">Emergency</div>
                                                    <Zap className="w-6 h-6 text-white" />
                                                </div>
                                                <div className="text-white/80 text-sm">Tap for instant ambulance</div>
                                            </div>
                                        </motion.div>


                                        <div className="grid grid-cols-2 gap-3">
                                            <div className="glass-dark p-4 rounded-2xl">
                                                <div className="text-white/60 text-xs mb-1">Avg Response</div>
                                                <div className="text-white font-bold text-xl">6 min</div>
                                            </div>
                                            <div className="glass-dark p-4 rounded-2xl">
                                                <div className="text-white/60 text-xs mb-1">Available</div>
                                                <div className="text-white font-bold text-xl">24/7</div>
                                            </div>
                                        </div>
                                    </div>


                                    <motion.div
                                        className="absolute top-20 right-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center"
                                        animate={{ y: [0, -10, 0] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    >
                                        <MapPin className="w-5 h-5 text-white" />
                                    </motion.div>
                                    <motion.div
                                        className="absolute bottom-32 left-4 w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center"
                                        animate={{ y: [0, 10, 0] }}
                                        transition={{ duration: 1.8, repeat: Infinity }}
                                    >
                                        <CheckCircle className="w-5 h-5 text-white" />
                                    </motion.div>
                                </div>


                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                            </div>


                            <div className="absolute inset-0 -z-10 bg-gradient-emergency blur-3xl opacity-30 scale-90" />
                        </motion.div>
                    </motion.div>
                </div>
            </Container>
        </section>
    )
}