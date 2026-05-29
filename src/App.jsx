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
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Encuentra técnicos confiables cerca de ti
          </h2>

          <p className="text-lg text-gray-600 mb-8">
            Solicita servicios de computadoras, electricidad,
            plomería, cámaras de seguridad y más desde
            una sola plataforma.
          </p>

          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-2xl text-lg font-semibold shadow-lg hover:scale-105 transition">
              Solicitar servicio
            </button>

            <button className="bg-white border border-gray-300 px-6 py-3 rounded-2xl text-lg font-semibold hover:bg-gray-100 transition">
              Ver técnicos
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-2xl p-5">
              <h3 className="font-bold text-lg mb-2">
                💻 Técnicos PC
              </h3>

              <p className="text-gray-600 text-sm">
                Reparación, formateo y mantenimiento.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-2xl p-5">
              <h3 className="font-bold text-lg mb-2">
                ⚡ Electricistas
              </h3>

              <p className="text-gray-600 text-sm">
                Instalaciones y reparaciones eléctricas.
              </p>
            </div>

            <div className="bg-green-50 rounded-2xl p-5">
              <h3 className="font-bold text-lg mb-2">
                🚿 Plomeros
              </h3>

              <p className="text-gray-600 text-sm">
                Soluciones rápidas para tu hogar.
              </p>
            </div>

            <div className="bg-purple-50 rounded-2xl p-5">
              <h3 className="font-bold text-lg mb-2">
                📷 Cámaras
              </h3>

              <p className="text-gray-600 text-sm">
                Instalación de seguridad y monitoreo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Search */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Buscar técnicos o servicios..."
            className="flex-1 border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-blue-700 transition">
            Buscar
          </button>
        </div>
      </section>

      {/* Technicians */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold">
              Técnicos destacados
            </h2>

            <p className="text-gray-500 mt-1">
              Encuentra técnicos verificados disponibles en tiempo real
            </p>
          </div>

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
                        `📞 Contactando a ${tech.name}

Especialidad: ${tech.specialty}
Estado: ${tech.status}

Teléfono: +591 70000000`
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

      {/* Request Service */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-white rounded-3xl shadow-xl p-8 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Solicita un servicio
            </h2>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="text"
                placeholder="Tipo de servicio"
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="5"
                placeholder="Describe tu problema"
                className="w-full border border-gray-300 rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                onClick={() =>
                  alert("✅ Solicitud enviada correctamente")
                }
                className="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 transition"
              >
                Enviar solicitud
              </button>
            </div>
          </div>

          <div className="bg-blue-50 rounded-3xl p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-5">
              ¿Por qué usar TecniYa?
            </h3>

            <ul className="space-y-4 text-lg">
              <li>✅ Técnicos verificados</li>
              <li>✅ Atención rápida</li>
              <li>✅ Precios claros</li>
              <li>✅ Soporte en Cochabamba y Bolivia</li>
              <li>✅ Chat en tiempo real</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-3">
              TecniYa
            </h2>

            <p className="text-gray-400">
              Plataforma boliviana para encontrar técnicos y servicios confiables.
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-3">
              Servicios
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Técnicos PC</li>
              <li>Electricistas</li>
              <li>Plomeros</li>
              <li>Cámaras</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3">
              Contacto
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>Cochabamba - Bolivia</li>
              <li>contacto@tecniya.com</li>
              <li>+591 70000000</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}