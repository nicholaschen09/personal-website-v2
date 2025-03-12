import { Nav } from "@/shared"
import { Brand } from "@/ui"

import "@/app/globals.css"

export const Header = () => {
	return (
		<header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container h-14 flex max-w-screen-lg items-center justify-between">
				<div className="flex gap-8 lg:gap-10 items-center">
					<Brand />
					<Nav />
				</div>

				<div className="flex gap-8 lg:gap-10 items-center">
					<a href="/about" className="header-link">
						about
					</a>
					<a
						href="/resume1.pdf"
						target="_blank"
						rel="noopener noreferrer"
						className="header-link"
					>
						resume
					</a>
				</div>
			</div>
		</header>
	)
}
