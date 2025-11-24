"use client"
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    const navLinks = [
        { href: "#main", label: "Inicio" },
        { href: "#about", label: "Sobre Mi" },
        { href: "#projects", label: "Proyectos" },
        { href: "#contact", label: "Contacto" },
    ];

    return (
        <Disclosure as="header" className="fixed w-full z-50 bg-white shadow-lg py-4 lg:py-6 px-8 lg:px-16">
            {({ open }) => (
                <>
                    <div className="flex items-center justify-between mx-auto">
                        <div className="flex items-center gap-5">
                            <div className="relative w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden">
                                <Image src="/2.jpeg" alt="Facundo Fernández" fill className="object-cover" />
                            </div>
                            <p className="lg:text-xl font-bold text-gray-900">Fernández Facundo</p>
                        </div>

                        <div className="hidden md:flex gap-10 uppercase font-bold text-gray-700 text-sm lg:text-base">
                            {navLinks.map((link) => (
                                <Link key={link.href} href={link.href} className="hover:text-violet-700">
                                    {link.label}
                                </Link>
                            ))}
                        </div>

                        <Disclosure.Button className="md:hidden p-2 rounded-md text-gray-700 hover:text-violet-700">
                            {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                        </Disclosure.Button>
                    </div>

                    <Disclosure.Panel className="md:hidden mt-4">
                        <div className="flex flex-col items-end text-sm gap-10 text-gray-700 uppercase font-bold">
                            {navLinks.map((link) => (
                                <Link key={link.href} href={link.href} className="hover:text-violet-700">
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
}

