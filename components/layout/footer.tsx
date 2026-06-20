import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail } from "lucide-react"
import { Container } from "@/components/ui/container"

export function Footer() {
    return (
        <footer className="bg-neutral-800 text-neutral-300 pt-16 pb-8">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6">
                            <div className="flex items-center justify-center w-24 h-24">
                                <Image
                                    src="/images/logo/final logo.png"
                                    alt="AmbAnaX Logo"
                                    width={97}
                                    height={97}
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-2xl font-bold ml-2">
                                <span className="text-[#CB4154]">Amb</span>
                                <span className="text-[#006D5B]">Ana</span>
                                <span className="text-[#EDB83D]">X</span>
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed mb-6 text-neutral-400">
                            Transforming emergency transport into active emergency treatment.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="hover:text-primary transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="hover:text-primary transition-colors">
                                <Twitter className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="hover:text-primary transition-colors">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="hover:text-primary transition-colors">
                                <Facebook className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>


                    <div>
                        <h3 className="text-white font-semibold mb-6">Services</h3>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <Link href="/services/ground" className="hover:text-primary transition-colors">
                                    Ground Ambulance
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/icu" className="hover:text-primary transition-colors">
                                    ICU Ambulance
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/air" className="hover:text-primary transition-colors">
                                    Air Ambulance
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/medical" className="hover:text-primary transition-colors">
                                    Medical Support
                                </Link>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-white font-semibold mb-6">Company</h3>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <Link href="/about" className="hover:text-primary transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="hover:text-primary transition-colors">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-primary transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link href="/press" className="hover:text-primary transition-colors">
                                    Press
                                </Link>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-white font-semibold mb-6">Legal</h3>
                        <ul className="space-y-4 text-sm">
                            <li>
                                <Link href="/privacy" className="hover:text-primary transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-primary transition-colors">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/accessibility" className="hover:text-primary transition-colors">
                                    Accessibility
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-primary transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-white font-semibold mb-6">Emergency</h3>
                        <div className="space-y-4">
                            <a
                                href="tel:7099636948"
                                className="block text-2xl font-bold text-white hover:text-primary transition-colors"
                            >
                                70996 36948
                            </a>
                            <a
                                href="https://wa.me/918800123456"
                                className="flex items-center gap-2 text-sm hover:text-green-400 transition-colors"
                            >
                                <Phone className="w-4 h-4" />
                                WhatsApp Support
                            </a>
                            <a
                                href="mailto:contact@ambanax.com"
                                className="flex items-center gap-2 text-sm hover:text-primary transition-colors"
                            >
                                <Mail className="w-4 h-4" />
                                contact@ambanax.com
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-neutral-700 pt-8 text-center text-sm text-neutral-500">
                    <p>&copy; {new Date().getFullYear()} AmbAnaX Healthcare. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    )
}
