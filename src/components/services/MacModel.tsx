import * as THREE from "three";
import { useGLTF, Html } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import ComputerScreen from "./ComputerScreen";

type GLTFResult = GLTF & {
  nodes: {
    keyboard: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cube002_1: THREE.Mesh;
    screen: THREE.Mesh;
  };
  materials: {
    PaletteMaterial002: THREE.MeshStandardMaterial;
    PaletteMaterial003: THREE.MeshStandardMaterial;
    PaletteMaterial001: THREE.MeshStandardMaterial;
    ["screen.001"]: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

export function Model(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/macModel.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.keyboard.geometry}
        material={materials.PaletteMaterial002}
        position={[1.793, 0, 3.451]}
      />
      <group position={[0, -0.1, 3.394]}>
        <mesh
          geometry={nodes.Cube002.geometry}
          // material={materials.PaletteMaterial003}
        >
          {/* Drei's HTML component can "hide behind" canvas geometry */}
          <Html
            className="content"
            rotation-x={-Math.PI / 2}
            position={[0, 0.05, -0.09]}
            transform
            occlude
          >
            <div className="wrapper" onPointerDown={(e) => e.stopPropagation()}>
              <ComputerScreen />
            </div>
          </Html>
        </mesh>
        <mesh
          geometry={nodes.Cube002_1.geometry}
          material={materials.PaletteMaterial001}
        />
      </group>
      <mesh
        geometry={nodes.screen.geometry}
        material={materials["screen.001"]}
        position={[0.002, 2.928, 0.327]}
        rotation={[1.585, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/macModel.glb");
