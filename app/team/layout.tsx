export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-amber-100">Hi Layout</h1>
      {children}
    </div>
  );
}
