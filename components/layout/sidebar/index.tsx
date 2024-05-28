'use client';

import { SidebarContainer } from "@/components/layout/sidebar/container/sidebar.container";
import { useGetUser } from '@/components/page-modules/auth/hooks/get-user.hook';

export function Sidebar() {
  useGetUser();

  return <SidebarContainer />;
};
