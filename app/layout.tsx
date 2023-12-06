import "@/styles/tailwind.css";
import { manrope } from "@/fonts/font";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arda Eker - <***> Solution",
  description:
    "Hello, I'm Arda Eker. This website showcases my solution to the <***> challenge on Frontend Mentor.",
  authors: [{ name: "Arda Eker", url: "https://www.ardaeker.com" }],
  // metadataBase: new URL("<***>"),
  // openGraph: {
  //   type: "website",
  //   url: "/",
  //   title: "Arda Eker - <***> Solution",
  //   description:
  //     "Hello, I'm Arda Eker. This website showcases my solution to the <***> challenge on Frontend Mentor.",
  //   images: [
  //     {
  //       url: "/preview.png",
  //     },
  //   ],
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>{children}</body>
    </html>
  );
}
