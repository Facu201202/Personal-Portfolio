"use client"

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from "framer-motion";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import Link from 'next/link';

type ProjectCard = {
    images: string[];
    alt: string;
    title: string;
    description: string;
    skills: string[];
    github: string;
    deploy: string;
}


export default function ProjectCard({ images, alt, title, description, skills, github, deploy }: ProjectCard) {
    return (
        <motion.div
            className="my-10 lg:px-10 w-full flex flex-col lg:flex-row gap-12 xl:gap-24 justify-center items-center max-w-7xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
        >
            <div className="w-full max-w-[600px] lg:max-w-[500px] xl:max-w-[700px]">
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                >
                    {images.map((src, i) => (
                        <SwiperSlide key={i}>
                            <div className="relative w-full max-w-[600px] lg:max-w-[500px] xl:max-w-[700px] aspect-[700/430] border border-gray-300 shadow-xl rounded-lg">
                                <Image
                                    src={src}
                                    alt={alt}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            <div className="flex flex-col gap-6 lg:gap-9 text-center lg:text-left">
                <p className="text-2xl xl:text-3xl font-bold">{title}</p>
                <p className="space-y-3 text-base xl:text-lg text-gray-700">{description}</p>

                <div>
                    {skills.map(skill => (
                        <span key={skill} className="inline-block bg-gray-200 text-gray-700 text-sm font-medium mr-2 mb-2 px-4 py-2 rounded-lg">
                            {skill}
                        </span>
                    ))}
                </div>

                <div className="flex justify-center lg:justify-start gap-3">
                    <Link href={deploy} target="_blank" className="bg-violet-600 py-2 px-5 rounded text-white font-bold w-fit uppercase transition-transform duration-200 hover:-translate-y-1">Deploy</Link>
                    <Link href={github} target="_blank" className="border border-violet-600 py-2 px-5 rounded text-violet-600 font-bold w-fit uppercase transition-transform duration-200 hover:-translate-y-1">Github</Link>
                </div>
            </div>
        </motion.div>
    )
}

