"use client"

import React from "react"
import { useTypewriter } from "react-simple-typewriter"

export default function Home() {
	const [text] = useTypewriter({
		words: [
			"I am a software engineering intern at Ownr doing full stack web development, and a Systems Design Engineering student at the University of Waterloo. Previously, I've helped create awesome things at RBC and Meta Hash Capital."
		],
		loop: false,
		typeSpeed: 25
	})
	return (
		<section className="mx-auto flex max-w-[980px] flex-col gap-2 py-8 dotted-paper-background">
			<h1 className="text-left text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] text-[hsl(var(--foreground))] mt-40 ml-40">
				Nicholas Chen
			</h1>

			<div className="text-left text-[16.8px] font-light text-[hsl(var(--foreground))] mt-12 md:mt-14 lg:mt-16 max-w-[100%] ml-40">
				{text}
			</div>

			<nav className="flex justify-start items-center gap-4 py-4 mt-8 md:mt-10 lg:mt-12 ml-40">
				<a
					href="https://github.com/nicholaschen09"
					target="_blank"
					rel="noopener noreferrer"
					className="mr-2"
				>
					<img src="/github.png" alt="GitHub" width={32} height={32} />
				</a>
				<a
					href="https://www.linkedin.com/in/nicholas-chen-85886726a/"
					target="_blank"
					rel="noopener noreferrer"
					className=""
				>
					<img src="/linkedin.png" alt="LinkedIn" width={40} height={42} />
				</a>
			</nav>
		</section>
	)
}
