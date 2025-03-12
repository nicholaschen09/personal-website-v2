"use client"

import React from "react"
import { useTypewriter } from "react-simple-typewriter"

export default function Home() {
	const [text] = useTypewriter({
		words: [
			"I'm a software engineering intern at Ownr doing full stack web development, and a Systems Design Engineering student at the University of Waterloo. Previously, I've helped create awesome things at RBC and Meta Hash Capital."
		],
		loop: false,
		typeSpeed: 25
	})

	return (
		<section className="mx-auto flex max-w-[980px] flex-col gap-2 py-8 dotted-paper-background">
			<h1 className="text-left text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] text-[hsl(var(--foreground))] mt-20 ml-6">
				Nicholas Chen
			</h1>

			<div className="text-left text-[16.8px] font-light text-[hsl(var(--foreground))] mt-4 md:mt-6 lg:mt-8 ml-6 max-w-[93%]">
				{text}
			</div>

			<nav className="flex justify-end items-center gap-4 py-4 mt-8 md:mt-10 lg:mt-12 mr-10">
				<a
					href="https://github.com/nicholaschen09"
					target="_blank"
					rel="noopener noreferrer"
					className="text-[hsl(var(--foreground))] text-lg fixed "
					style={{ position: "fixed", bottom: "450px", right: "300px" }}
				>
					<img src="/github.png" alt="GitHub" width={32} height={32} />
				</a>
			</nav>
		</section>
	)
}
