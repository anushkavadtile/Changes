"use client"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Container } from "@/components/ui/container"
import { AnimatedButton } from "@/components/ui/animated-button"
import { Card } from "@/components/ui/card"
import { GradientText } from "@/components/ui/gradient-text"
import { Building2, Truck, CheckCircle2, ArrowRight, LineChart, Stethoscope, Zap, Globe, Loader2 } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { sendPartnershipEmail } from "@/app/actions"

export default function PartnerPage() {
    const [partnerType, setPartnerType] = useState<'hospital' | 'fleet'>('hospital')
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    async function handleSubmit(formData: FormData) {
        setIsSubmitting(true)
        formData.append("type", partnerType)

        const result = await sendPartnershipEmail(formData)

        setIsSubmitting(false)
        if (result.success) {
            setIsSuccess(true)
        } else {
            alert("Something went wrong. Please try again later.")
        }
    }


    const content = {
        hospital: {
            title: "For Hospitals & Emergency Rooms",
            description: "Extend your ER's capabilities to the patient's doorstep. Receive live vitals, ECGs, and patient data before the ambulance arrives.",
            benefits: [
                { icon: Stethoscope, text: "Pre-Arrival Clinical Data (ECG, Vitals)" },
                { icon: Zap, text: "Reduced Door-to-Needle Time" },
                { icon: Globe, text: "Expand Your Catchment Area" },
                { icon: CheckCircle2, text: "Seamless Digital Handover" }
            ],
            gradient: "from-teal-500 to-teal-600"
        },
        fleet: {
            title: "For Ambulance Fleet Owners",
            description: "Upgrade your vehicles into 'Smart Ambulances'. Get access to our demand network, optimized routing, and higher revenue utilization.",
            benefits: [
                { icon: LineChart, text: "Higher Fleet Utilization & Revenue" },
                { icon: Truck, text: "Smart Dispatch & Navigation Tech" },
                { icon: Zap, text: "Telemedicine Hardware Upgrade" },
                { icon: CheckCircle2, text: "Guaranteed Payments & Transparency" }
            ],
            gradient: "from-gold-500 to-gold-600"
        }
    }

    const activeContent = content[partnerType]

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pt-32 pb-24 bg-gray-50">
                <Container>

                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
                            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                            <span className="text-sm font-semibold text-gray-600">Now Onboarding Partners</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                            Partner With <GradientText variant="premium">AmbAnaX</GradientText>
                        </h1>
                        <p className="text-xl text-gray-600">
                            Join India&apos;s first telemedicine-enabled emergency network. Choose your category to get started.
                        </p>
                    </div>


                    <div className="flex justify-center mb-12">
                        <div className="bg-white p-1.5 rounded-full shadow-sm border border-gray-200 flex gap-2">
                            <button
                                onClick={() => setPartnerType('hospital')}
                                className={`flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold transition-all duration-200 ${partnerType === 'hospital'
                                    ? 'bg-teal-600 text-white shadow-md'
                                    : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                <Building2 className="w-4 h-4" />
                                Hospital Partner
                            </button>
                            <button
                                onClick={() => setPartnerType('fleet')}
                                className={`flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold transition-all duration-200 ${partnerType === 'fleet'
                                    ? 'bg-gold-500 text-white shadow-md'
                                    : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                <Truck className="w-4 h-4" />
                                Fleet Owner
                            </button>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">

                        <div className="lg:col-span-2">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={partnerType}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <div className={`p-8 rounded-3xl bg-gradient-to-br ${activeContent.gradient} text-white shadow-xl`}>
                                        <h2 className="text-3xl font-bold mb-4">{activeContent.title}</h2>
                                        <p className="text-white/90 text-lg mb-8 leading-relaxed">
                                            {activeContent.description}
                                        </p>
                                        <div className="space-y-4">
                                            {activeContent.benefits.map((item, i) => (
                                                <div key={i} className="flex items-center gap-3 bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/10">
                                                    <item.icon className="w-5 h-5 text-white" />
                                                    <span className="font-medium">{item.text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>


                        <div className="lg:col-span-3">
                            <Card className="p-8 md:p-10 bg-white shadow-lg border-gray-100">
                                {isSuccess ? (
                                    <div className="text-center py-12">
                                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle2 className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
                                        <p className="text-gray-500 mb-8">
                                            Thank you for your interest. We have sent a confirmation email to you. Our team will contact you shortly.
                                        </p>
                                        <button
                                            onClick={() => setIsSuccess(false)}
                                            className="text-brick-600 font-semibold hover:underline"
                                        >
                                            Submit another request
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Partnership Inquiry</h3>
                                        <p className="text-gray-500 mb-8">Fill in your details and our network team will contact you within 24 hours.</p>

                                        <form className="space-y-6" action={handleSubmit}>
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-semibold text-gray-700">Organization Name</label>
                                                    <input name="orgName" type="text" required placeholder={partnerType === 'hospital' ? "e.g. City General Hospital" : "e.g. Fast Response Ambulance"} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brick-500/20 outline-none transition-all" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-semibold text-gray-700">Contact Person</label>
                                                    <input name="contactPerson" type="text" required placeholder="Full Name" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brick-500/20 outline-none transition-all" />
                                                </div>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-semibold text-gray-700">Official Email</label>
                                                    <input name="email" type="email" required placeholder="name@company.com" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brick-500/20 outline-none transition-all" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                                                    <input name="phone" type="tel" required placeholder="+91 98765 43210" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brick-500/20 outline-none transition-all" />
                                                </div>
                                            </div>

                                            <div className="grid md:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-sm font-semibold text-gray-700">City / Location</label>
                                                    <input name="city" type="text" required placeholder="Headquarters Location" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brick-500/20 outline-none transition-all" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-sm font-semibold text-gray-700">
                                                        {partnerType === 'hospital' ? 'Number of Beds' : 'Fleet Size'}
                                                    </label>
                                                    <select name="capacity" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brick-500/20 outline-none bg-white">
                                                        <option value="">Select Capacity</option>
                                                        <option value="small">1 - 10</option>
                                                        <option value="medium">11 - 50</option>
                                                        <option value="large">50+</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <label className="text-sm font-semibold text-gray-700">Message (Optional)</label>
                                                <textarea name="message" rows={3} placeholder="Tell us about your specific requirements..." className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brick-500/20 outline-none" />
                                            </div>

                                            <AnimatedButton
                                                size="lg"
                                                className="w-full text-lg font-bold flex items-center justify-center"
                                                variant={partnerType === 'hospital' ? 'secondary' : 'default'}
                                                style={partnerType === 'fleet' ? { background: 'var(--color-gold-500)' } : {}}
                                                disabled={isSubmitting}
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <Loader2 className="w-5 h-5 animate-spin mr-2" />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        Submit Partnership Request <ArrowRight className="w-5 h-5 ml-2" />
                                                    </>
                                                )}
                                            </AnimatedButton>
                                        </form>
                                    </>
                                )}
                            </Card>
                        </div>
                    </div>
                </Container>
            </main>
            <Footer />
        </div>
    )
}