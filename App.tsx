import { Canvas, Group, Mask, Rect } from "@shopify/react-native-skia"
import { Button, StyleSheet, View } from "react-native"
import { useSharedValue } from "react-native-reanimated"

export default function App() {
  const opacity1 = useSharedValue(1)
  const opacity2 = useSharedValue(1)

  return (
    <View style={styles.container}>
      <Canvas style={{ height: 250, width: 250, borderWidth: 1, borderColor: "red", marginBottom: 40 }}>
        <Group opacity={opacity1}>
          <Mask mask={<Rect x={0} y={0} width={100} height={100} color="white" />} mode="luminance">
            <Rect x={0} y={0} width={100} height={100} color="red" />
          </Mask>
        </Group>

        <Rect x={100} y={0} width={100} height={100} color="orange" />

        <Group opacity={opacity2}>
          <Rect x={0} y={100} width={100} height={100} color="blue" />
        </Group>
      </Canvas>

      <View style={{ flexDirection: "row", gap: 10 }}>
        <Button title="Square 1 Opacity = 1" onPress={() => opacity1.set(1)} />
        <Button title="Square 1 Opacity = 0" onPress={() => opacity1.set(0)} />
      </View>

      <View style={{ flexDirection: "row", gap: 10 }}>
        <Button title="Square 2 Opacity = 1" onPress={() => opacity2.set(1)} />
        <Button title="Square 2 Opacity = 0" onPress={() => opacity2.set(0)} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
})
