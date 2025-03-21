'use client';

import { ReactNode } from 'react';
import Navbar from './Navbar';

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className="min-h-screen bg-[var(--color-bg-primary)]">
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  );
};

export default BaseLayout;
