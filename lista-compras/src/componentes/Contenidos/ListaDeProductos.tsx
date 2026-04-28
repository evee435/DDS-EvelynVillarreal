import { FlatList, Text, StyleSheet, View } from "react-native";
import ItemCompra from "./ItemCompra";
import { Producto } from "../../tipos/tipo";

type Props = {
  productos: Producto[];
  alToggle: (id: string) => void;
  alEliminar: (id: string) => void;
};

export default function ListaDeProductos({
  productos,
  alToggle,
  alEliminar,
}: Props) {
  return (
    <FlatList
      data={productos}
      keyExtractor={(p) => p.id}
      renderItem={({ item }) => (
        <ItemCompra
          producto={item}
          alPresionar={() => alToggle(item.id)}
          alMantener={() => alEliminar(item.id)}
        />
      )}
      ListEmptyComponent={
        <Text style={styles.vacio}>Sin productos. ¡Agregá el primero! 😊</Text>
      }
      ItemSeparatorComponent={() => <View style={styles.sep} />}
    />
  );
}

const styles = StyleSheet.create({
  vacio: { textAlign: "center", marginTop: 20, color: "#777" },
  sep: { height: 1, backgroundColor: "#eee" },
});
