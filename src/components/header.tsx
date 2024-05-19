import Link from "next/link";
import Image from "next/image";
import logoPersonal from "/public/image/logopersonal.png";

export default function Header(){
    return(
        <div className="w-full absolute text-white z-10 bg-black">
        <nav className="container relative flex items-center justify-between mx-auto p-4"> {/* Reduje el padding */}
            <Image src={logoPersonal} alt="logo personal" className="mr-4 h-10"/> {/* Ajusté la altura y agregué un margen a la derecha */}
            <Link href="/" className="font-bold text-xl relative z-20 mr-auto">Inicio</Link> {/* Alineado a la izquierda y agregué un margen a la derecha */}
            <div className="space-x-4 text-xl">
                <Link href="/gallery">Galería</Link>
                <Link href="/repositorios">Repositorios</Link>
                <Link href="/informacion">Acerca de mí</Link>
            </div>
        </nav> 
    </div>
    )
}