import type { Metadata } from 'next';
import { Suspense } from 'react';
import StyledComponentsRegistry from '@/lib/registry';
import COLORS from '@/styles/colors';
import { Sans } from '../styles/fonts';
import '../styles/global.css';
import { AuthContextProvider } from '@/utils/AuthProvider';

// site metadata - what shows up on embeds
export const metadata: Metadata = {
  title: 'Bread & Roses Presents',
  description: 'Created by Blueprint',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Sans.className} style={{ background: COLORS.bread2 }}>
        <Suspense>
        <StyledComponentsRegistry>
          <AuthContextProvider>{children}</AuthContextProvider>
        </StyledComponentsRegistry>
        </Suspense>
      </body>
    </html>
  );
}
