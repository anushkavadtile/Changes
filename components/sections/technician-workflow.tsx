"use client"

import { Container } from "@/components/ui/container"
import { CheckCircle2, Smartphone, Activity, ClipboardList } from "lucide-react"

export function TechnicianWorkflow() {
    return (
        <section className="py-20 bg-slate-50 border-t border-slate-200">
            <Container>
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-4">
                            BEHIND THE SCENES
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            The Technician&apos;s Workflow
                        </h2>
                        <p className="text-lg text-slate-600">
                            How our paramedics ensure seamless care from pickup to hospital handover.
                        </p>
                    </div>


                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 mb-12">
                        <div className="flex items-start gap-6">
                            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-600 flex-shrink-0">
                                <ClipboardList className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">1. Registration & Authentication</h3>
                                <p className="text-slate-600 mb-4">
                                    Every technician and driver undergoes a strict vetting process.
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-sm text-slate-600">
                                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                                        Identity Verification
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-slate-600">
                                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                                        Credential Check (Medical Certification)
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-slate-600">
                                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                                        Ambulance Association Approval
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                            <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                                <Smartphone className="w-5 h-5 text-blue-600" />
                                Technician Dashboard
                            </h3>
                            <p className="text-slate-600 mb-4">
                                After login, the technician sees a live dashboard with two key modes:
                            </p>
                            <div className="space-y-3">
                                <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                                    <div className="font-semibold text-blue-800 text-sm">System Bookings</div>
                                    <div className="text-xs text-blue-600">Auto-linked to patient requests</div>
                                </div>
                                <div className="p-3 bg-orange-50 rounded-lg border border-orange-100">
                                    <div className="font-semibold text-orange-800 text-sm">Manual Entry</div>
                                    <div className="text-xs text-orange-600">For flagging down or outside patients</div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-800 rounded-2xl p-8 text-white flex flex-col justify-center">
                            <div className="text-center">
                                <Activity className="w-12 h-12 text-green-400 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2">Real-Time Sync</h3>
                                <p className="text-slate-300 text-sm">
                                    Patient records, diagnostic reports, and communication logs are instantly synchronized with the hospital system.
                                </p>
                            </div>
                        </div>
                    </div>


                    <div className="space-y-8 mb-20">
                        <h3 className="text-2xl font-bold text-slate-900 text-center mb-8">Handling Patient Cases</h3>


                        <div className="relative pl-8 md:pl-0">
                            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-slate-200"></div>

                            <div className="md:flex items-center justify-between gap-8 mb-12">
                                <div className="md:w-1/2 md:text-right order-1">
                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 relative">
                                        <div className="absolute top-6 right-6 md:left-auto md:right-full md:mr-6 md:translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-sm z-10 hidden md:block"></div>
                                        <h4 className="text-lg font-bold text-blue-600 mb-2">Case 1: System Linked Patient</h4>
                                        <ul className="text-sm text-slate-600 space-y-2">
                                            <li>System auto-loads Name, Age, Condition & Hospital Preference.</li>
                                            <li>Technician clicks <strong>&quot;Boarded&quot;</strong> upon pickup.</li>
                                            <li><strong>One-tap Video Call</strong> to affiliated hospital doctors.</li>
                                            <li>Diagnostics performed & reports uploaded to cloud.</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="md:w-1/2 order-2"></div>
                            </div>


                            <div className="md:flex items-center justify-between gap-8">
                                <div className="md:w-1/2 order-1"></div>
                                <div className="md:w-1/2 order-2">
                                    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 relative">
                                        <div className="absolute top-6 left-6 md:right-auto md:left-0 md:-ml-6 md:-translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-sm z-10 hidden md:block"></div>
                                        <h4 className="text-lg font-bold text-orange-600 mb-2">Case 2: Manual Entry (Unlinked)</h4>
                                        <ul className="text-sm text-slate-600 space-y-2">
                                            <li>Technician clicks <strong>&quot;New Patient&quot;</strong> & enters details manually.</li>
                                            <li>Clicks <strong>&quot;Boarded&quot;</strong> to start the case.</li>
                                            <li>Video call initiated with selected hospital.</li>
                                            <li><strong>WhatsApp Integration:</strong> Live location & details sent to Doctor (for prep) and Driver (for route).</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                        <div className="p-6 bg-slate-50 border-b border-slate-200">
                            <h3 className="text-lg font-bold text-slate-900">Workflow Summary</h3>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
                                    <tr>
                                        <th className="px-6 py-4">Stage</th>
                                        <th className="px-6 py-4">Action</th>
                                        <th className="px-6 py-4">System Interaction</th>
                                        <th className="px-6 py-4">Communication</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr>
                                        <td className="px-6 py-4 font-medium text-slate-900">Registration</td>
                                        <td className="px-6 py-4">Technician registers via authorized agency</td>
                                        <td className="px-6 py-4"><span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">Verification Required</span></td>
                                        <td className="px-6 py-4 text-slate-500">-</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-medium text-slate-900">System Booking</td>
                                        <td className="px-6 py-4">Auto-loads patient details</td>
                                        <td className="px-6 py-4">System fetches data</td>
                                        <td className="px-6 py-4 text-slate-500">Doctor call available</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-medium text-slate-900">Manual Booking</td>
                                        <td className="px-6 py-4">Technician adds patient manually</td>
                                        <td className="px-6 py-4">Data entered manually</td>
                                        <td className="px-6 py-4 text-slate-500">Video call + WhatsApp</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-medium text-slate-900">Boarded Status</td>
                                        <td className="px-6 py-4">Marks patient onboard</td>
                                        <td className="px-6 py-4">Sends WhatsApp alerts</td>
                                        <td className="px-6 py-4 text-slate-500">Enables doctor communication</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-medium text-slate-900">Diagnostics</td>
                                        <td className="px-6 py-4">Performs and uploads tests</td>
                                        <td className="px-6 py-4">Syncs with cloud</td>
                                        <td className="px-6 py-4 text-slate-500">Video call active</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-medium text-slate-900">Reporting</td>
                                        <td className="px-6 py-4">Uploads reports</td>
                                        <td className="px-6 py-4">Hospitals receive updates</td>
                                        <td className="px-6 py-4 text-slate-500">Doctor notified instantly</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-4 font-medium text-slate-900">Navigation</td>
                                        <td className="px-6 py-4">WhatsApp sends location</td>
                                        <td className="px-6 py-4">API integration with map</td>
                                        <td className="px-6 py-4 text-slate-500">Ambulance route shared</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    )
}
