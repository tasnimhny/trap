import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Trap",
  description: "Click the portal to enter",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
