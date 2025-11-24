"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutSection() {

    const skills = {
        Frontend: ["React", "Next.js", "TypeScript / JavaScript", "HTML", "CSS", "Tailwind CSS"],
        Backend: ["Node.js", "Express", "SQL", "MongoDB", "Prisma", "APIs REST", "Autenticación (JWT)"],
        Herramientas: ["Git", "GitHub", "Postman", "Scrum"]
    };



    return (
        <section id="about" className="flex flex-col items-center justify-center py-20 px-4 lg:py-36 lg:px-6 gap-8 lg:gap-12 scroll-mt-20">
            <motion.div
                className="text-center max-w-4xl flex flex-col items-center gap-6 md:gap-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}>
                <h2 className="text-3xl md:text-4xl font-bold uppercase">Sobre Mi</h2>
                <div className="bg-violet-600 rounded w-10 h-1"></div>
                <p className="text-base md:text-xl text-gray-700">Aquí encontrarás más información sobre mí, lo que hago y mis habilidades actuales, principalmente en programación y tecnología.</p>
            </motion.div>
            <div className="my-10 flex flex-col lg:flex-row gap-20 lg:gap-12 xl:gap-24 text-left w-full max-w-7xl mx-auto">
                <div className="flex-1 flex flex-col gap-9">
                    <p className="text-2xl md:text-3xl font-bold">¡Conóceme!</p>
                    <div className="space-y-3 text-base lg:text-lg text-gray-700">
                        <p>
                            Soy un <span className="font-bold">Desarrollador Full Stack</span> enfocado en construir aplicaciones web completas que aporten valor real y mejoren la experiencia del usuario. Trabajo con buenas prácticas, código organizado y soluciones que contribuyan al éxito del producto.
                        </p>
                        <p>
                            A lo largo de mi formación y proyectos personales he trabajado tanto en la lógica del servidor como en la interfaz, cuidando siempre la calidad y la estructura del sistema.
                            Podés ver algunos de mis trabajos en la sección de <span className="font-bold">Proyectos</span>.
                        </p>
                        <p>
                            Estoy abierto a oportunidades <span className="font-bold">Laborales</span> donde pueda colaborar, aprender y seguir creciendo profesionalmente. Si tenés una propuesta que se alinee con mi perfil, no dudes en <span className="font-bold">Contactarme</span>.
                        </p>
                    </div>
                    <Link href={""} className="bg-violet-600 py-3 px-6 lg:py-3 lg:px-8 rounded text-white font-bold text-base lg:text-lg w-fit uppercase transition-transform duration-200 hover:-translate-y-1">Contacto</Link>
                </div>
                <div className="flex-1 flex flex-col gap-9">
                    <p className="text-2xl md:text-3xl font-bold">Mis Habilidades</p>
                    <div>
                        {Object.entries(skills).map(([categoria, lista]) => (
                            <div key={categoria} className="">
                                <p className="text-lg xl:text-xl font-semibold mb-3">{categoria}</p>
                                {lista.map(skill => (
                                    <span key={skill} className="inline-block bg-gray-200 text-gray-700 text-sm font-medium mr-2 mb-2 px-4 py-2 rounded-lg">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
