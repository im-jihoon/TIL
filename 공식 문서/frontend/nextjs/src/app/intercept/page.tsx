import Link from 'next/link';

export default function InterceptPage({}: PageProps<'/'>) {
  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <Link href="/intercept/photo/1">Photo 1</Link>
      <Link href="/intercept/photo/2">Photo 2</Link>
      <Link href="/intercept/photo/3">Photo 3</Link>
    </div>
  );
}
