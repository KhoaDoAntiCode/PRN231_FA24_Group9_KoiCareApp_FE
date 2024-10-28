export enum Role {
    Administrator = 0, 
    User = 1,
    Staff =2
}

export enum AdoptionStatus {
    Available       = 0,// The pet is available for adoption.
    Pending         = 1,// The pet's adoption is in progress (e.g., someone has shown interest but hasn't finalized).
    Adopted         = 2,// The pet has been adopted.
    NotAvailable    = 3,// The pet is currently not available for adoption (e.g., medical reasons).
    Hold            = 4,// The pet is temporarily on hold (e.g., pending further assessment).
    Returned        = 5// The pet was adopted but then returned to the shelter.
}

export enum EventStatus {
    Open  =0,
    Full  =1,
    Close =2
}

export enum EventType {
    Racing      = 0,
    Festival    = 1,
    Meeting     = 2
}

export enum VaccineStatus {
    Success = 0,
    Injected = 1
}
