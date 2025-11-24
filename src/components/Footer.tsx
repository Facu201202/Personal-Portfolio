import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-black text-white p-4">
            <div className="border-b border-gray-700 container mx-auto mt-8 lg:mt-16">
                <div className="mb-10 md:flex justify-between space-y-5">
                    <div className="md:max-w-1/2 space-y-3 ">
                        <h2 className="text-sm md:text-xl font-bold">Facundo Fernández</h2>
                        <p className="text-xs md:text-sm lg:text-base">Desarrollador web orientado a resultados que crea y gestiona sitios web y aplicaciones web que contribuyen al éxito del producto en su conjunto.</p>
                    </div>
                    <div>
                        <h3 className="text-sm md:text-xl font-semibold mb-3">Contacto</h3>
                        <div className="flex gap-2">
                            <Link href={"https://www.linkedin.com/in/facundo-fern%C3%A1ndez/"} target="_blank">
                                <Image src={"/whiteIcons/linkedin.svg"} height={30} width={30} alt="Linkedin" className="" />
                            </Link>
                            <Link href={"https://github.com/Facu201202"} target="_blank">
                                <Image src={"/whiteIcons/github.svg"} height={30} width={30} alt="Github" className="" />
                            </Link>
                            <a href={"https://mail.google.com/mail/?view=cm&fs=1&to=facuu201202@gmail.com"} target="_blank" rel="noreferrer" title="facuu201202@gmail.com">
                                <Image src={"/whiteIcons/envelope.svg"} height={30} width={30} alt="Github" className="" />
                            </a>
                            <Link href={"/Facundo_Fernandez_CV.pdf"} title="Descargar CV" download>
                                <Image src={"/whiteIcons/file.svg"} height={30} width={30} alt="Github" className="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-white text-center py-6 text-xs">© Copyright  {currentYear}. Made by Facundo Fernández</p>
        </footer>
    )
}
