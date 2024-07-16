import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Poppins, Roboto } from "next/font/google";
import { Inter as FontSans } from "next/font/google"

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: "100"
});



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main lang="en" >
        {children}
    </main>
  );
}
