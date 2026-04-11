import ListaComprasUI from "../Contenidos/ListaCompraUI";
import { useControladorListaCompras } from "../Controladores/ControladorListaCompra";

export default function ContenedorListaCompras() {
  const controlador = useControladorListaCompras();

  return (
    <ListaComprasUI
      productos={controlador.productos}
      texto={controlador.texto}
      alCambiarTexto={controlador.setTexto}
      alAgregar={controlador.agregarProducto}
      alToggle={controlador.alternarProducto}
      alEliminar={controlador.eliminarProducto}
    />
  );
}