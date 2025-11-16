export default function AppLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="ko">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
