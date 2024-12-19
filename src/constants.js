export const DB_NAME = "alnikah";

export const THREAD_COUNT = 4;
export const UserRolesEnum = {
  ADMIN: "ADMIN",
  USER: "USER",
};

export const AvailableUserRoles = Object.values(UserRolesEnum);

export const ContactPrivateSettingEnum = {
  "Show to all": 1,
  "Hide from all": 2,
  "Show to members I express interest in": 3,
};

export const ContactPrivateSetting = Object.values(ContactPrivateSettingEnum);

export const GenderEnum = {
  Male: 1,
  Female: 2,
  "Non-binary": 3,
  Other: 4,
};

export const Gender = Object.values(GenderEnum);

export const MaritalStatusEnum = {
  "Never Married": 1,
  "Awaiting Divorce": 2,
  Divorced: 3,
  Widowed: 4,
  Annulled: 5,
  Married: 6,
};

export const MaritalStatus = Object.values(MaritalStatusEnum);

export const HeightEnum = {
  "4' 2\" (1.28 mts)": 1,
  "4' 8\" (1.42 mts)": 2,
  "5' 2\" (1.58 mts)": 3,
  "5' 6\" (1.68 mts)": 4,
  "5' 10\" (1.78 mts)": 5,
  "6' 2\" (1.88 mts)": 6,
  "6' 6\" (1.98 mts)": 7,
  "6' 10\" (2.08 mts)": 8,
};

export const Height = Object.values(HeightEnum);

export const AnnualEncomeEnum = {
  "No Income": 1,
  "Rs. 0 - 1 Lakh": 2,
  "Rs. 1 - 2 Lakh": 3,
  "Rs. 2 - 3 Lakh": 4,
  "Rs. 3 - 4 Lakh": 5,
  "Rs. 4 - 5 Lakh": 6,
  "Rs. 5 - 7.5 Lakh": 7,
  "Rs. 7.5 - 10 Lakh": 8,
};

export const AnnualEncome = Object.values(AnnualEncomeEnum);

export const USER_TEMPORARY_TOKEN_EXPIRY = 20 * 60 * 1000; // 20 minutes

/**
 * @type {{ GOOGLE: "GOOGLE"; GITHUB: "GITHUB"; EMAIL_PASSWORD: "EMAIL_PASSWORD"} as const}
 */
export const UserLoginType = {
  GOOGLE: "GOOGLE",
  GITHUB: "GITHUB",
  EMAIL_PASSWORD: "EMAIL_PASSWORD",
};

export const AvailableSocialLogins = Object.values(UserLoginType);

export const CreatedForEnum = {
  Self: "Self",
  Son: "Son",
  Daughter: "Daughter",
  Borther: "Borther",
  Sister: "Sister",
  Relative: "Relative/Friend",
  marriageBureau: "Client-Marriage Bureau",
};

export const CreatedFor = Object.values(CreatedForEnum);

export const DisabilityEnum = {
  None: 1,
  "Physically disabled from birth": 2,
  "Physically disabled due to accident": 3,
  "Mentally disabled from birth": 4,
  "Mentally disabled due to accident": 5,
};

export const Disability = Object.values(DisabilityEnum);

export const ThalassemiaEnum = {
  Major: 1,
  Minor: 2,
  No: 3,
};

export const Thalassemia = Object.values(ThalassemiaEnum);

export const HivEnum = {
  Yes: 1,
  No: 2,
};

export const Hiv = Object.values(HivEnum);

export const EmployedInEnum = {
  "Private Sector": 1,
  "Government/Public Sector": 2,
  "Civil Services": 3,
  Defence: 4,
  "Business/ Self Employed": 5,
  "Not Working": 6,
};

export const EmployedIn = Object.values(EmployedInEnum);

export const InterestedInEnum = {
  Yes: 1,
  No: 2,
  Undecided: 3,
};

export const InterestedIn = Object.values(InterestedInEnum);

export const FamilyStatusInEnum = {
  Yes: 1,
  No: 2,
  Undecided: 3,
};

export const FamilyStatusIn = Object.values(FamilyStatusInEnum);

export const FamilyTypeEnum = {
  Yes: 1,
  No: 2,
  Undecided: 3,
};

export const FamilyType = Object.values(FamilyTypeEnum);

export const FamilyValuesEnum = {
  Yes: 1,
  No: 2,
  Undecided: 3,
};

export const FamilyValues = Object.values(FamilyValuesEnum);

export const LivingWithParentsEnum = {
  Yes: 1,
  No: 2,
  Undecided: 3,
};

export const LivingWithParents = Object.values(LivingWithParentsEnum);

export const FamityIncomeEnum = {
  "No Income": 1,
  "Rs. 0 - 1 Lakh": 2,
  "Rs. 1 - 2 Lakh": 3,
  "Rs. 2 - 3 Lakh": 4,
  "Rs. 3 - 4 Lakh": 5,
  "Rs. 4 - 5 Lakh": 6,
  "Rs. 5 - 7.5 Lakh": 7,
  "Rs. 7.5 - 10 Lakh": 8,
};

export const FamityIncome = Object.values(FamityIncomeEnum);

export const FatherOccupationEnum = {
  "No Income": 1,
  "Rs. 0 - 1 Lakh": 2,
  "Rs. 1 - 2 Lakh": 3,
  "Rs. 2 - 3 Lakh": 4,
  "Rs. 3 - 4 Lakh": 5,
  "Rs. 4 - 5 Lakh": 6,
  "Rs. 5 - 7.5 Lakh": 7,
  "Rs. 7.5 - 10 Lakh": 8,
};

export const FatherOccupation = Object.values(FatherOccupationEnum);

export const NoOfBrothersEnum = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  "3+": "3+",
};

export const NoOfBrothers = Object.values(NoOfBrothersEnum);

export const NamazEnum = {
  "5 times": "5 times",
  "Only jummah": "Only jummah",
  "Not regular": "Not regular",
  "During ramadan": "During ramadan",
  None: "None",
};

export const Namaz = Object.values(NamazEnum);

export const ZakatEnum = {
  Yes: "Yes",
  No: "No",
};

export const Zakat = Object.values(ZakatEnum);

export const FastingEnum = {
  "Ramadan & Sunnah": "Ramadan & Sunnah",
  Ramadan: "Ramadan",
  None: "None",
};

export const Fasting = Object.values(FastingEnum);

export const UmarahHajjEnum = {
  "Umrah/Hajj": "Umrah/Hajj",
  Umrah: "Umrah",
  None: "None",
};

export const UmarahHajj = Object.values(UmarahHajjEnum);

export const ReadQuranEnum = {
  Daily: "Daily",
  Occasionally: "Occasionally",
  "On Fridays": "On Fridays",
  None: "None",
};

export const ReadQuran = Object.values(ReadQuranEnum);
