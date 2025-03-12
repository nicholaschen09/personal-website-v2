import Link from "next/link"

import { Nav } from "@/shared"
import { Brand } from "@/ui"

import "@/app/globals.css"

export const Header = () => {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 text-white text-center">
			<div className="container h-14 flex max-w-screen-lg items-center justify-between">
				<div className="flex gap-8 lg:gap-10 items-center">
					<Brand />
					<Nav />
				</div>
				<nav>
					<div className="flex gap-8 lg:gap-10 items-center">
						<Link href="/about" className="header-link text-white text-lg">
							about
						</Link>
						<a
							href="/resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="header-link text-white text-lg"
						>
							resume
						</a>
					</div>
				</nav>
			</div>
		</header>
	)
}
