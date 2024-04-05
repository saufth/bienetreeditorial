import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { siteConfig } from '@/config/site'

export function cn (...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugify (str: string) {
  return str
    .toLowerCase()
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
}

export function absoluteUrl (path: string = '/') {
  return `${siteConfig.url}${path}`
}

export const capitalize = (text: string): string => (
  `${text.charAt(0).toUpperCase()}${text.slice(1).toLowerCase()}`
)

export function formatPhoneNumber (phoneNumber: string) {
  const cleaned = ('' + phoneNumber).replace(/\D/g, '')
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
  return match && '(' + match[1] + ') ' + match[2] + '-' + match[3]
}

export function whatsappUrl (phoneNumber: string) {
  return `https://wa.me/${phoneNumber}`
}

export function calculateYears (dateA: Date, dateB: Date) {
  let years = new Date(dateB).getFullYear() - new Date(dateA).getFullYear()
  let month = new Date(dateB).getMonth() - new Date(dateA).getMonth()
  const dateDiff = new Date(dateB).getDay() - new Date(dateA).getDay()
  if (dateDiff < 0) month -= 1
  if (month < 0) years -= 1
  return years
}
