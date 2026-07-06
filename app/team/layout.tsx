export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-green-500 font-sans dark:bg-red">
      {children}
    </div>
  );
}
