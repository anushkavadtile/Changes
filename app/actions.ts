"use server"

import nodemailer from "nodemailer"
import connectDB from "@/lib/db"
import Partnership from "@/lib/models/Partnership"

export async function sendPartnershipEmail(formData: FormData) {
  const data = {
    orgName: formData.get("orgName") as string,
    contactPerson: formData.get("contactPerson") as string,
    email: formData.get("email") as string,
    phone: formData.get("phone") as string,
    city: formData.get("city") as string,
    capacity: formData.get("capacity") as string,
    message: formData.get("message") as string,
    type: formData.get("type") as string,
  }

  try {

    await connectDB();

    const newPartnership = new Partnership({
      orgName: data.orgName,
      contactPerson: data.contactPerson,
      email: data.email,
      phone: data.phone,
      city: data.city,
      capacity: data.capacity,
      message: data.message,
      type: data.type,
    });

    await newPartnership.save();
    console.log("Data saved to MongoDB successfully");


    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })


    await transporter.sendMail({
      from: `"AmbAnaX Web" <${process.env.EMAIL_USER}>`,
      to: "contact@ambanax.com, ceo@ambanax.com, cto@ambanax.com, coo@ambanax.com",
      replyTo: data.email,
      subject: `New Partner Request: ${data.orgName} (${data.type?.toUpperCase()})`,
      html: `
        <div style="font-family: Arial, sans-serif; border: 1px solid #eee; padding: 20px; border-radius: 8px;">
          <h2 style="color: #B33A4A; margin-top: 0;">New Partnership Inquiry</h2>
          <p style="color: #666; font-size: 12px;">Saved to Database ID: ${newPartnership._id}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Type:</strong> ${data.type?.toUpperCase()}</p>
          <p><strong>Organization:</strong> ${data.orgName}</p>
          <p><strong>Contact Person:</strong> ${data.contactPerson}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>City:</strong> ${data.city}</p>
          <p><strong>Capacity:</strong> ${data.capacity}</p>
          <p><strong>Message:</strong><br/>${data.message || "N/A"}</p>
        </div>
      `,
    })


    await transporter.sendMail({
      from: `"AmbAnaX Team" <${process.env.EMAIL_USER}>`,
      to: data.email,
      subject: "We've received your partnership request - AmbAnaX",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px; max-width: 600px;">
          <h2 style="color: #006D5B; margin-top: 0;">Thank you for choosing AmbAnaX</h2>
          <p>Dear ${data.contactPerson},</p>
          <p>We have received your inquiry to partner with us as a <strong>${data.type}</strong> partner.</p>
          <p>Our network team is reviewing your details and will get back to you within 24 hours.</p>
          <br/>
          <p>Best Regards,</p>
          <p><strong>The AmbAnaX Team</strong></p>
        </div>
      `,
    })

    return { success: true }

  } catch (error) {
    console.error("Operation Failed:", error)
    return { success: false, error: "Failed to process request" }
  }
}
