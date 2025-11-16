import Link from 'next/link';

// 슬롯이 자동으로 전달됨
export default function ParallelLayout({ children, sidebar, feed }: LayoutProps<'/parallel'>) {
  return (
    <>
      <div style={{ display: 'flex', gap: '10px' }}>
        {/* Soft Navigation: 같은 레이아웃 아래에서 변하는 슬롯만 부분적으로 변경 */}
        {/* Hard Navigation: 브라우저 새로고침 및 주소 직접 입력 시, URL에 맞는 페이지(또는 default.tsx)가 있으면 보여주고, 없으면 404 에러 */}
        <Link href="/parallel">Feed</Link>
        <Link href="/parallel/setting">Setting</Link>
      </div>
      <div>
        {sidebar}
        {feed}
        {children}
      </div>
    </>
  );
}
