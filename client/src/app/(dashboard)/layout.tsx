'use client';
import Navbar from '@/components/Navbar'
import { SidebarProvider } from '@/components/ui/sidebar'
import Sidebar from "@/components/AppSidebar";
import { NAVBAR_HEIGHT } from '@/lib/contants'
import { useGetAuthUserQuery } from '@/state/api'
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const DashboardLayout = ({children}: {children: React.ReactNode}) => {
    const { data: authUser, isLoading: authLoading } = useGetAuthUserQuery();
    const router = useRouter();
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(true);  

    useEffect(() => {
        if(authUser) {
            const userRole = authUser.userRole.toLowerCase();
            if(
                (userRole === 'manager' && pathname.startsWith('/managers')) ||
                (userRole === 'renter' && pathname.startsWith('/tenants'))
            ) {
                router.push(
                    userRole === 'manager'
                    ? "managers/properties"
                    : "tenants/properties",
                    {scroll: false}
                );
            }else {
                setIsLoading(false);
            }
        }
    }, [authUser, pathname, router]);

    if(authLoading || isLoading) return <>Loading...</>
    if(!authUser?.userRole) return null;

  return (
    <SidebarProvider>
  <div className='min-h-screen w-full bg-primary-100'>
    <Navbar />
    <div 
      className="flex" 
      style={{ 
        marginTop: `${NAVBAR_HEIGHT}px`,
        minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`
      }}
    >
      <Sidebar userType={authUser.userRole.toLowerCase()} />
      <div className='flex-grow transition-all duration-300 ml-[--sidebar-width]'>
        {children}
      </div>
    </div>
  </div>
</SidebarProvider>
  )
}

export default DashboardLayout