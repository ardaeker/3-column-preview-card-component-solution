import "@/styles/tailwind.css";
import { bigShoulderDisplay, lexendDeca } from "@/fonts/font";

import type { Metadata } from "next";

import openGraphImage from "@/public/previews/desktop-preview.png";

export const metadata: Metadata = {
  title: "Arda Eker - 3 Column Preview Card Component Solution Solution",
  description:
    "Hello, I'm Arda Eker. This website showcases my solution to the 3-column preview card component challenge on Frontend Mentor.",
  authors: [{ name: "Arda Eker", url: "https://www.ardaeker.com" }],
  metadataBase: new URL(
    "https://ardaeker-3-column-preview-card-component-solution.vercel.app",
  ),
  openGraph: {
    type: "website",
    url: "/",
    title: "Arda Eker - 3 Column Preview Card Component Solution",
    description:
      "Hello, I'm Arda Eker. This website showcases my solution to the 3-column preview card component challenge on Frontend Mentor.",
    images: [
      {
        url: openGraphImage.src,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${bigShoulderDisplay.variable} ${lexendDeca.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
