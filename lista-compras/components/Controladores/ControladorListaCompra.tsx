import { useState } from "react";

export type Producto = {
  id: string;
  nombre: string;
  completado: boolean;
};

export function useControladorListaCompras() {
  const [productos, setProductos] = useState<Producto[]>([]);
  const [texto, setTexto] = useState("");

  const agregarProducto = () => {
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

    setTexto("");
  };

  const alternarProducto = (id: string) => {
    setProductos((prev) =>
      prev.map((p) =>
        p.id === id ? { ...p, completado: !p.completado } : p
      )
    );
  };

  const eliminarProducto = (id: string) => {
    setProductos((prev) => prev.filter((p) => p.id !== id));
  };

  return {
    productos,
    texto,
    setTexto,
    agregarProducto,
    alternarProducto,
    eliminarProducto,
  };
}