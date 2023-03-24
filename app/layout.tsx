import './globals.css'

export const metadata = {
  title: 'Bar Restaurante Centro Cívico de Allo',
  description: 'Bar Restaurante Centro Cívico de Allo',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
