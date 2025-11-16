export default function InterceptLayout({ children, modal }: LayoutProps<'/intercept'>) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}
