export default function JobInformation() {
  return (
    <div className="pb-16 pt-24 w-1/2 p-4 text-black">
      <h1 className="text-3xl lg:text-3xl font-bold">Kevin Josue Sibaja Granados</h1>
      <h2 className="text-m font-bold">Programador</h2>
      <hr className="my-4 border-b-2" />
      <div className="mt-4 ml-0">
        <h1 className="text-m font-bold">Experiencia:</h1>
        <ul className="ml-4">
          <li>Administrador de base de datos de Google, 2019 a 2021</li>
          <li>Desarrollador web Microsoft, 2021 hasta la actualidad</li>
        </ul>
      </div>
      <hr className="my-4 border-b-2 border-white-300" />
      <h1 className="text-m font-bold">Formación:</h1>
      <ul className="ml-4">
        <li>Conclusión de Educación Técnica Media de Informática Empresarial, en el Colegio Técnico Profesional Henry François Pittier, 2021</li>
        <li>Conclusión de Estudios de la Educación General Básica, Colegio Técnico Profesional Henry François Pittier, 2018</li>
        <li>Conclusión del Segundo Ciclo de la Educación General Básica, Escuela Santa Elena de Pittier, 2018.</li>
      </ul>
      <hr className="my-4 border-b-2 border-white-300" />
      <h1 className="text-m font-bold">Herramientas:</h1>
      <ul className="ml-4">
        <li className="mb-2">
          <span>JAVA: 100%</span>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div>
          </div>
        </li>
        <li className="mb-2">
          <span>HTML: 70%</span>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '70%' }}></div>
          </div>
        </li>
        <li className="mb-2">
          <span>CSS: 50%</span>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '50%' }}></div>
          </div>
        </li>
        <li className="mb-2">
          <span>SQL SERVER: 85%</span>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '85%' }}></div>
          </div>
        </li>
      </ul>
    </div>
  );
}
