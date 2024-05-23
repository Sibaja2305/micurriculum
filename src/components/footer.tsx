
import Image from "next/image";

import imglinkedin from "/public/image/linkedin.png"
import imgFacebook from "/public/image/facebook.png"
import imgInstagram from "/public/image/instagram.png"
export default function Footer() {
  return (
    <div className="w-full bg-black">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h2 className="text-white">©2024 Kevin Sibaja. Todos los derechos reservados</h2>
        <div className="flex space-x-4">
          <a href="https://www.linkedin.com/in/kevin-sibaja-granados-7522a223a" target="_blank" rel="noopener noreferrer">
            <Image src={imglinkedin} alt="LinkedIn" width={24} height={24} />
          </a>
          <a href="https://www.facebook.com/share/G2xw3hyXJUHqxCmY/?mibextid=qi2Omg" target="_blank" rel="noopener noreferrer">
            <Image src={imgFacebook} alt="Facebook" width={24} height={24} />
          </a>
          <a href="https://www.instagram.com/sibaja2305/" target="_blank" rel="noopener noreferrer">
            <Image src={imgInstagram} alt="Instagram" width={24} height={24} />
          </a>
        </div>
      </div>
    </div>
  );
}