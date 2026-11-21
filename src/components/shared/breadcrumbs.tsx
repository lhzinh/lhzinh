"use client";

import Link from "next/link";
import {
    CircleAlertIcon,
    CircleCheckIcon,
    CircleDashedIcon,
} from "lucide-react";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const components: { title: string; href: string; icon: any }[] = [
    {
        title: "Projects",
        href: "/projects",
        icon: CircleAlertIcon,
    },
    {
        title: "Articles",
        href: "/blog",
        icon: CircleCheckIcon,
    },
    {
        title: "Contact",
        href: "/contact",
        icon: CircleDashedIcon,
    },
];

export default function Breadcrumbs() {
    return (
        <header className='flex items-center justify-center py-6'>
            <NavigationMenu>
                <NavigationMenuList className='gap-4'>
                    {components.map((com) => {
                        const Icon = com.icon;
                        return (
                            <NavigationMenuItem key={com.title}>
                                <NavigationMenuLink
                                    className={navigationMenuTriggerStyle()}
                                    render={
                                        <Link href={com.href} className="flex-row items-center gap-2">
                                            <Icon />
                                            {com.title}
                                        </Link>
                                    }
                                />
                            </NavigationMenuItem>
                        );
                    })}
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
}
