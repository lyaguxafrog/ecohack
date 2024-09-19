'use client';

import { useEffect } from 'react';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { getEvents } from '@/store/api-actions';
import { useAppDispatch } from '@/types';

export default function SessionLayout({ children }: { children: React.ReactNode }) {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEvents()).then((data) => {
      console.log(data);
    });
  }, []);

  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">{children}</main>
      <Footer />
    </div>
  );
}
