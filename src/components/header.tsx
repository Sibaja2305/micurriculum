import Link from "next/link";
import Image from "next/image";
import logoPersonal from "/public/image/logopersona.png";

export default function Header(){
    return(
        <div className="w-full absolute text-white z-10 bg-black">
        <nav className="container relative flex items-center justify-between mx-auto p-4"> 
            <Image src={logoPersonal} alt="logo persona" className="mr-4 h-10"/> 
            <Link href="/" className="font-bold text-xl relative z-20 mr-auto">Inicio</Link> 
            <div className="space-x-4 text-xl">
                <Link href="/gallery">Galería</Link>
                <Link href="/repository">Repositorios</Link>
            </div>
        </nav> 
    </div>
    )
}