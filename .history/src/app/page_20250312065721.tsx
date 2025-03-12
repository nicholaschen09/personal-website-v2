import Balancer from "react-wrap-balancer"
import Image from "next/image"
import Link from "next/link"

import "@/app/globals.css"

export default function Home() {
	return (
		<>
			<section className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-40 lg:pb-20 dotted-paper-background">
				<h1 className="text-left text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1]">
					Nicholas Chen
				</h1>

				<p className="text-center text-base font-light text-foreground mt-4 md:mt-6 lg:mt-8">
					<Balancer>
						I&apos;m a software engineering intern at Ownr doing full stack web
						development, and a Systems Design Engineering student at the
						University of Waterloo. Previously, I&apos;ve helped create awesome
						things at RBC and Meta Hash Capital.
					</Balancer>
				</p>

				<nav className="flex items-center gap-4 py-4 mt-8 md:mt-10 lg:mt-12">
					<Link
						href="https://github.com/nicholaschen09"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Image src="/github.png" alt="GitHub" width={40} height={40} />
					</Link>
				</nav>
			</section>
		</>
	)
}
