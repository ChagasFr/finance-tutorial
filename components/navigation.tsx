"use client"

import { useState } from "react";
import { useMedia } from "react-use"
import { Menu } from "lucide-react";
import { usePathname, useRouter } from "next/navigation"

import NavButton from "./nav-button"

import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";

const routes = [
    {
        href: "/",
        label: "Overview",
    },
    {
        href: "transactions",
        label: "Transactions",
    },
    {
        href: "/accounts",
        label: "Accounts",
    },
    {
        href: "/categories",
        label: "Categories",
    },
    {
        href: "/settings",
        label: "Settings",
    },
]

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false)

    const router = useRouter();
    const pathname = usePathname();
    const isMobile = useMedia("(max-width: 240px)", false);

    const onClick = (href: string) => {
        router.push(href);
        setIsOpen(false)
    };

    if (isMobile) {
        return (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger>
                    <Button
                        variant="outline"
                        size="sm"
                        className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition"
                    >
                        <Menu className="size-4" />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="pc-2">
                    <nav className="flex flex-col gap-y-2 pt-6">
                        {routes.map((route) => (
                            <Button
                                key={route.href}
                                variant={route.href === pathname ? "secondary" : "ghost"}
                                onClick={() => onClick(route.href)}
                                className="w-full justify-start"
                            >
                                {route.label}
                            </Button>
                        ))}
                    </nav>
                </SheetContent>
            </Sheet>
        )

    }

    return (
        <nav className="hidden lg:flex items-center gap-x-2 overflow-auto">
            {routes.map((route) => (
                <NavButton
                    key={route.href}
                    href={route.href}
                    label={route.label}
                    isActive={pathname === route.href}
                />
            ))}
        </nav>
    )
}

export default Navigation