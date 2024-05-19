import Link from "next/link";
import Profile from "@/components/profile";
export default function JobInformation() {
  return (
    <div className="w-1/2 p-4 text-blue-500">
      <h1 className="text-3xl lg:text-3xl font-bold">
        Kevin Josue Sibaja Granados
      </h1>
      <h2 className="text-m font-bold">Programador</h2>
      <hr className="my-4 border-b-2 border-white-300" />
      <div>
        <h1 className="text-m font-bold">Experiencia:</h1>
        <ul className="ml-4">
          <li>Administrador de base de datos de Google, 2019 a 2021</li>
          <li>Desarrollador web Microsoft, 2021 hasta la actualidad </li>
        </ul>
      </div>
      <div>
        <hr className="my-4 border-b-2 border-white-300" />
        <h1 className="text-m font-bold">Formación:</h1>
        <ul className="ml-4">
          <li>Conclusión de Educación Técnica Media de Informática Empresarial, en el Colegio Técnico Profesional Henry François Pittier, 2021</li>
          <li>Conclusión de Estudios de la Educación General Básica, Colegio Técnico Profesional Henry François Pittier, 2018</li>
          <li>Conclusión del Segundo Ciclo de la Educación General Básica, Escuela Santa Elena de Pittier, 2018.</li>
        </ul>
      </div>
      <div>
        <hr className="my-4 border-b-2 border-white-300" />
        <h1 className="text-m font-bold">Herramientas:</h1>
        <ul className="ml-4">
          <li>JAVA: 100%</li>
          <li>HTML: 70%</li>
          <li>CSS: 50%</li>
          <li>SQL SERVER: 85%</li>
        </ul>
      </div>
    </div>
  );
}
