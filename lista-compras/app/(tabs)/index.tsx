import { View, StyleSheet } from "react-native";
import Titulo from "../../src/componentes/Contenidos/Titulo";
import InputProducto from "../../src/componentes/Contenidos/InputProducto";
import ListaDeProductos from "../../src/componentes/Contenidos/ListaDeProductos";
import { useControladorListaCompras } from "../../src/hooks/useControladorLIstaCompras";
import ItemCompraUI from "../../src/componentes/Contenidos/ItemCompra";
import Contenedor from "@/src/componentes/Contenedores/ContenedorListaCompra";

export default function App() {
  const {
    productos,
    texto,
    setTexto,
    agregarProducto,
    alternarProducto,
    eliminarProducto,
  } = useControladorListaCompras();

  return (
    <Contenedor>
      <Titulo />

      <InputProducto
        texto={texto}
        alCambiarTexto={setTexto}
        alAgregar={agregarProducto}
      />

      <ListaDeProductos
        productos={productos}
        alToggle={alternarProducto}
        alEliminar={eliminarProducto}
      />
    </Contenedor>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 60,
  },
});
