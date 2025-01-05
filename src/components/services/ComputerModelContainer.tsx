// import { Canvas } from "@react-three/fiber";
// import { Suspense, useEffect } from "react";
// import { ComputerModel } from "./ComputerModel";
// import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
// import { useState } from "react";
//
// const ComputerModelContainer = () => {
//   const [isScreenVisiable, setIsScreenVisiable] = useState(false);
//
//   useEffect(() => {
//     console.log(isScreenVisiable);
//   }, [isScreenVisiable]);
//
//   return (
//     <Canvas className="w-full h-full">
//       <Suspense fallback="loading...">
//         <Stage environment="city">
//           <ComputerModel setIsScreenVisiable={setIsScreenVisiable} />
//         </Stage>
//         <OrbitControls enableZoom={false} />
//         <PerspectiveCamera position={[1.1, -0.18, -0.46]} makeDefault />
//       </Suspense>
//     </Canvas>
//   );
// };
//
// export default ComputerModelContainer;

// TEST1 - TESTING MODEL POSITION
// import { Canvas, useFrame } from "@react-three/fiber";
// import { Suspense, useRef, useState } from "react";
// import { ComputerModel } from "./ComputerModel";
// import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
// import * as THREE from "three";
//
// const DebugPanel = ({
//   position,
//   rotation,
// }: {
//   position: { x: number; y: number; z: number };
//   rotation: { x: number; y: number; z: number };
// }) => {
//   return (
//     <div className="absolute top-4 left-4 bg-white/90 p-4 rounded-lg shadow-lg">
//       <h3 className="font-bold mb-2">Camera Position</h3>
//       <pre className="text-sm">{JSON.stringify(position, null, 2)}</pre>
//       <h3 className="font-bold mt-4 mb-2">Model Rotation</h3>
//       <pre className="text-sm">{JSON.stringify(rotation, null, 2)}</pre>
//     </div>
//   );
// };
//
// const ComputerModelContainer = () => {
//   const cameraRef = useRef<THREE.PerspectiveCamera>(null);
//   const controlsRef = useRef<any>(null);
//   const modelRef = useRef<THREE.Group>(null);
//
//   // State for camera position and model rotation
//   const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
//   const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
//
//   return (
//     <div className="relative w-full h-full">
//       <Canvas className="w-full h-full">
//         {/* Use Suspense to load model */}
//         <Suspense fallback="loading...">
//           <Stage environment="city">
//             <group ref={modelRef}>
//               <ComputerModel />
//             </group>
//           </Stage>
//           {/* Camera and controls */}
//           <OrbitControls
//             ref={controlsRef}
//             enableZoom={true}
//             enablePan={true}
//             enableRotate={true}
//           />
//           <PerspectiveCamera
//             ref={cameraRef}
//             position={[1.6, 0, -1]}
//             makeDefault
//           />
//
//           {/* R3F hook for updating position and rotation */}
//           <CameraAndModelDebug
//             cameraRef={cameraRef}
//             modelRef={modelRef}
//             setPosition={setPosition}
//             setRotation={setRotation}
//           />
//         </Suspense>
//       </Canvas>
//       {/* Debug Panel showing values */}
//       <DebugPanel position={position} rotation={rotation} />
//     </div>
//   );
// };
//
// // Separate component for managing updates from the Canvas context
// const CameraAndModelDebug = ({
//   cameraRef,
//   modelRef,
//   setPosition,
//   setRotation,
// }: {
//   cameraRef: React.RefObject<THREE.PerspectiveCamera>;
//   modelRef: React.RefObject<THREE.Group>;
//   setPosition: React.Dispatch<
//     React.SetStateAction<{ x: number; y: number; z: number }>
//   >;
//   setRotation: React.Dispatch<
//     React.SetStateAction<{ x: number; y: number; z: number }>
//   >;
// }) => {
//   // Update the position and rotation on each frame
//   useFrame(() => {
//     // Update camera position
//     if (cameraRef.current) {
//       setPosition({
//         x: cameraRef.current.position.x,
//         y: cameraRef.current.position.y,
//         z: cameraRef.current.position.z,
//       });
//     }
//
//     // Update model rotation
//     if (modelRef.current) {
//       setRotation({
//         x: modelRef.current.rotation.x,
//         y: modelRef.current.rotation.y,
//         z: modelRef.current.rotation.z,
//       });
//     }
//   });
//
//   return null;
// };
//
// export default ComputerModelContainer;

// TEST2 - WORKING
// import React, { useState, useEffect } from "react";
// import { Canvas } from "@react-three/fiber";
// import { Suspense } from "react";
// import { Stage, OrbitControls, PerspectiveCamera } from "@react-three/drei";
// import { ComputerModel } from "./ComputerModel";
//
// const ComputerModelContainer: React.FC = () => {
//   const [isScreenVisible, setIsScreenVisible] = useState<boolean>(false);
//
//   useEffect(() => {
//     console.log("Screen visibility:", isScreenVisible);
//   }, [isScreenVisible]);
//
//   return (
//     <Canvas className="w-full h-full">
//       <Suspense fallback="loading...">
//         <Stage environment="city">
//           <ComputerModel setIsScreenVisible={setIsScreenVisible} />
//         </Stage>
//         <OrbitControls enableZoom={false} />
//         <PerspectiveCamera position={[1.1, -0.18, -0.46]} makeDefault />
//       </Suspense>
//     </Canvas>
//   );
// };
//
// export default ComputerModelContainer;

//TEST3 - CURRENT
// import React from "react";
// import { Canvas } from "@react-three/fiber";
// import { Suspense } from "react";
// import { Stage, OrbitControls, PerspectiveCamera } from "@react-three/drei";
// import { ComputerModel } from "./ComputerModel";
//
// interface ComputerModelContainerProps {
//   isScreenVisible: boolean;
//   setIsScreenVisible: React.Dispatch<React.SetStateAction<boolean>>;
// }
//
// const ComputerModelContainer: React.FC<ComputerModelContainerProps> = ({
//   isScreenVisible,
//   setIsScreenVisible,
// }) => {
//   // Define camera positions based on screen visibility
//   const cameraPosition = isScreenVisible
//     ? [1, 0, 0] // Adjusted position when screen is visible
//     : [1.1, -0.18, -0.46]; // Original position
//
//   return (
//     <Canvas className="w-full h-full">
//       <Suspense fallback="loading...">
//         <Stage environment="city">
//           <ComputerModel setIsScreenVisible={setIsScreenVisible} />
//         </Stage>
//         <OrbitControls enableZoom={true} />
//         <PerspectiveCamera position={cameraPosition} makeDefault />
//       </Suspense>
//     </Canvas>
//   );
// };
//
// export default ComputerModelContainer;

// TEST4 - WORKING
// import React from "react";
// import { Canvas } from "@react-three/fiber";
// import { Suspense } from "react";
// import { Stage, OrbitControls, PerspectiveCamera } from "@react-three/drei";
// import { ComputerModel } from "./ComputerModel";
//
// interface ComputerModelContainerProps {
//   isScreenVisible: boolean;
//   setIsScreenVisible: React.Dispatch<React.SetStateAction<boolean>>;
// }
//
// const ComputerModelContainer: React.FC<ComputerModelContainerProps> = ({
//   isScreenVisible,
//   setIsScreenVisible,
// }) => {
//   const cameraPosition = isScreenVisible
//     ? [0, 1, 2] // Zoomed-in position for the screen
//     : [1.1, -0.18, -0.46]; // Default position
//
//   return (
//     <Canvas className="w-full h-full">
//       <Suspense fallback="loading...">
//         <Stage environment="city">
//           <ComputerModel setIsScreenVisible={setIsScreenVisible} />
//         </Stage>
//         <OrbitControls enableZoom={true} />
//         <PerspectiveCamera position={cameraPosition} makeDefault />
//       </Suspense>
//     </Canvas>
//   );
// };
//
// export default ComputerModelContainer;

// TEST5 - MAC WORKING
import * as THREE from "three";
import React, { Suspense, useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Html,
  Environment,
  useGLTF,
  ContactShadows,
  OrbitControls,
} from "@react-three/drei";
import ComputerScreen from "./ComputerScreen";
import { useTheme } from "@/components/theme-provider";

function Model(props) {
  const group = useRef();
  // Load model
  const { nodes, materials } = useGLTF("/macModel.glb");
  // Make it float
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 2) / 20 + 0.25,
      0.1,
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 4) / 20,
      0.1,
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      Math.sin(t / 8) / 20,
      0.1,
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      (-2 + Math.sin(t / 2)) / 2,
      0.1,
    );
  });

  const theme = useTheme();

  const screenColor = theme.theme === "light" ? "#FFFFFF" : "#000000";

  // The jsx graph was auto-generated by: https://github.com/pmndrs/gltfjsx
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh
        geometry={nodes.keyboard.geometry}
        material={materials.PaletteMaterial002}
        position={[1.793, 0, 3.451]}
      />
      <group position={[0, -0.1, 3.394]}>
        <mesh
          geometry={nodes.Cube002.geometry}
          material={materials.PaletteMaterial003}
        />
        <mesh
          geometry={nodes.Cube002_1.geometry}
          material={materials.PaletteMaterial001}
        />
      </group>
      <mesh
        geometry={nodes.screen.geometry}
        material={
          new THREE.MeshBasicMaterial({ color: screenColor, toneMapped: false })
        }
        position={[0.002, 2.928, 0.327]}
        rotation={[1.585, 0, 0]}
      >
        {/* Drei's HTML component can "hide behind" canvas geometry */}
        <Html
          className="w-[334px] h-[216px]"
          rotation-x={-Math.PI / 2}
          position={[0, 0.05, -0.09]}
          transform
          occlude
        >
          <div
            className="p-[10px] w-[668px] h-[432px] scale-50 origin-top-left"
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => props.setIsScreenVisible(true)}
          >
            <ComputerScreen />
          </div>
        </Html>
      </mesh>
    </group>
  );
}

export default function ComputerModelContainer({ setIsScreenVisible }) {
  return (
    <Canvas camera={{ position: [-5, 0, -15], fov: 55 }}>
      <pointLight position={[10, 10, 10]} intensity={1.5} />
      <Suspense fallback={null}>
        <group rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
          <Model setIsScreenVisible={setIsScreenVisible} />
        </group>
        <Environment preset="city" />
      </Suspense>
      <ContactShadows position={[0, -4.5, 0]} scale={20} blur={2} far={4.5} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        minPolarAngle={Math.PI / 2.2}
        maxPolarAngle={Math.PI / 2.2}
      />
    </Canvas>
  );
}
