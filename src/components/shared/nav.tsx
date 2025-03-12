"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import clsx from "clsx"

import { navConfig } from "@/config/nav"
import "@/app/globals.css"

export const Nav = () => {
	const pathname = usePathname()

	if (!navConfig) return null

	return (
		<nav className="flex gap-8 lg:gap-10 items-center">
			{navConfig?.map(({ title, href = "/" }: any, index) => (
				<Link
					key={index}
					href={href}
					className={clsx(
						"nav-link",
						pathname === href ? "text-foreground" : "text-foreground/60"
					)}
				>
					{title}
				</Link>
			))}
		</nav>
	)
}
