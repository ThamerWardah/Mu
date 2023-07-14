import './globals.css';
import HotToasterContext from '@/app/context/ToasterContext'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='h-full bg-gray-100'>
        <HotToasterContext/>
        {children}</body>
    </html>
  )
}
