import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Experience } from "./components/Experience";
import { Leva } from "leva";
import { Overlay } from "./components/Overlay";

function App() {
  return (
    <>
      <Leva hidden />
      <Overlay />
      <Canvas camera={{ position: [0, 0, 5], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        <Experience />
      </Canvas>
    </>
  );
}

export default App;
