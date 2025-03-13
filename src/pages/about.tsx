import React from "react"
import Balancer from "react-wrap-balancer"
import Image from "next/image"
import Link from "next/link"

import { Header } from "@/shared"

import "@/app/globals.css"

const About = () => {
	return (
		<div className="dark min-h-screen bg-[hsl(var(--background))]">
			<div className="dotted-paper-background min-h-screen">
				<Header />
				<section className="mx-auto flex max-w-[1200px] flex-col items-start gap-2 py-8 md:py-12 md:pb-8 lg:py-40 lg:pb-20">
					<h1 className="text-left text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:leading-[1.1] text-[hsl(var(--foreground))] ml-10 max-w-[150%]">
						Hi I&apos;m Nicholas!
					</h1>
					<p className="text-left text-[16.8px] font-light text-[hsl(var(--foreground))] mt-4 md:mt-6 lg:mt-8 mr-10 max-w-[50%] ml-10">
						<Balancer>
							I am a Systems Design Engineering student at the University of
							Waterloo who loves creating cool things. I have a passion for
							technology and innovation, and I enjoy working on projects that
							make a difference. In my free time, I like to go to the gym, read
							books, and spend time with friends and family.
						</Balancer>
					</p>
					<nav className="flex items-center gap-4 py-4 mt-8 md:mt-10 lg:mt-12 ml-10 mb-20">
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
					<div className="relative w-full flex justify-end items-start mt-[-320px] mr-5000">
						<div className="absolute" style={{ right: "60px" }}>
							<Image
								src="/me.png" // Replace with your image path
								alt="Your Image"
								width={400} // Adjust the width as needed
								height={300} // Adjust the height as needed
								className="rounded-xl"
							/>
							<p className="text-left text-[14px] font-light text-[hsl(var(--foreground))] mt-2">
								Throwback to a picture of me in grade twelve reminiscing about
								<br /> everything on the last day of high school
							</p>
						</div>
					</div>
				</section>
				<section className="mx-auto flex max-w-[1200px] flex-col items-start gap-2 py-8 md:py-12 md:pb-8 lg:py-40 lg:pb-20 mb-40">
					<h2 className="text-left text-2xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1] text-[hsl(var(--foreground))] ml-10 max-w-[150%]">
						Everything I've Done
					</h2>
					<ul className="list-disc ml-10 text-[16.8px] font-light text-[hsl(var(--foreground))] mt-4 md:mt-6 lg:mt-8">
						<li>Worked as a software engineering intern at Ownr</li>
						<li>
							Studied Systems Design Engineering at the University of Waterloo
						</li>
						<li>Helped create awesome things at RBC and Meta Hash Capital</li>
						<li>Explored new technologies and innovations</li>
						<li>Went to the gym regularly</li>
						<li>Read numerous books</li>
						<li>Spent quality time with friends and family</li>
					</ul>
				</section>
			</div>
		</div>
	)
}

export default About
