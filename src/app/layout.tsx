import "../../assets/stylesheets/globals.css";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";

import Sidebar from "@/components/Sidebar";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={quicksand.className + `flex `}>
        <div className='mx-auto lg:w-[1024px] flex min-h-screen lg:gap-5'>
          <div className='w-3/12 border'>
            <Sidebar />
          </div>
          <div className='w-9/12 border'>{children}</div>
        </div>
      </body>
    </html>
  );
}
