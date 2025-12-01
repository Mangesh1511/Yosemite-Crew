import { Schema, model, HydratedDocument } from 'mongoose'
import { VendorTypeEnum, PaymentTermsEnum } from '../utils/constants/enums'

export interface VendorMongo {
    vendorId: string
    type?: VendorTypeEnum // company/user
    refId?: string // the companyId or userId
    name?: string
    brand?: string
    licenseNumber?: string
    leadTimeDays?: number
    vendorType?: number
    supplierProductCode?: string
    paymentTerms?: PaymentTermsEnum
}

const VendorSchema = new Schema<VendorMongo>(
    {
        vendorId: { type: String, required: true, unique: true },
        type: { type: Number },
        refId: { type: String },
        name: { type: String },
        brand: { type: String },
        licenseNumber: { type: String },
        leadTimeDays: { type: Number },
        vendorType: { type: Number },
        supplierProductCode: { type: String },
        paymentTerms: { type: Number },
    },
    { timestamps: true },
)

VendorSchema.index({ vendorId: 1 })

export type VendorDocument = HydratedDocument<VendorMongo>

const VendorModel = model<VendorMongo>('Vendor', VendorSchema)

export default VendorModel
