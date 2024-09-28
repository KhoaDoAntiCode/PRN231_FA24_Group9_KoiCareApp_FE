import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { jwtDecode } from 'jwt-decode'
import { DecodedToken } from '@/types/userType'
import { TOKEN_KEY } from '@/lib/axios/axios'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const hasAuthority = (authority: string) => {
  const token = localStorage.getItem(TOKEN_KEY)
  if (!token) return false
  const decodedToken: DecodedToken = jwtDecode(token)
  return decodedToken.Role === authority
}