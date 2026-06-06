import { AppHeader } from "@/components/shell/AppHeader";
import { AppSidebar } from "@/components/shell/AppSidebar";

type AppShellProps = {
  children: React.ReactNode;
 
  title?: string;
};


export function AppShell({ children, title = "Dashboard" }: AppShellProps) {
  return (
    <div className="flex h-screen overflow-hidden bg-zinc-50 dark:bg-zinc-950">
      <AppSidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <AppHeader title={title} />

        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
}