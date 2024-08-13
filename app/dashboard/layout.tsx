import SideNav from '@/app/ui/dashboard/sidenav';
import { NotificationProvider } from '@/app/ui/providers/notification';
import Notification from '@/app/ui/notification';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <NotificationProvider>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </div>
        <Notification />
      </NotificationProvider>
    </div>
  );
}
