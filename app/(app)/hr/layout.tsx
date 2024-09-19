"use client";
import Sidebar from "../../components/layout/sidebar";
import { MantineProvider, AppShell, Text } from "@mantine/core";

export default function RootLayout({ children }: { children: any }) {
  return (
    <MantineProvider defaultColorScheme="dark">
      <AppShell
      className='bg-darkBackground'
        navbar={{
          width: 250,
          breakpoint: 'sm',
        }}>
        <AppShell.Navbar>
          <Sidebar />          
        </AppShell.Navbar>
        <AppShell.Main className='bg-darkBackground' >
          {children}
        </AppShell.Main>
      </AppShell>
    </MantineProvider>
  );
}
