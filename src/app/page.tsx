"use client";

import { useEffect } from 'react';
import { Dashboard } from "@/components/dashboard";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function Home() {
  useEffect(() => {
    console.log('🚀 App iniciando...');
    console.log('💡 Ambiente:', process.env.NODE_ENV);
    console.log('🌐 URL:', window.location.href);
  }, []);

  return (
    <TooltipProvider>
      <Dashboard />
    </TooltipProvider>
  );
}
