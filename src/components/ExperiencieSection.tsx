"use client";

import { motion } from "framer-motion";

const experiences = [
    {
        title: "Backend Developer — Tambo360 (Proyecto colaborativo SaaS)",
        description:
            "Participé en el desarrollo del backend de una plataforma SaaS orientada a la gestión de producción láctea. No solo implementé funcionalidades, sino que también ayudé a definir la estructura base del sistema y a destrabar problemas técnicos del equipo.",
        tech: ["Node.js", "TypeScript", "PostgreSQL", "Prisma", "Render", "Neon"],
        date: "2026",
        github: "https://github.com/Facu201202/i006-tambo360-fullstack",
    }
];

export default function ExperienceSection() {
    return (
        <section id="experience" className="flex flex-col items-center py-20 px-4 lg:py-32 gap-20 scroll-mt-20">

            {/* Header */}
            <motion.div
                className="text-center max-w-4xl flex flex-col items-center gap-6 md:gap-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-bold uppercase">Experiencias</h2>
                <div className="bg-violet-600 rounded w-10 h-1"></div>
                <p className="text-base md:text-xl text-gray-700">Aquí encontrarás mi experiencia trabajando en el desarrollo de sistemas y proyectos colaborativos, donde participé en la construcción de backends, diseño de arquitectura y resolución de problemas técnicos en equipo.</p>
            </motion.div>

            {/* Cards */}
            <div className="flex flex-col gap-12 w-full max-w-5xl">
                {experiences.map((exp, i) => (
                    <motion.div
                        key={i}
                        className="group rounded-2xl 
            border border-gray-200 
            bg-white 
            p-6 md:p-8 
            shadow-sm hover:shadow-md 
            hover:-translate-y-1
            transition duration-300"
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        <div className="flex flex-col gap-4">

                            {/* Fecha */}
                            <p className="text-sm text-violet-600 font-medium">
                                {exp.date}
                            </p>

                            {/* Título */}
                            <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                                {exp.title}
                            </h3>

                            {/* Descripción */}
                            <p className="text-gray-700 max-w-2xl leading-relaxed">
                                {exp.description}
                            </p>

                            {/* Tecnologías */}
                            <div className="flex flex-wrap gap-2 mt-2">
                                {exp.tech.map((t, idx) => (
                                    <span
                                        key={idx}
                                        className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Acción */}
                            <div className="mt-4">
                                {exp.github ? (
                                    <a
                                        href={exp.github}
                                        target="_blank"
                                        className="text-sm text-violet-600 hover:text-violet-700 font-medium transition"
                                    >
                                        Ver repositorio →
                                    </a>
                                ) : (
                                    <span className="text-sm text-gray-500">
                                        Proyecto privado
                                    </span>
                                )}
                            </div>

                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}