'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import profile from './profile.jpg';

export default function IdPage({}: PageProps<'/intercept/photo/[id]'>) {
  const router = useRouter();

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div>
        <Image src={profile} alt="photo" width={300} height={300} placeholder="blur" />
        <div>Intercepting Modal</div>
        <button onClick={() => router.back()}>Back</button>
      </div>
    </div>
  );
}
