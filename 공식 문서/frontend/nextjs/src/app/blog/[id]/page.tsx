export default async function BlogPage({ params }: PageProps<'/blog/[id]'>) {
  const { id } = await params;

  return <div>BlogPage: {id}</div>;
}
