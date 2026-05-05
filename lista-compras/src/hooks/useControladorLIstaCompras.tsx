import { useState } from "react";
import { Producto } from "../tipos/tipo";

export function useControladorListaCompras() {
  const [productos, setProductos] = useState<Producto[]>([]);

  const agregarProducto = (texto: string) => {
    const textoLimpio = texto.trim();
    if (!textoLimpio) return;

    setProductos((prev) => [
      ...prev,
      {
        id: String(Date.now()),
        nombre: textoLimpio,
        completado: false,
      },
    ]);
  };

  const alternarProducto = (id: string) => {
    setProductos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, completado: !p.completado } : p)),
    );
  };

  const eliminarProducto = (id: string) => {
    setProductos((prev) => prev.filter((p) => p.id !== id));
  };

  return {
    productos,
    agregarProducto,
    alternarProducto,
    eliminarProducto,
  };
}

