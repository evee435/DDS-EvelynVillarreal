import { View, TextInput, Pressable, Text, StyleSheet } from "react-native";

type Props = {
  texto: string;
  alCambiarTexto: (t: string) => void;
  alAgregar: () => void;
};

export default function InputProducto({
  texto,
  alCambiarTexto,
  alAgregar,
}: Props) {
  return (
    <View style={styles.fila}>
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
  );
}
const styles = StyleSheet.create({
  fila: { flexDirection: "row", gap: 8, marginBottom: 10 },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",    
    borderRadius: 8,         
    paddingHorizontal: 12,   
    height: 44,             
  },
  boton: {
    backgroundColor: "#1e90ff",
    paddingHorizontal: 14,   
    borderRadius: 8,        
    alignItems: "center",    
    justifyContent: "center" 
  },
  textoBoton: { color: "#fff", fontWeight: "600" }, 
});