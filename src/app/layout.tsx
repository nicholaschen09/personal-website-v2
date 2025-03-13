import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { Providers } from "@/providers"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { Header } from "@/shared"
import { siteConfig } from "@/config"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: siteConfig.title,
	description: siteConfig.description
}

export default function RootLayout({
	children
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en" className="dark">
			<body className={`${inter.className} dotted-paper-background`}>
				<Providers>
					<Header />
					<main className="flex flex-col min-h-screen mb-100">{children}</main>
					<SpeedInsights />
				</Providers>
			</body>
		</html>
	)
}
