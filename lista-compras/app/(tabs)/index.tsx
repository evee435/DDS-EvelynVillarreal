import Titulo from "../../src/componentes/Contenidos/Titulo";
import FormularioParaAgregarNuevosProductos from "../../src/componentes/Contenidos/InputProducto";
import ListaDeProductos from "../../src/componentes/Contenidos/ListaDeProductos";
import { useControladorListaCompras } from "../../src/hooks/useControladorLIstaCompras";
import Contenedor from "@/src/componentes/Contenedores/ContenedorListaCompra";

export default function App() {
  const { productos, agregarProducto, alternarProducto, eliminarProducto } =
    useControladorListaCompras();

  return (
    <Contenedor>
      <Titulo />

      <FormularioParaAgregarNuevosProductos alAgregar={agregarProducto} />

      <ListaDeProductos
        productos={productos}
        alToggle={alternarProducto}
        alEliminar={eliminarProducto}
      />
    </Contenedor>
  );
}
