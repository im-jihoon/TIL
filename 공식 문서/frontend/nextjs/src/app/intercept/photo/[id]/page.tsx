import Image from 'next/image';
import profile from './profile.jpg';

export default async function IdPage({ params }: PageProps<'/intercept/photo/[id]'>) {
  const { id } = await params;

  return (
    <div>
      IdPage: {id}
      <Image src={profile} alt="photo" width={300} height={300} placeholder="blur" />
    </div>
  );
}
