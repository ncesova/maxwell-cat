import {Canvas} from "@react-three/fiber";
import {AsciiRenderer, CameraControls} from "@react-three/drei";
import MaxwellTheCat from "../assets/models/maxwell_the_cat/MaxwellTheCat";

export default function Content() {
  return (
    <Canvas camera={{position: [0, 5, 25]}}>
      <CameraControls />
      <color attach="background" args={["black"]} />
      <AsciiRenderer
        fgColor="#dcdfe4"
        bgColor="transparent"
        characters=" ~`!@#$%^&*()_-+=1234567890qwertyuiopasdfghjklzxcvnm,<.>/?;:QWERTYUIOPASDFGHJKLZXCVBNM"
      />
      <MaxwellTheCat />
      <ambientLight intensity={1} position={[1, 1, 1]} />
      <directionalLight position={[2, 2, 2]} intensity={3} />
    </Canvas>
  );
}
