"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


export default function MainSection() {
    const container = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1, y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.15
            }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="main" className="min-h-screen flex flex-col justify-center relative scroll-mt-20">
            <div className="w-full flex justify-center">
                <div className="hidden lg:inline absolute left-0 space-y-4 p-2 shadow-2xl bg-white">
                    <Link href={"https://www.linkedin.com/in/facundo-fern%C3%A1ndez/"} target="_blank">
                        <Image src={"/linkedin.svg"} height={60} width={60} alt="Linkedin" className="p-2 hover:bg-violet-200 transition-colors rounded hover:cursor-pointer" />
                    </Link>
                    <Link href={"https://github.com/Facu201202"} target="_blank">
                        <Image src={"/github.svg"} height={60} width={60} alt="Github" className="p-2 hover:bg-violet-200 transition-colors rounded hover:cursor-pointer" />
                    </Link>
                    <a href={"https://mail.google.com/mail/?view=cm&fs=1&to=facuu201202@gmail.com"} target="_blank" rel="noreferrer" title="facuu201202@gmail.com">
                        <Image src={"/envelope.svg"} height={60} width={60} alt="Gmail" className="p-2 hover:bg-violet-200 transition-colors rounded hover:cursor-pointer" />
                    </a>
                    <Link href={"/Facundo_Fernandez_CV.pdf"} title="Descargar CV" download>
                        <Image src={"/file-full.svg"} height={60} width={60} alt="Github" className="p-2 hover:bg-violet-200 transition-colors rounded hover:cursor-pointer" />
                    </Link>
                </div>
                <motion.div
                    className="text-center max-w-4xl flex flex-col gap-10 px-3"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <motion.h1
                        variants={item}
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase"
                    >
                        Hola, soy Facundo Fernández
                    </motion.h1>

                    <motion.p
                        variants={item}
                        className="text-lg md:text-xl md:max-w-3xl lg:max-w-max lg:text-2xl text-gray-700"
                    >
                        Desarrollador web orientado a resultados que crea y gestiona sitios web y aplicaciones web que contribuyen al éxito del producto en su conjunto.
                    </motion.p>

                    <motion.div variants={item} className="flex flex-col items-center sm:flex-row gap-3 justify-center">
                        <Link
                            href="#projects"
                            className="bg-violet-600 py-3 lg:py-4 lg:px-20 rounded text-white font-bold text-lg lg:text-xl w-52 lg:w-fit self-center uppercase transition-transform duration-200 hover:-translate-y-1"
                        >
                            Proyectos
                        </Link>
                        <Link
                            href={"/Facundo_Fernandez_CV.pdf"} title="Descargar CV" download
                            className="border border-violet-600 py-3 rounded text-violet-600 font-bold text-lg w-52 uppercase transition-transform duration-200 hover:-translate-y-1 lg:hidden"
                        >
                            CV
                        </Link>
                    </motion.div>

                </motion.div>
            </div>
            <div className="hidden md:inline pt-12 absolute bottom-10 w-full">
                <div className="w-6 h-10 border-2 border-foreground rounded-full mx-auto relative overflow-hidden flex justify-center">
                    <div className="w-1 h-2 bg-black rounded-full absolute top-2 animate-scroll-dot"></div>

                </div>
            </div>
        </section >
    )
}
