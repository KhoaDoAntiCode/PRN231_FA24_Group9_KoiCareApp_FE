import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
// import { jwtDecode } from 'jwt-decode'
// import { DecodedToken } from '@/types/userType'
// import { TOKEN_KEY } from '@/lib/axios/axios'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
// export const hasAuthority = (authority: string) => {
//   const token = localStorage.getItem(TOKEN_KEY)
//   if (!token) return false
//   const decodedToken: DecodedToken = jwtDecode(token)
//   return decodedToken.Role === authority
// }

export function getCookie(name: string): string | undefined {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) {
    const part = parts.pop()
    if (part) {
      return part.split(";").shift()
    }
  }
  return undefined
}