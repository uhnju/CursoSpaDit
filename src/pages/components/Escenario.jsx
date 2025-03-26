const Escenario = ({ componente }) => {
    const nombre = componente.type.name || "Componente";
    return (
        <div style={{
            borderBottom: "1px solid #ccc",
            paddingBottom: "1.5rem",
            marginBottom: "2rem"
        }}>
            <h3 style={{ fontWeight: "bold", marginBottom: "0.5rem" }}>🧩 {nombre}</h3>
            {componente}
        </div>
    );
};

export default Escenario 



// const EjemplosUseState = () => {
//   return (
//     <div className="p-6 space-y-6">
//       <h1 className="text-2xl font-bold">Ejemplos de useState en React</h1>
//       <Escenario componente={<Contador />} />
//       <Escenario componente={<ContadorConLimite />} />
//       <Escenario componente={<EntradaFormulario />} />
//       <Escenario componente={<EstiloDinamico />} />
//       <Escenario componente={<ListaDeLaCompra />} />
//       <Escenario componente={<ListaDeTareas />} />
//       <Escenario componente={<AlternarVisibilidad />} />
//       <Escenario componente={<NumeroAleatorio />} />
//       <Escenario componente={<FormularioMultiple />} />
//     </div>
//   );
// };