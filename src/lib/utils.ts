import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function toPersianNumber(number: string | number): string {
  const persianNumbers = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  const num = String(number);
  const parts = num.split('.');
  const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '،');
  const decimalPart = parts[1] ? '.' + parts[1] : '';
  return (integerPart + decimalPart).replace(/[0-9]/g, (w) => persianNumbers[+w]);
}
