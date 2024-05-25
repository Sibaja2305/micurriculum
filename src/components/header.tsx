import Link from "next/link";
import Image from "next/image";
import logoPersonal from "/public/image/logopersona.png";

export default function Header() {
  return (
    <div
      className="w-full fixed top-0 left-0 text-white z-10"
      style={{ backgroundColor: "#1a202c" }}
    >
      <nav className="bg-custom-blue w-full flex items-center justify-between p-6 mx-auto flex-wrap">
        <div className="flex items-center">
          <Image src={logoPersonal} alt="logo persona" className="mr-4 h-14" />
          <Link href="/" className="font-bold text-lg md:text-xl">
            Inicio
          </Link>
        </div>
        <div className="space-x-6 text-lg md:text-xl">
          <Link href="/repository">Repositorios</Link>
          <Link href="mailto:kevinsibajah@gmail.com">Call to Action</Link>
        </div>
      </nav>
    </div>
  );
}
