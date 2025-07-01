'use client';

import dynamic from 'next/dynamic';
import { Skeleton } from '@/components/ui/skeleton';

const Animated3dLogo = dynamic(
  () => import('@/components/shared/animated-3d-logo'),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <Skeleton className="w-64 h-64 rounded-full" />
      </div>
    ),
  }
);

export function ClientOnly3dLogo() {
  return <Animated3dLogo />;
}
