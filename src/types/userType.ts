export interface User {
    userId?: string | null;
    emailAddress?: string | null;
    passwordHash?: string | null;
    fullName?:     string | null;
    phoneNumber?:  string | null;
    role?:         string | null;

}

export type DecodedToken = {
    jti: string
    Id: string
    RoleId: string
    Role: string
    exp: number
    iss: string
    aud: string
}



// export interface LoginUserAPIResponse { 
//     userID? : string | null;
//     emailAddress?: string| null;
//     fullName? : string | null;
// }
export type AuthUser = {
    id: number
    fullName: string
    email: string
    phone: string
    username: string
    roleId: number
    // profilePic: string
  }
export type GetCurrentUserAPIResponse = {
    message?: string | null;
    httpStatus?: string | null;
    timeStamp?: Date | null ;
    data?: AuthUser | null;
  }
export type LoginUserAPIResponse = {
    message: string
    httpStatus: string
    timeStamp: Date
    data: {
      accessToken: string
      refreshToken: string
    }
}
export type SignUpForm = {
    emailAddress: string
    passwordHash: string
    fullName: string
    phoneNumber: string
  }

export interface ListParamUser{
    pageNumber? : number;
    pageSize?   : number;
    searchTerms?: string[];
}

export interface ListParamsCreateUser {
    emailAddress?:  string | null;
    passwordHash?:  string | null;
    fullName?:      string | null;
    phoneNumber?:   string | null;
}