import {useGLTF} from "@react-three/drei";
import modelPath from "./maxwell_the_cat_dingus.glb";
import {useRef} from "react";
import {useFrame} from "@react-three/fiber";
import {Group, Mesh, MeshStandardMaterial} from "three";
import {GLTF} from "three-stdlib";

export type DreiGLTF = GLTF & {
  nodes: Record<string, Mesh>;
  materials: Record<string, MeshStandardMaterial>;
};

export default function Model() {
  const {nodes, materials} = useGLTF(modelPath, true) as DreiGLTF;
  const catRef = useRef<Group>(null!);
  useFrame(({clock}) => {
    catRef.current.rotation.y = clock.getElapsedTime() * 3;
    catRef.current.position.setY(Math.sin(clock.getElapsedTime() * 3) * 3 - 7);
  });
  return (
    <group ref={catRef} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.dingus_dingus_0.geometry}
            material={materials.dingus}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.dingus_whiskers_0.geometry}
            material={materials.whiskers}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(modelPath);
