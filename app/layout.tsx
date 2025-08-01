import './globals.css'
import { ReactNode } from 'react'

export const metadata = {
  title: 'OptiBot Dashboard',
  description: 'AI-powered task management system',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
