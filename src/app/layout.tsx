import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Academia de Artes Marciais - MMA, Muay Thai, Jiu-Jitsu',
  description: 'Treinamento profissional de MMA, Muay Thai, Jiu-Jitsu, Boxe e Defesa Pessoal para todos os níveis. Transforme seu corpo, fortaleça sua mente, domine sua arte.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
