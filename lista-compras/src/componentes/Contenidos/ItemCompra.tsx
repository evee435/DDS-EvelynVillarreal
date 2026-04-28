import { Pressable, Text, StyleSheet } from "react-native";
import { Producto } from "../../tipos/tipo";

type Props = {
  producto: Producto;
  alPresionar: () => void;
  alMantener: () => void;
};

export default function ItemCompraUI({
  producto,
  alPresionar,
  alMantener,
}: Props) {
  return (
    <Pressable
      onPress={alPresionar}
      onLongPress={alMantener}
      style={styles.fila}
    >
      <Text style={[styles.texto, producto.completado && styles.completado]}>
        {producto.nombre}
      </Text>

      <Text
        style={[
          styles.indicador,
          producto.completado
            ? styles.indicadorListo
            : styles.indicadorPendiente,
        ]}
      >
        {producto.completado ? "✔" : "•"}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  fila: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,   
    paddingHorizontal: 8,
    alignItems: "center",  
  },
  texto: { fontSize: 16 },
  completado: { textDecorationLine: "line-through", color: "#999" },

  indicador: {
    minWidth: 28,
    height: 28,              
    borderRadius: 14,        
    textAlign: "center",
    textAlignVertical: "center", 
    fontWeight: "700",      
  },
  indicadorPendiente: { backgroundColor: "#eee", color: "#666" }, 
  indicadorListo: { backgroundColor: "#2ecc71", color: "#fff" },
});