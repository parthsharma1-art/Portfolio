import type { Metadata } from 'next'
import './globals.css'
import ScrollUI from './components/ScrollUI'

export const metadata: Metadata = {
  title: 'Parth Sharma | Java Backend Developer',
  description:
    'Java Backend Developer specializing in secure REST APIs, Spring Boot microservices, Redis caching, MongoDB, and high-concurrency systems.',
  keywords: [
    'Parth Sharma',
    'Java Backend Developer',
    'Spring Boot',
    'Java 21',
    'REST APIs',
    'Redis',
    'MongoDB',
    'Backend Engineer',
    'Noida',
    'Software Engineer',
  ],
  authors: [{ name: 'Parth Sharma', url: 'https://github.com/parthsharma1-art' }],
  creator: 'Parth Sharma',
  openGraph: {
    title: 'Parth Sharma | Java Backend Developer',
    description:
      'Java Backend Developer specializing in secure REST APIs, Spring Boot microservices, Redis caching, and MongoDB.',
    url: 'https://github.com/parthsharma1-art',
    siteName: 'Parth Sharma Portfolio',
    type: 'website',
  },
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#07080c] text-[#f1f5f9] selection:bg-accent/25 selection:text-accent font-sans overflow-x-hidden">
        <ScrollUI />
        {children}
      </body>
    </html>
  )
}
