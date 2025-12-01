import { Schema, model, HydratedDocument } from 'mongoose'
import {
    DepartmentEnum,
    IntendedUseEnum,
    SpeciesEnum,
    AnimalStageEnum,
    BreedingUseEnum,
    FormTypeEnum,
    DispenseTypeEnum,
    UnitEnum,
    TherapeuticsEnum,
    AdministrationRouteEnum,
    UsageTypeEnum,
    CoatTypeEnum,
    FragranceTypeEnum,
    SubCategoryEnum,
    RegulationType,
    Category,
} from '../utils/constants/enums';
import { CategoryEnumList } from 'aws-sdk/clients/ssm';

// Prepare numeric enum values for Mongoose schema validation
const SubCategoryEnumValues: number[] = Object.values(SubCategoryEnum).filter((v) => typeof v === 'number') as number[]

// Enums are represented as numbers in the DB to match your spec (int-backed enums)
export interface StorageCondition {
    type?: 'perfect' | 'range'
    low?: number
    high?: number
    temperatureRange?: string
}

export interface InventoryItemMongo {
    itemName: string
    category?: Category
    subCategory?: SubCategoryEnum
    itemType?: number
    department?: DepartmentEnum
    expiryDate?: Date
    description?: string
    isPrescriptionRequired?: boolean
    regulationType?: RegulationType
    storageCondition?: StorageCondition
    intendedUse?: IntendedUseEnum
    species?: SpeciesEnum
    animalStage?: AnimalStageEnum
    breedType?: number
    imageUrl?: string
    breedingUse?: BreedingUseEnum
    formType?: FormTypeEnum
    dispenseType?: DispenseTypeEnum
    quantityPerPack?: number
    usagePerService?: string
    unitType?: UnitEnum
    quantity?: number
    therapeuticClass?: TherapeuticsEnum
    strength?: string
    withdrawalPeriod?: string
    administrationRoute?: AdministrationRouteEnum
    usageType?: UsageTypeEnum
    litterOrBatchName?: string
    shelfLifeDays?: number
    isHeatOrCycleKitIncluded?: boolean
    coatType?: CoatTypeEnum
    fragranceType?: FragranceTypeEnum
    isAllergenFree?: boolean
    petSize?: number
    lastUpdatedAt?: Date
    lastUpdatedBy?: string
    vendorId?: string
    manufacturedDate?: Date
    ownerId?: string
    totalValue?: number
    status?: number
}

const StorageConditionSchema = new Schema<StorageCondition>(
    {
        type: { type: String },
        low: { type: Number },
        high: { type: Number },
        temperatureRange: { type: String },
    },
    { _id: false },
)

const InventoryItemSchema = new Schema<InventoryItemMongo>(
    {
        itemName: { type: String, required: true },
        category: { type: Number },
    subCategory: { type: Number, enum: SubCategoryEnumValues },
        itemType: { type: Number },
        department: { type: Number },
        expiryDate: { type: Date },
        description: { type: String },
        isPrescriptionRequired: { type: Boolean, default: false },
        regulationType: { type: Number },
        storageCondition: { type: StorageConditionSchema },
        intendedUse: { type: Number },
        species: { type: Number },
        animalStage: { type: Number },
        breedType: { type: Number },
        imageUrl: { type: String },
        breedingUse: { type: Number },
        formType: { type: Number },
        dispenseType: { type: Number },
        quantityPerPack: { type: Number },
        usagePerService: { type: String },
        unitType: { type: Number },
        quantity: { type: Number, default: 0 },
        therapeuticClass: { type: Number },
        strength: { type: String },
        withdrawalPeriod: { type: String },
        administrationRoute: { type: Number },
        usageType: { type: Number },
        litterOrBatchName: { type: String },
        shelfLifeDays: { type: Number },
        isHeatOrCycleKitIncluded: { type: Boolean },
        coatType: { type: Number },
        fragranceType: { type: Number },
        isAllergenFree: { type: Boolean },
        petSize: { type: Number },
        lastUpdatedAt: { type: Date },
        lastUpdatedBy: { type: String },
        vendorId: { type: String },
        manufacturedDate: { type: Date },
        ownerId: { type: String },
        totalValue: { type: Number },
        status: { type: Number },
    },
    { timestamps: true },
)

InventoryItemSchema.index({ itemName: 1, vendorId: 1 })

export type InventoryItemDocument = HydratedDocument<InventoryItemMongo>

const InventoryItemModel = model<InventoryItemMongo>('InventoryItem', InventoryItemSchema)

export default InventoryItemModel
