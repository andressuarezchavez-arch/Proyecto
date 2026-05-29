import { useState } from "react";

export default function TecniYaApp() {
  const [technicians, setTechnicians] = useState([
    {
      name: "Juan Carlos",
      specialty: "Técnico en computadoras",
      rating: 4.9,
      jobs: 320,
      price: "Desde 50 Bs",
      status: "Disponible",
    },
    {
      name: "Diego M.",
      specialty: "Electricista",
      rating: 4.7,
      jobs: 180,
      price: "Desde 70 Bs",
      status: "Ocupado",
    },
    {
      name: "Luis Fernando",
      specialty: "Plomero",
      rating: 4.8,
      jobs: 210,
      price: "Desde 60 Bs",
      status: "En camino",
    },
  ]);

  const changeStatus = (index) => {
    const updated = [...technicians];

    if (updated[index].status === "Disponible") {
      updated[index].status = "Ocupado";
    } else if (updated[index].status === "Ocupado") {
      updated[index].status = "En camino";
    } else {
      updated[index].status = "Disponible";
    }

    setTechnicians(updated);
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case "Disponible":
        return "bg-green-100 text-green-700";
      case "Ocupado":
        return "bg-red-100 text-red-700";
      case "En camino":
        return "bg-yellow-100 text-yellow-700";
      default:
        return "bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <header className="bg-blue-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div>
            <h1 className="text-3xl font-bold">TecniYa</h1>
            <p className="text-sm opacity-90">
              Servicios técnicos rápidos y confiables
            </p>
          </div>

          <div className="flex gap-3">
            <button className="bg-white text-blue-600 px-4 py-2 rounded-xl font-semibold hover:scale-105 transition">
              Iniciar sesión
            </button>

            <button className="border border-white px-4 py-2 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition">
              Registrarse
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Encuentra técnicos confiables cerca de ti
        </h2>

        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
          Plataforma boliviana para solicitar servicios técnicos rápidos,
          seguros y modernos.
        </p>

        <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-blue-700 transition">
          Solicitar servicio
        </button>
      </section>

      {/* Technicians */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">
            Técnicos destacados
          </h2>

          <div className="bg-white px-4 py-2 rounded-xl shadow">
            👨‍🔧 {technicians.length} técnicos activos
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {technicians.map((tech, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg p-6 hover:-translate-y-2 hover:shadow-2xl transition duration-300"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-2xl">
                  👨‍🔧
                </div>

                <div>
                  <h3 className="font-bold text-xl">
                    {tech.name}
                  </h3>

                  <p className="text-gray-500 text-sm">
                    {tech.specialty}
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <p>⭐ {tech.rating}</p>
                <p>🛠️ {tech.jobs} trabajos realizados</p>
                <p>💵 {tech.price}</p>
              </div>

              <div className="flex justify-between items-center mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusStyle(
                    tech.status
                  )}`}
                >
                  {tech.status}
                </span>

                <div className="flex gap-2">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition">
                Contratar
                </button>

                <button
                onClick={() =>
                alert(
                      `📞 Contactando a ${tech.name}\n\nEspecialidad: ${tech.specialty}\nEstado: ${tech.status}\n\nTeléfono: +591 70000000`
                     )
    }
    className="border border-gray-300 px-4 py-2 rounded-xl hover:bg-gray-100 transition"
  >
    Ver perfil
  </button>
</div>
              </div>

              <button
                onClick={() => changeStatus(index)}
                className="w-full border border-gray-300 py-2 rounded-xl hover:bg-gray-100 transition"
              >
                Cambiar estado
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-6 py-10 text-center">
          <h2 className="text-2xl font-bold mb-3">
            TecniYa
          </h2>

          <p className="text-gray-400">
            Plataforma boliviana para encontrar técnicos y servicios confiables.
          </p>
        </div>
      </footer>
    </div>
  );
}