// Centralized enums used across models
export enum DepartmentEnum {
  HOSPITAL = 0,
  BREEDER = 1,
  BOARDER = 2,
  GROOMER = 3,
}

export enum IntendedUseEnum {
  FEEDING = 0,
  FERTILITY_CARE = 1,
  CLEANING = 2,
  NURSING_SUPPORT = 3,
}

export enum SpeciesEnum {
  DOG = 0,
  CAT = 1,
  RABBIT = 2,
  HORSE = 3,
  ALL = 99,
}

export enum AnimalStageEnum {
  PUPPY = 0,
  ADULT = 1,
  STUD = 2,
  NURSING = 3,
  PREGNANT = 4,
}

export enum BreedingUseEnum {
  NUTRITION = 0,
  WHELPING = 1,
}

export enum SubCategoryEnum {
  ANTIBIOTIC = 0,
  ANTI_INFLAMMATORY = 1,
  DEWORMER = 2,
  PAIN_KILLER = 3,
  ANTI_FUNGAL = 4,
  ANTI_VIRAL = 5,
  BANDAGE = 6,
  GLOVES = 7,
  IV_LINE = 8,
  SYNRINGE = 9,
  VITAMINS = 10,
  PROBIOTICS = 11,
  MINERAL_MIX = 12,
  OTHER = 99,
}

export enum FormTypeEnum {
  TABLET = 0,
  CAPSULE = 1,
  OINTMENT = 1,
  POWDER = 2,
  LIQUID = 3,
  SOLUTION = 4,
  SPRAY = 5,
  WIPE = 6,
  TREAT = 7,
  FOOD_PACKET = 8,
}

export enum DispenseTypeEnum {
  POWDER = 0,
  TABLET = 1,
  LIQUID = 2,
}

export enum UnitEnum {
  KG = 0,
  ML = 1,
  PIECE = 2,
  PACK = 3,
}

export enum TherapeuticsEnum {
  ANTIBIOTIC = 0,
  ANALGESIC = 1,
  OTHER = 99,
}

export enum AdministrationRouteEnum {
  ORAL = 0,
  TOPICAL = 1,
  INJECTABLE = 2,
  RECTAL = 3,
  OPTHALMIC = 4,
  OTIC = 5,   
}

export enum UsageTypeEnum {
  INTERNAL = 0,
  EXTERNAL = 1,
}

export enum CoatTypeEnum {
  SHORT = 0,
  DOUBLE = 1,
}

export enum FragranceTypeEnum {
  FLORAL = 0,
  FRUITY = 1,
}

export enum CurrencyEnum {
  INR = 0,
  USD = 1,
}

export enum VendorTypeEnum {
  COMPANY = 0,
  USER = 1,
}

export enum PaymentTermsEnum {
  NET30 = 0,
  PREPAID = 1,
}

export enum QuantityTypeEnum {
  ON_HAND = 0,
}

export enum StorageAreaEnum {
  PHARMACY = 0,
  GROOMING_ROOM = 1,
  SURGERY = 2,
}

export enum StockTypeEnum {
  CENTRAL_STORE = 0,
  PHARMACY = 1,
}

export enum RegulationType {
   CONTROLLED = 0,
   NON_CONTROLLED = 1,
}

export enum Category{
   MEDICINE,
   CONSUMABLES,
   EQUIPMENT,
   SUPPLEMENT,
   DIAGNOSTIC_KIT,
   VACCINE,
   FOOD,
   CLEANING_SUPPLY
}

export enum BreedType{
  LABRADOR,
  BEAGLE,
  PERSIAN,
  SIAMESE,
  GERMAN_SHPERD,
  BULLDOG,
}