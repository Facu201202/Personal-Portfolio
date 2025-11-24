"use client";
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';
import { motion } from "framer-motion";


export default function ProjectsSection() {
    return (
        <section id="projects" className="flex flex-col items-center justify-center py-20 px-4 lg:py-36 lg:px-6 gap-12 scroll-mt-20">
            <motion.div
                className="text-center max-w-4xl flex flex-col items-center gap-6 md:gap-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-bold uppercase">Proyectos</h2>
                <div className="bg-violet-600 rounded w-10 h-1"></div>
                <p className="text-base md:text-xl text-gray-700">Aquí encontrarás algunos de los trabajos que desarrollé, donde aplico buenas prácticas, diseño de sistemas y desarrollo Full Stack. Cada proyecto incluye código, demo y una breve descripción técnica.</p>
            </motion.div>
            {projects.map((project, index) => (
                <ProjectCard key={index} images={project.images} alt={project.alt} title={project.title} description={project.description} skills={project.skills} github={project.github} deploy={project.deploy} />
            ))}
        </section>
    )
}
