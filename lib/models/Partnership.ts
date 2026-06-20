import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IPartnership extends Document {
    orgName: string;
    contactPerson: string;
    email: string;
    phone: string;
    city: string;
    capacity: string;
    message?: string;
    type: 'hospital' | 'fleet';
    createdAt: Date;
}

const PartnershipSchema: Schema = new Schema(
    {
        orgName: { type: String, required: true },
        contactPerson: { type: String, required: true },
        email: { type: String, required: true },
        phone: { type: String, required: true },
        city: { type: String, required: true },
        capacity: { type: String, required: true },
        message: { type: String },
        type: {
            type: String,
            enum: ['hospital', 'fleet'],
            required: true
        },
    },
    {
        timestamps: true
    }
);

const Partnership: Model<IPartnership> = mongoose.models.Partnership || mongoose.model<IPartnership>('Partnership', PartnershipSchema);

export default Partnership;
