import Meta from "./Meta";

const listaMock = [
  {
    "id": "1",
    "detalles": "Correr por 30 minutos",
    "periodo": "día",
    "eventos": 1,
    "icono": "🏃‍♂️",
    "meta": 365,
    "plazo": "2030-01-01",
    "completado": 175
  },
  {
    "id": "2",
    "detalles": "Leer libros",
    "periodo": "año",
    "eventos": 6,
    "icono": "📚",
    "meta": 12,
    "plazo": "2030-01-01",
    "completado": 0
  },
  {
    "id": "3",
    "detalles": "Viajar a parques nacionales",
    "periodo": "mes",
    "eventos": 1,
    "icono": "✈️",
    "meta": 60,
    "plazo": "2030-01-01",
    "completado": 40
  }
]
  


function Lista() {
    return ( 
 <div className="w-full flex flex-col gap-2 px-4 py-2">
      {listaMock.map(meta => (
        <Meta key={meta.id} {...meta} />
      ))}
    </div>
  );
}

export default Lista;