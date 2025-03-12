import Balancer from "react-wrap-balancer"
import Image from "next/image"
import Link from "next/link"

import "@/app/globals.css"

export default function Home() {
	return (
		<>
			<section className="mx-auto flex max-w-[980px] flex-col gap-2 py-8 md:py-12 md:pb-8 lg:py-40 lg:pb-20 dotted-paper-background">
				<h1 className="text-left text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] text-[hsl(var(--foreground))] ml-10">
					Nicholas Chen
				</h1>

				<p className="text-center text-[16.8px] font-light text-[hsl(var(--foreground))] mt-4 md:mt-6 lg:mt-8">
					<Balancer>
						I&apos;m a software engineering intern at Ownr doing full stack web
						development, and a Systems Design Engineering student at the
						University of Waterloo. Previously, I&apos;ve helped create awesome
						things at RBC and Meta Hash Capital.
					</Balancer>
				</p>

				<nav className="flex justify-end items-center gap-4 py-4 mt-8 md:mt-10 lg:mt-12">
					<Link
						href="https://github.com/nicholaschen09"
						target="_blank"
						rel="noopener noreferrer"
						className="text-[hsl(var(--foreground))] text-lg"
					>
						<img src="/github.png" alt="GitHub" className="h-6 w-6" />
					</Link>
				</nav>
			</section>
		</>
	)
}
