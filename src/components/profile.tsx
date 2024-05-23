import React from "react";
import Image from "next/image";
import Link from "next/link";
import imgProfile from "/public/image/kevin.jpg";
import imgPhone from "/public/image/phone.png";
import imgGmail from "/public/image/gmail.png";
import imgAddress from "/public/image/address.png";

export default function Profile() {
  return (
    <div className="pt-20 p-4 text-black">
      <div className="bg-white rounded-lg md:p-4 border-r-0">
        <div className="flex flex-col items-center">
          <Image
            src={imgProfile}
            alt="foto de kevin"
            className="rounded-full mx-auto max-w-full"
            width={150}
            height={100}
          />
          <div className="ml-4 mt-4">
            <h1 className="text-3xl lg:text-3xl">Kevin Sibaja Granados</h1>
            <h2 className="text-2xl mt-2">Contacto:</h2>
            <ul className="flex flex-col items-start mt-2">
              <li className="flex items-center">
                <Image src={imgPhone} alt="telefono" className="w-6 h-6 mr-2" />
                <a href="tel:84337919">84337919</a>
              </li>
              <li className="flex items-center mt-2">
                <Image src={imgGmail} alt="email" className="w-6 h-6 mr-2" />
                <Link href="mailto:kevinsibajah@gmail.com">
                  kevinsibajah@gmail.com
                </Link>
              </li>
              <li className="flex items-center mt-2">
                <Image
                  src={imgAddress}
                  alt="Direccion"
                  className="w-6 h-6 mr-2"
                />
                <a href="https://www.google.com/maps/search/?api=1&query=San+Rafael,+Ciudad+Neily,+Puntarenas,+Costa+Rica">
                  San Rafael, Ciudad Neily, Puntarenas, Costa Rica
                </a>
              </li>
            </ul>
            <hr className="my-4 border-b-2 border-gray-300" />
            <h1 className="text-2xl mt-4">Habilidades:</h1>
            <ul className="ml-4">
              <li>Trabajo en equipo</li>
              <li>Liderazgo</li>
              <li>Creativo</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
