"use client"

import { Container } from "@/components/ui/container"
import { GradientText } from "@/components/ui/gradient-text"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
    {
        question: "What is AmbAnaX?",
        answer: "AmbAnaX is a smart ambulance and emergency care platform that lets you book an ambulance, choose a public or private hospital, and start doctor‑guided care during the ride through telemedicine and connected diagnostic devices."
    },
    {
        question: "How is AmbAnaX different from a normal ambulance service?",
        answer: "Traditional ambulances mainly transport patients to the hospital, and most tests and decisions only start after arrival. With AmbAnaX, vital signs, ECG, and point‑of‑care tests can be done inside the ambulance and shared live with hospital doctors so that triage and treatment planning begin before you reach the emergency department."
    },
    {
        question: "How do I book an ambulance in an emergency?",
        answer: "You can book through the AmbAnaX mobile app, by sending a message on WhatsApp, or by calling the dedicated emergency number shown on our platform. In every case, the system asks who you are booking for, captures the patient’s location, helps you choose a public or private hospital, and then assigns the nearest suitable ambulance while giving you live tracking and contact details."
    },
    {
        question: "Can I choose between government and private hospitals?",
        answer: "Yes, AmbAnaX allows you to choose a government or private hospital based on cost, preference, and availability. If you are booking for an unknown patient you found at an accident site, the system safely guides the case to the nearest government hospital by default so care is not delayed by paperwork or affordability."
    },
    {
        question: "What happens inside a smart ambulance once the patient is onboard?",
        answer: "After the patient is boarded, the technician logs the case in the system and can start a secure video call with the chosen hospital’s doctor from inside the ambulance. The doctor can see the patient, review vital signs and test results from connected devices, and instruct the technician on what assessments or initial interventions to perform during the journey."
    },
    {
        question: "How does AmbAnaX help hospitals and doctors?",
        answer: "Hospitals receive pre‑arrival data such as vitals, ECG, and basic reports along with live location, which helps them decide in advance whether to activate stroke, trauma, or cardiac pathways. This reduces door‑to‑needle and door‑to‑balloon times, supports better triage, and allows teams to prepare ICU, cath lab, or operating room resources before the ambulance reaches the gate."
    },
    {
        question: "How does AmbAnaX benefit ambulance operators?",
        answer: "Ambulance operators can upgrade from simple transport to smart ambulances with telemedicine, diagnostics, and integrated hospital workflows, which adds clear clinical and business value. This differentiation can support better contracts with hospitals and payers and improve fleet utilization by plugging operators into a larger, tech‑driven emergency network."
    },
    {
        question: "Is AmbAnaX available 24/7?",
        answer: "Yes, the AmbAnaX platform is designed for 24/7 use with an integrated network of ambulances and partner hospitals. Actual coverage depends on your city and participating operators, but if the platform shows an ambulance option in your area, it is available round the clock subject to fleet availability."
    },
    {
        question: "What types of emergencies can AmbAnaX handle?",
        answer: "AmbAnaX is built for time‑sensitive conditions such as heart attack, stroke, trauma, severe breathing difficulty, sepsis, and other serious medical emergencies. The same platform can also be used for inter‑hospital transfers and planned critical‑care movements when ICU or air ambulances are required."
    },
    {
        question: "Is my data safe when I use AmbAnaX?",
        answer: "AmbAnaX is designed as a healthcare‑grade platform where patient details, reports, and video calls are handled through secure, access‑controlled systems. Only authorized technicians, doctors, and hospital teams involved in your care can view the case information needed to treat you."
    },
    {
        question: "How much does an AmbAnaX ambulance cost?",
        answer: "Pricing depends on your city, the type of ambulance (basic, ICU, or air), and whether you go to a government or private hospital. Before confirming a booking, AmbAnaX shows clear pricing information or estimates wherever available so you are not surprised by hidden charges."
    },
    {
        question: "Who can partner with AmbAnaX?",
        answer: "Hospitals, ambulance operators, emergency physician groups, and diagnostic providers can partner with AmbAnaX to create a connected prehospital network. Partners gain access to a shared digital workflow, pre‑arrival data, and smart ambulance capabilities that improve outcomes and operational efficiency."
    }
]

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <Container className="relative z-10">
                <motion.div className="max-w-3xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">
                            <GradientText variant="premium">Questions About</GradientText> AmbAnaX
                        </h2>
                        <p className="text-xl text-gray-600">
                            Clear answers about how AmbAnaX works for patients, hospitals, and ambulance operators.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                className="glass rounded-2xl overflow-hidden border border-gray-100 hover:border-brick-200 transition-all group bg-white/60 hover:bg-white/80"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/50 transition-colors"
                                >
                                    <span className="font-bold text-gray-900 pr-8 text-lg">{faq.question}</span>
                                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </section>
    )
}