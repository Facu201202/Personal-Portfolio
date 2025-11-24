"use client"
import { useForm, SubmitHandler } from "react-hook-form"
import { toast } from "react-toastify"
import { motion } from "framer-motion";

type Inputs = {
    name: string
    email: string,
    message: string
}

export default function ContactSection() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        if (res.ok) {
            toast.success('¡Mensaje enviado! 😊', {
                position: "top-right",
                autoClose: 5000
            });
            reset();
        } else {
            toast.error('Error al enviar ⚠️', {
                position: "top-right",
                autoClose: 5000,
            });
        }
    }

    return (
        <section id="contact" className="flex flex-col items-center justify-center py-20 px-4 lg:py-36 lg:px-6 gap-12 bg-gray-100">
            <motion.div
                className="text-center max-w-4xl flex flex-col items-center gap-6 md:gap-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <h2 className="text-3xl md:text-4xl font-bold uppercase">Contacto</h2>
                <div className="bg-violet-600 rounded w-10 h-1"></div>
                <p className="text-base md:text-xl text-gray-700">No dudes en contactarme completando el formulario a continuación; te responderé lo antes posible.</p>
            </motion.div>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white container max-w-4xl shadow-xl p-6 lg:p-12 rounded flex flex-col gap-6">
                <div className="flex flex-col gap-2 text-sm md:text-base">
                    <label htmlFor="name" className="font-semibold text-gray-600">Nombre</label>
                    <input
                        type="text"
                        className="bg-[#F0F0F0] p-5 w-full rounded text-gray-600 font-semibold focus:outline-none border border-gray-200"
                        placeholder="Ingresa tu nombre"
                        required
                        {...register("name", {
                            required: true,
                            maxLength: 20
                        })} />
                    {errors.name &&
                        <span className="text-red-500 text-sm mt-1 block">
                            El nombre debe tener un máximo de 20 caracteres
                        </span>
                    }
                </div>
                <div className="flex flex-col gap-2 text-sm md:text-base">
                    <label htmlFor="email" className="font-semibold text-gray-600">Correo</label>
                    <input
                        type="email"
                        className="bg-[#F0F0F0] p-5 w-full rounded text-gray-600 font-semibold focus:outline-none border border-gray-200"
                        placeholder="Ingresa tu correo"
                        required
                        {...register("email", {
                            required: true,
                            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/
                        })} />
                    {errors.email && (
                        <span className="text-red-500 text-sm mt-1 block">
                            Este campo es obligatorio
                        </span>
                    )}
                </div>
                <div className="flex flex-col gap-2 text-sm md:text-base">
                    <label htmlFor="message" className="font-semibold text-gray-600">Mensaje</label>
                    <textarea
                        className="bg-[#F0F0F0] p-5 w-full h-40 rounded text-gray-600 font-semibold focus:outline-none border border-gray-200 resize-none"
                        placeholder="Ingresa tu mensaje"
                        required
                        {...register("message", {
                            required: true,
                            maxLength: 500
                        })} />
                    {errors.message &&
                        <span className="text-red-500 text-sm mt-1 block">
                            Este campo es obligatorio
                        </span>}
                </div>
                <button type="submit" className="bg-violet-600 py-3 px-10 md:py-4 md:px-14 rounded text-white font-bold text-base md:text-lg w-full md:w-fit uppercase transition-transform duration-200 hover:-translate-y-1 self-end hover:cursor-pointer">Enviar</button>
            </form>
        </section>
    )
}
