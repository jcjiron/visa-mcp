export interface AccountResponse {
    vuser: Vuser;
    responseStatus: any;
}

export interface Vuser {
    paymentInstrument: PaymentInstrument[];
    addresses: Address[];
    firstName: string;
    middleName: null;
    suffixName: null;
    lastName: string;
    countryCode: string;
    languageCode: string;
    defaultTimezone: string;
    role: null;
    defaultShippingAddressId: null;
    defaultPaymentInstrumentId: string;
    userStatusReasonCode: string;
    streamLineEnrollment: null;
    enrollmentIndicator: null;
    userName: string;
    phoneNumber: null;
    createdDate: number;
    deactivatedDate: null;
    id: string;
    emailAddress: string;
    isActiveEmail: null;
    taxId: null;
    staySignedInEnabled: boolean;
}

export interface Address {
    id: string;
    accepted: boolean;
    verificationStatus: string;
    nickName: null;
    personName: string;
    line1: string;
    line2: string;
    line3: string;
    city: string;
    stateProvinceCode: string;
    postalCode: string;
    countryCode: string;
    streetName: string;
    streetNumber: string;
    additionalLocation: null;
    neighborhood: string;
    county: string;
    pointOfReference: string;
    phone: string;
    phoneNumberCountryCode: string;
    phoneNumberCountryAlpha2Code: string;
    addressVerificationStatusOverride: null;
    disableNotification: null;
    addressLine1raw: string;
    default: null;
}

export interface PaymentInstrument {
    id: string;
    accepted: boolean;
    lastFourDigits: string;
    binSixDigits: null;
    accountNumber: null;
    paymentType: PaymentType;
    billingAddress: null;
    billingAddressId: string;
    verificationStatus: string;
    expired: boolean;
    cardArts: CardArts;
    avsResponseCode: null;
    issuerBid: string;
    domesticOnly: boolean;
    combinationCard: string;
    countryOfIssuance: string;
    comboCardSet: boolean;
    accountType: string;
    issuerName: null;
    isBiometricsEnabled: boolean;
    isIssuerManaged: boolean;
    fidoRegisteredDevices: null;
    nickName: null;
    nameOnCard: string;
    expirationDate: ExpirationDate;
    cvv: null;
    prepaidIdentifier: null;
    productTypeCode: string;
    sequencenumber: null;
    nfcIndicator: null;
    cardVerificationStatus: string;
    cvv2VerificationStatus: string;
    lastVerificationDate: null;
    verificationServiceProvider: null;
    federatedPaymentInstrumentId: null;
    cardArtWidth: null;
    cardArtHeight: null;
    cardArtFileName: null;
    active: boolean;
    vPanEnrollmentId: string;
    linkedTimestamp: null;
    lastUsed: boolean;
    default: boolean;
}

export interface CardArts {
    cardArt: CardArt[];
}

export interface CardArt {
    imageUrl: null;
    baseImageFileName: string;
    height: number;
    width: number;
    orientation: null;
    cardBrand: null;
}

export interface ExpirationDate {
    month: string;
    year: string;
}

export interface PaymentType {
    cardBrand: string;
    cardType: string;
}
