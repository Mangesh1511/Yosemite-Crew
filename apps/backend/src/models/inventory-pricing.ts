import { Schema, model, HydratedDocument } from 'mongoose'
import { CurrencyEnum, QuantityTypeEnum, StorageAreaEnum, StockTypeEnum } from '../utils/constants/enums'

export interface InventoryPricingMongo {
    inventoryId: string
    purchaseCostPerUnit?: number
    sellingPrice?: number
    usageCostPerCycle?: number
    currency?: CurrencyEnum
    discountAllowed?: number
    currQuantity?: number
    unitCost?: number
    availableQuantityType?: QuantityTypeEnum
    allocatedQuantity?: number
    reorderLevel?: number
    reorderQuantity?: number
    stockLocation?: number
    storageArea?: StorageAreaEnum
    stockType?: StockTypeEnum
    dailyUsageRate?: number
    minStockLimit?: number
    serialBarcode?: string
    regulatoryTrackingId?: string
    batchNumber?: string
    manufacturedDate?: Date
    associatedLitterId?: string
    expiryReminderAlert?: Date
    minimumShelfLifeTrigger?: Date
    taxPercent?: number
    markupPercent?: number
    costPerDose?: number
}

const InventoryPricingSchema = new Schema<InventoryPricingMongo>(
    {
        inventoryId: { type: String, required: true, unique: true },
        purchaseCostPerUnit: { type: Number },
        sellingPrice: { type: Number },
        usageCostPerCycle: { type: Number },
        currency: { type: Number },
        discountAllowed: { type: Number },
        currQuantity: { type: Number },
        unitCost: { type: Number },
        availableQuantityType: { type: Number },
        allocatedQuantity: { type: Number },
        reorderLevel: { type: Number },
        reorderQuantity: { type: Number },
        stockLocation: { type: Number },
        storageArea: { type: Number },
        stockType: { type: Number },
        dailyUsageRate: { type: Number },
        minStockLimit: { type: Number },
        serialBarcode: { type: String },
        regulatoryTrackingId: { type: String },
        batchNumber: { type: String },
        manufacturedDate: { type: Date },
        associatedLitterId: { type: String },
        expiryReminderAlert: { type: Date },
        minimumShelfLifeTrigger: { type: Date },
        taxPercent: { type: Number },
        markupPercent: { type: Number },
        costPerDose: { type: Number },
    },
    { timestamps: true },
)

InventoryPricingSchema.index({ inventoryId: 1 })

export type InventoryPricingDocument = HydratedDocument<InventoryPricingMongo>

const InventoryPricingModel = model<InventoryPricingMongo>('InventoryPricing', InventoryPricingSchema)

export default InventoryPricingModel
