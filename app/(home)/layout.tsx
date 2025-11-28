import type React from "react";
import Navbar from "@/components/navbar/navbar";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="px-4 pt-18 pb-4">{children}</div>
      <Navbar />
    </>
  );
}
