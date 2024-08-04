export const GenderOptions = ["male", "female"];

export const PatientFormDefaultValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  birthDate: new Date(Date.now()),
  gender: "male" as Gender,
  address: "",
  occupation: "",
  emergencyContactName: "",
  emergencyContactNumber: "",
  primaryPhysician: "",
  insuranceProvider: "",
  insurancePolicyNumber: "",
  allergies: "",
  currentMedication: "",
  familyMedicalHistory: "",
  pastMedicalHistory: "",
  identificationType: "Birth Certificate",
  identificationNumber: "",
  identificationDocument: [],
  treatmentConsent: false,
  disclosureConsent: false,
  privacyConsent: false,
};

export const IdentificationTypes = [
  "گواهی تولد",
  "گواهینامه رانندگی",
  "کارت شناسایی نظامی",
  "کارت/بیمه نامه پزشکی",
  "کارت شناسایی ملی",
  "گذرنامه",
  "کارت مقیم (گرین کارت)",
  "کارت امنیت اجتماعی",
  "کارت شناسایی دولتی",
  "کارت دانشجویی",
  "کارت شناسایی رای دهنده",
];

export const Doctors = [
  {
    image: "/assets/images/dr-green.png",
    name: "خلیل نجفی",
  },
  {
    image: "/assets/images/dr-cameron.png",
    name: "لیلا کورکی",
  },
  {
    image: "/assets/images/dr-livingston.png",
    name: "احمد برزگر",
  },
  {
    image: "/assets/images/dr-peter.png",
    name: "احمد ایرانی",
  },
  {
    image: "/assets/images/dr-powell.png",
    name: "زهرا مینایی",
  },
  {
    image: "/assets/images/dr-remirez.png",
    name: "علی فروتن",
  },
  {
    image: "/assets/images/dr-lee.png",
    name: "اسماعیل عادلی نسب",
  },
  {
    image: "/assets/images/dr-cruz.png",
    name: "ارشیا مولوی",
  },
  {
    image: "/assets/images/dr-sharma.png",
    name: "علیرضا اسفندیاری",
  },
];

export const StatusIcon = {
  scheduled: "/assets/icons/check.svg",
  pending: "/assets/icons/pending.svg",
  cancelled: "/assets/icons/cancelled.svg",
};
