import "../styles/globals.css";
import { Toaster } from "sonner";

export const metadata = {
  title: "BestSpaces",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Toaster richColors />
    </html>
  );
}
