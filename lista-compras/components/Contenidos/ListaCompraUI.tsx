import {
  View,
  Text,
  TextInput,
  Pressable,
  FlatList,
  StyleSheet,
} from "react-native";
import ItemCompraUI from "./ItemCompraUI";
import { Producto } from "../Controladores/ControladorListaCompra";

type Props = {
  productos: Producto[];
  texto: string;
  alCambiarTexto: (t: string) => void;
  alAgregar: () => void;
  alToggle: (id: string) => void;
  alEliminar: (id: string) => void;
};

export default function ListaComprasUI({
  productos,
  texto,
  alCambiarTexto,
  alAgregar,
  alToggle,
  alEliminar,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🛒 Lista de Compras</Text>

      <View style={styles.filaInput}>
        <TextInput
          value={texto}
          onChangeText={alCambiarTexto}
          placeholder="Agregar producto"
          style={styles.input}
          onSubmitEditing={alAgregar}
        />

        <Pressable onPress={alAgregar} style={styles.boton}>
          <Text style={styles.textoBoton}>Agregar</Text>
        </Pressable>
      </View>

      <FlatList
        data={productos}
        keyExtractor={(p) => p.id}
        renderItem={({ item }) => (
          <ItemCompraUI
            producto={item}
            alPresionar={() => alToggle(item.id)}
            alMantener={() => alEliminar(item.id)}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.vacio}>Sin productos</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  titulo: { fontSize: 24, fontWeight: "bold" },
  filaInput: { flexDirection: "row", gap: 8 },
  input: { flex: 1, borderWidth: 1, padding: 10 },
  boton: { backgroundColor: "#1e90ff", padding: 10 },
  textoBoton: { color: "#fff" },
  vacio: { textAlign: "center", marginTop: 20 },
});