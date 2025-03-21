import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/theme.css';
import '@/app/globals.css';
import BaseLayout from '@/components/layout/BaseLayout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'José Alberto Pérez - Portafolio',
  description: 'Desarrollador Full Stack apasionado por crear soluciones innovadoras y escalables',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  );
}
