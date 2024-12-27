// import * as THREE from "three";
// import { useGLTF } from "@react-three/drei";
// import { GLTF } from "three-stdlib";
//
// type GLTFResult = GLTF & {
//   nodes: {
//     monitor_gray_0: THREE.Mesh;
//     monitor_vintage_2_0: THREE.Mesh;
//     monitor_white001_0: THREE.Mesh;
//     monitor_screen_0: THREE.Mesh;
//     monitor_black_0: THREE.Mesh;
//     cpu_white_0: THREE.Mesh;
//     cpu_gray_metallic_0: THREE.Mesh;
//     cpu_metallic_0: THREE.Mesh;
//     cpu_gray_0: THREE.Mesh;
//     cpu_green_0: THREE.Mesh;
//     cpu_gray_stiker_0: THREE.Mesh;
//     flopy_vintage_1_0: THREE.Mesh;
//     Cube_screen_0: THREE.Mesh;
//     flopy001_vintage_1_0: THREE.Mesh;
//     flopy002_vintage_1_0: THREE.Mesh;
//     vent_monitor_gray_0: THREE.Mesh;
//     cpu003_green_0: THREE.Mesh;
//     cpu003_gray_stiker_0: THREE.Mesh;
//     Plane001_vintage_2_0: THREE.Mesh;
//     Plane003_vintage_2_0: THREE.Mesh;
//     Plane004_white001_0: THREE.Mesh;
//     Plane005_white_0: THREE.Mesh;
//     Plane006_vintage_2_0: THREE.Mesh;
//     Plane007_white_0: THREE.Mesh;
//     Plane009_white001_0: THREE.Mesh;
//     Plane010_vintage_2_0: THREE.Mesh;
//     Plane012_vintage_2_0: THREE.Mesh;
//     Plane014_vintage_2_0: THREE.Mesh;
//     Plane011_vintage_2_0: THREE.Mesh;
//     Plane002_white_0: THREE.Mesh;
//     Plane008_white_0: THREE.Mesh;
//     Plane013_white_0: THREE.Mesh;
//     Plane015_white_0: THREE.Mesh;
//     Plane016_vintage_2_0: THREE.Mesh;
//     Plane017_white_0: THREE.Mesh;
//     Plane018_vintage_2_0: THREE.Mesh;
//     Plane019_vintage_2_0: THREE.Mesh;
//     Plane020_vintage_2_0: THREE.Mesh;
//     Plane021_vintage_2_0: THREE.Mesh;
//     Plane022_vintage_2_0: THREE.Mesh;
//     kewboard_vintage_2_0: THREE.Mesh;
//     kewboard_white_0: THREE.Mesh;
//     cpu001_gray_metallic_0: THREE.Mesh;
//   };
//   materials: {
//     gray: THREE.MeshStandardMaterial;
//     vintage_2: THREE.MeshStandardMaterial;
//     ["white.001"]: THREE.MeshStandardMaterial;
//     screen: THREE.MeshStandardMaterial;
//     black: THREE.MeshStandardMaterial;
//     white: THREE.MeshStandardMaterial;
//     gray_metallic: THREE.MeshStandardMaterial;
//     metallic: THREE.MeshStandardMaterial;
//     green: THREE.MeshStandardMaterial;
//     gray_stiker: THREE.MeshStandardMaterial;
//     vintage_1: THREE.MeshStandardMaterial;
//   };
//   animations: GLTFAction[];
// };
//
// export function ComputerModel(props: JSX.IntrinsicElements["group"]) {
//   const { nodes, materials } = useGLTF("/computerModel.glb") as GLTFResult;
//
//   // console.log("Loaded nodes:", nodes);
//   // console.log("Received props:", props);
//
//   return (
//     <group {...props} dispose={null}>
//       <group
//         position={[-0.491, 14.798, 0]}
//         rotation={[-Math.PI / 2, 0, 0]}
//         scale={0.002}
//       >
//         <group rotation={[Math.PI / 2, 0, 0]}>
//           <group
//             position={[0, 222.199, 0]}
//             rotation={[-Math.PI / 2, 0, 0]}
//             scale={100}
//           >
//             <mesh
//               geometry={nodes.monitor_gray_0.geometry}
//               material={materials.gray}
//             />
//             <mesh
//               geometry={nodes.monitor_vintage_2_0.geometry}
//               material={materials.vintage_2}
//             />
//             <mesh
//               geometry={nodes.monitor_white001_0.geometry}
//               material={materials["white.001"]}
//             />
//             <mesh
//               geometry={nodes.monitor_screen_0.geometry}
//               material={materials.screen}
//             />
//             <mesh
//               geometry={nodes.monitor_black_0.geometry}
//               material={materials.black}
//             />
//           </group>
//           <group
//             position={[12.124, 26.489, -9.714]}
//             rotation={[-Math.PI / 2, 0, 0]}
//             scale={100}
//           >
//             <mesh
//               geometry={nodes.cpu_white_0.geometry}
//               material={materials.white}
//             />
//             <mesh
//               geometry={nodes.cpu_gray_metallic_0.geometry}
//               material={materials.gray_metallic}
//             />
//             <mesh
//               geometry={nodes.cpu_metallic_0.geometry}
//               material={materials.metallic}
//             />
//             <mesh
//               geometry={nodes.cpu_gray_0.geometry}
//               material={materials.gray}
//             />
//             <mesh
//               geometry={nodes.cpu_green_0.geometry}
//               material={materials.green}
//             />
//             <mesh
//               geometry={nodes.cpu_gray_stiker_0.geometry}
//               material={materials.gray_stiker}
//             />
//           </group>
//           <group
//             position={[314.53, 2.767, 10.713]}
//             rotation={[-Math.PI / 2, 0.22, 0]}
//             scale={[100, 179.37, 100]}
//           >
//             <group
//               position={[-0.816, 0.944, 0.182]}
//               rotation={[0, -1.516, 0]}
//               scale={[1, 0.558, 1]}
//             >
//               <mesh
//                 geometry={nodes.cpu003_green_0.geometry}
//                 material={materials.green}
//               />
//               <mesh
//                 geometry={nodes.cpu003_gray_stiker_0.geometry}
//                 material={materials.gray_stiker}
//               />
//             </group>
//             <mesh
//               geometry={nodes.kewboard_vintage_2_0.geometry}
//               material={materials.vintage_2}
//             />
//             <mesh
//               geometry={nodes.kewboard_white_0.geometry}
//               material={materials.white}
//             />
//             <mesh
//               geometry={nodes.Plane001_vintage_2_0.geometry}
//               material={materials.vintage_2}
//               position={[-0.468, -0.848, 0.224]}
//               scale={0.106}
//             />
//             <mesh
//               geometry={nodes.Plane003_vintage_2_0.geometry}
//               material={materials.vintage_2}
//               position={[-0.468, -0.756, 0.224]}
//               scale={0.106}
//             />
//             <mesh
//               geometry={nodes.Plane004_white001_0.geometry}
//               material={materials["white.001"]}
//               position={[-0.468, -0.629, 0.224]}
//               scale={0.106}
//             />
//             <mesh
//               geometry={nodes.Plane005_white_0.geometry}
//               material={materials.white}
//               position={[-0.308, -0.502, 0.224]}
//               scale={0.106}
//             />
//             <mesh
//               geometry={nodes.Plane006_vintage_2_0.geometry}
//               material={materials.vintage_2}
//               position={[-0.308, -0.611, 0.222]}
//               scale={0.1}
//             />
//             <mesh
//               geometry={nodes.Plane007_white_0.geometry}
//               material={materials.white}
//               position={[-0.147, -0.465, 0.224]}
//               scale={0.106}
//             />
//             <mesh
//               geometry={nodes.Plane009_white001_0.geometry}
//               material={materials["white.001"]}
//               position={[0.012, -0.42, 0.224]}
//               scale={0.106}
//             />
//             <mesh
//               geometry={nodes.Plane010_vintage_2_0.geometry}
//               material={materials.vintage_2}
//               position={[-0.148, -0.593, 0.222]}
//               scale={0.1}
//             />
//             <mesh
//               geometry={nodes.Plane012_vintage_2_0.geometry}
//               material={materials.vintage_2}
//               position={[0.009, 0.477, 0.222]}
//               scale={0.1}
//             />
//             <mesh
//               geometry={nodes.Plane014_vintage_2_0.geometry}
//               material={materials.vintage_2}
//               position={[-0.218, 0.489, 0.224]}
//               scale={0.1}
//             />
//             <mesh
//               geometry={nodes.Plane011_vintage_2_0.geometry}
//               material={materials.vintage_2}
//               position={[0.009, -0.571, 0.222]}
//               scale={0.1}
//             />
//             <mesh
//               geometry={nodes.Plane002_white_0.geometry}
//               material={materials.white}
//               position={[0.171, -0.046, 0.222]}
//               scale={0.1}
//             />
//             <mesh
//               geometry={nodes.Plane008_white_0.geometry}
//               material={materials.white}
//               position={[-0.468, 0.668, 0.224]}
//               scale={0.106}
//             />
//             <mesh
//               geometry={nodes.Plane013_white_0.geometry}
//               material={materials.white}
//               position={[-0.468, 0.761, 0.224]}
//               scale={0.106}
//             />
//             <mesh
//               geometry={nodes.Plane015_white_0.geometry}
//               material={materials.white}
//               position={[-0.468, 0.852, 0.224]}
//               scale={0.106}
//             />
//             <mesh
//               geometry={nodes.Plane016_vintage_2_0.geometry}
//               material={materials.vintage_2}
//               position={[-0.468, 0.946, 0.224]}
//               scale={0.106}
//             />
//             <mesh
//               geometry={nodes.Plane017_white_0.geometry}
//               material={materials.white}
//               position={[0.169, 0.714, 0.222]}
//               scale={0.1}
//             />
//             <mesh
//               geometry={nodes.Plane018_vintage_2_0.geometry}
//               material={materials.vintage_2}
//               position={[0.09, 0.943, 0.222]}
//               rotation={[0, 0, Math.PI / 2]}
//               scale={[0.056, 0.18, 0.1]}
//             />
//             <mesh
//               geometry={nodes.Plane019_vintage_2_0.geometry}
//               material={materials.vintage_2}
//               position={[-0.468, -0.629, 0.224]}
//               scale={0.106}
//             />
//             <mesh
//               geometry={nodes.Plane020_vintage_2_0.geometry}
//               material={materials.vintage_2}
//               position={[-0.468, 0.852, 0.224]}
//               scale={0.106}
//             />
//             <mesh
//               geometry={nodes.Plane021_vintage_2_0.geometry}
//               material={materials.vintage_2}
//               position={[-0.468, 0.761, 0.224]}
//               scale={0.106}
//             />
//             <mesh
//               geometry={nodes.Plane022_vintage_2_0.geometry}
//               material={materials.vintage_2}
//               position={[-0.468, 0.668, 0.224]}
//               scale={0.106}
//             />
//           </group>
//           <mesh
//             geometry={nodes.flopy_vintage_1_0.geometry}
//             material={materials.vintage_1}
//             position={[82.4, 26.742, -9.735]}
//             rotation={[-Math.PI / 2, 0, 0]}
//             scale={100}
//           />
//           <mesh
//             geometry={nodes.Cube_screen_0.geometry}
//             material={materials.screen}
//             position={[76.322, 223.241, -89.253]}
//             rotation={[-Math.PI / 2, -0.081, 0]}
//             scale={[67.645, 70.66, 62.739]}
//           />
//           <mesh
//             geometry={nodes.flopy001_vintage_1_0.geometry}
//             material={materials.vintage_1}
//             position={[82.4, 26.742, -9.735]}
//             rotation={[-Math.PI / 2, 0, 0]}
//             scale={100}
//           />
//           <mesh
//             geometry={nodes.flopy002_vintage_1_0.geometry}
//             material={materials.vintage_1}
//             position={[82.4, 26.742, -9.735]}
//             rotation={[-Math.PI / 2, 0, 0]}
//             scale={100}
//           />
//           <mesh
//             geometry={nodes.vent_monitor_gray_0.geometry}
//             material={materials.gray}
//             position={[0, 222.307, 0]}
//             rotation={[-Math.PI / 2, 0, 0]}
//             scale={100}
//           />
//           <mesh
//             geometry={nodes.cpu001_gray_metallic_0.geometry}
//             material={materials.gray_metallic}
//             position={[12.124, 26.489, -9.714]}
//             rotation={[-Math.PI / 2, 0, 0]}
//             scale={100}
//           />
//         </group>
//       </group>
//     </group>
//   );
// }
//
// useGLTF.preload("/computerModel.glb");

// TEST1
// import * as THREE from "three";
// import { useGLTF } from "@react-three/drei";
// import { GLTF } from "three-stdlib";
//
// type GLTFResult = GLTF & {
//   nodes: {
//     monitor_gray_0: THREE.Mesh;
//     monitor_vintage_2_0: THREE.Mesh;
//     monitor_white001_0: THREE.Mesh;
//     monitor_screen_0: THREE.Mesh;
//     monitor_black_0: THREE.Mesh;
//     cpu_white_0: THREE.Mesh;
//     cpu_gray_metallic_0: THREE.Mesh;
//     cpu_metallic_0: THREE.Mesh;
//     cpu_gray_0: THREE.Mesh;
//     cpu_green_0: THREE.Mesh;
//     cpu_gray_stiker_0: THREE.Mesh;
//     flopy_vintage_1_0: THREE.Mesh;
//     Cube_screen_0: THREE.Mesh;
//     flopy001_vintage_1_0: THREE.Mesh;
//     flopy002_vintage_1_0: THREE.Mesh;
//     vent_monitor_gray_0: THREE.Mesh;
//     cpu003_green_0: THREE.Mesh;
//     cpu003_gray_stiker_0: THREE.Mesh;
//     Plane001_vintage_2_0: THREE.Mesh;
//     Plane003_vintage_2_0: THREE.Mesh;
//     Plane004_white001_0: THREE.Mesh;
//     Plane005_white_0: THREE.Mesh;
//     Plane006_vintage_2_0: THREE.Mesh;
//     Plane007_white_0: THREE.Mesh;
//     Plane009_white001_0: THREE.Mesh;
//     Plane010_vintage_2_0: THREE.Mesh;
//     Plane012_vintage_2_0: THREE.Mesh;
//     Plane014_vintage_2_0: THREE.Mesh;
//     Plane011_vintage_2_0: THREE.Mesh;
//     Plane002_white_0: THREE.Mesh;
//     Plane008_white_0: THREE.Mesh;
//     Plane013_white_0: THREE.Mesh;
//     Plane015_white_0: THREE.Mesh;
//     Plane016_vintage_2_0: THREE.Mesh;
//     Plane017_white_0: THREE.Mesh;
//     Plane018_vintage_2_0: THREE.Mesh;
//     Plane019_vintage_2_0: THREE.Mesh;
//     Plane020_vintage_2_0: THREE.Mesh;
//     Plane021_vintage_2_0: THREE.Mesh;
//     Plane022_vintage_2_0: THREE.Mesh;
//     kewboard_vintage_2_0: THREE.Mesh;
//     kewboard_white_0: THREE.Mesh;
//     cpu001_gray_metallic_0: THREE.Mesh;
//   };
//   materials: {
//     gray: THREE.MeshStandardMaterial;
//     vintage_2: THREE.MeshStandardMaterial;
//     ["white.001"]: THREE.MeshStandardMaterial;
//     screen: THREE.MeshStandardMaterial;
//     black: THREE.MeshStandardMaterial;
//     white: THREE.MeshStandardMaterial;
//     gray_metallic: THREE.MeshStandardMaterial;
//     metallic: THREE.MeshStandardMaterial;
//     green: THREE.MeshStandardMaterial;
//     gray_stiker: THREE.MeshStandardMaterial;
//     vintage_1: THREE.MeshStandardMaterial;
//   };
// };
//
// // Create default materials with specific colors
// const createDefaultMaterials = () => ({
//   gray: new THREE.MeshStandardMaterial({ color: "#808080", roughness: 0.5 }),
//   vintage_2: new THREE.MeshStandardMaterial({
//     color: "#d4c4a8",
//     roughness: 0.7,
//   }),
//   "white.001": new THREE.MeshStandardMaterial({
//     color: "#ffffff",
//     roughness: 0.2,
//   }),
//   screen: new THREE.MeshStandardMaterial({
//     color: "#000000",
//     emissive: "#103060",
//     roughness: 0.1,
//   }),
//   black: new THREE.MeshStandardMaterial({ color: "#000000", roughness: 0.5 }),
//   white: new THREE.MeshStandardMaterial({ color: "#ffffff", roughness: 0.3 }),
//   gray_metallic: new THREE.MeshStandardMaterial({
//     color: "#a0a0a0",
//     metalness: 0.8,
//     roughness: 0.2,
//   }),
//   metallic: new THREE.MeshStandardMaterial({
//     color: "#c0c0c0",
//     metalness: 1,
//     roughness: 0.1,
//   }),
//   green: new THREE.MeshStandardMaterial({ color: "#00ff00", roughness: 0.5 }),
//   gray_stiker: new THREE.MeshStandardMaterial({
//     color: "#404040",
//     roughness: 0.6,
//   }),
//   vintage_1: new THREE.MeshStandardMaterial({
//     color: "#c0b090",
//     roughness: 0.7,
//   }),
// });
//
// interface ComputerModelProps extends React.HTMLProps<SVGGElement> {
//   // or adjust for other element types
//   setIsScreenVisiable: React.Dispatch<React.SetStateAction<boolean>>;
// }
//
// // export function ComputerModel(props: JSX.IntrinsicElements["group"]) {
// export function ComputerModel({
//   setIsScreenVisiable,
//   ...props
// }: ComputerModelProps) {
//   const { nodes } = useGLTF("/computerModel.glb") as GLTFResult;
//   const defaultMaterials = createDefaultMaterials();
//
//   const handleScreenClick = () => {
//     console.log("Screen mesh clicked!");
//     setIsScreenVisible((prevState) => !prevState);
//   };
//
//   return (
//     <group {...props} dispose={null}>
//       <group
//         position={[-0.491, 14.798, 0]}
//         rotation={[-Math.PI / 2, 0, 0]}
//         scale={0.002}
//       >
//         <group rotation={[Math.PI / 2, 0, 0]}>
//           <group
//             position={[0, 222.199, 0]}
//             rotation={[-Math.PI / 2, 0, 0]}
//             scale={100}
//           >
//             <mesh
//               geometry={nodes.monitor_gray_0.geometry}
//               material={defaultMaterials.gray}
//             />
//             <mesh
//               geometry={nodes.monitor_vintage_2_0.geometry}
//               material={defaultMaterials.vintage_2}
//             />
//             <mesh
//               geometry={nodes.monitor_white001_0.geometry}
//               material={defaultMaterials["white.001"]}
//             />
//             <mesh
//               geometry={nodes.monitor_screen_0.geometry}
//               material={defaultMaterials.screen}
//             />
//             <mesh
//               geometry={nodes.monitor_black_0.geometry}
//               material={defaultMaterials.black}
//             />
//           </group>
//           {/* CPU Group */}
//           <group
//             position={[12.124, 26.489, -9.714]}
//             rotation={[-Math.PI / 2, 0, 0]}
//             scale={100}
//           >
//             <mesh
//               geometry={nodes.cpu_white_0.geometry}
//               material={defaultMaterials.white}
//             />
//             <mesh
//               geometry={nodes.cpu_gray_metallic_0.geometry}
//               material={defaultMaterials.gray_metallic}
//             />
//             <mesh
//               geometry={nodes.cpu_metallic_0.geometry}
//               material={defaultMaterials.metallic}
//             />
//             <mesh
//               geometry={nodes.cpu_gray_0.geometry}
//               material={defaultMaterials.gray}
//             />
//             <mesh
//               geometry={nodes.cpu_green_0.geometry}
//               material={defaultMaterials.green}
//             />
//             <mesh
//               geometry={nodes.cpu_gray_stiker_0.geometry}
//               material={defaultMaterials.gray_stiker}
//             />
//           </group>
//           {/* Keyboard Group */}
//           <group
//             position={[314.53, 2.767, 10.713]}
//             rotation={[-Math.PI / 2, 0.22, 0]}
//             scale={[100, 179.37, 100]}
//           >
//             <group
//               position={[-0.816, 0.944, 0.182]}
//               rotation={[0, -1.516, 0]}
//               scale={[1, 0.558, 1]}
//             >
//               <mesh
//                 geometry={nodes.cpu003_green_0.geometry}
//                 material={defaultMaterials.green}
//               />
//               <mesh
//                 geometry={nodes.cpu003_gray_stiker_0.geometry}
//                 material={defaultMaterials.gray_stiker}
//               />
//             </group>
//             <mesh
//               geometry={nodes.kewboard_vintage_2_0.geometry}
//               material={defaultMaterials.vintage_2}
//             />
//             <mesh
//               geometry={nodes.kewboard_white_0.geometry}
//               material={defaultMaterials.white}
//             />
//             {/* Keyboard keys */}
//             {[
//               {
//                 node: nodes.Plane001_vintage_2_0,
//                 pos: [-0.468, -0.848, 0.224],
//               },
//               {
//                 node: nodes.Plane003_vintage_2_0,
//                 pos: [-0.468, -0.756, 0.224],
//               },
//               { node: nodes.Plane004_white001_0, pos: [-0.468, -0.629, 0.224] },
//               // ... Add other keyboard keys here
//             ].map((key, index) => (
//               <mesh
//                 key={index}
//                 geometry={key.node.geometry}
//                 material={defaultMaterials.vintage_2}
//                 position={key.pos}
//                 scale={0.106}
//               />
//             ))}
//           </group>
//           {/* Floppy drives and other components */}
//           <mesh
//             geometry={nodes.flopy_vintage_1_0.geometry}
//             material={defaultMaterials.vintage_1}
//             position={[82.4, 26.742, -9.735]}
//             rotation={[-Math.PI / 2, 0, 0]}
//             scale={100}
//           />
//           <mesh
//             geometry={nodes.Cube_screen_0.geometry}
//             material={defaultMaterials.screen}
//             position={[76.322, 223.241, -89.253]}
//             rotation={[-Math.PI / 2, -0.081, 0]}
//             scale={[67.645, 70.66, 62.739]}
//             onClick={handleScreenClick}
//           />
//           <mesh
//             geometry={nodes.vent_monitor_gray_0.geometry}
//             material={defaultMaterials.gray}
//             position={[0, 222.307, 0]}
//             rotation={[-Math.PI / 2, 0, 0]}
//             scale={100}
//           />
//         </group>
//       </group>
//     </group>
//   );
// }
//
// useGLTF.preload("/computerModel.glb");

// TEST2 - WORKING
// import * as THREE from "three";
// import { useGLTF } from "@react-three/drei";
// import { GLTF } from "three-stdlib";
//
// type GLTFResult = GLTF & {
//   nodes: {
//     monitor_gray_0: THREE.Mesh;
//     monitor_vintage_2_0: THREE.Mesh;
//     monitor_white001_0: THREE.Mesh;
//     monitor_screen_0: THREE.Mesh;
//     monitor_black_0: THREE.Mesh;
//     cpu_white_0: THREE.Mesh;
//     cpu_gray_metallic_0: THREE.Mesh;
//     cpu_metallic_0: THREE.Mesh;
//     cpu_gray_0: THREE.Mesh;
//     cpu_green_0: THREE.Mesh;
//     cpu_gray_stiker_0: THREE.Mesh;
//     flopy_vintage_1_0: THREE.Mesh;
//     Cube_screen_0: THREE.Mesh;
//     flopy001_vintage_1_0: THREE.Mesh;
//     flopy002_vintage_1_0: THREE.Mesh;
//     vent_monitor_gray_0: THREE.Mesh;
//     cpu003_green_0: THREE.Mesh;
//     cpu003_gray_stiker_0: THREE.Mesh;
//     Plane001_vintage_2_0: THREE.Mesh;
//     Plane003_vintage_2_0: THREE.Mesh;
//     Plane004_white001_0: THREE.Mesh;
//     Plane005_white_0: THREE.Mesh;
//     Plane006_vintage_2_0: THREE.Mesh;
//     Plane007_white_0: THREE.Mesh;
//     Plane009_white001_0: THREE.Mesh;
//     Plane010_vintage_2_0: THREE.Mesh;
//     Plane012_vintage_2_0: THREE.Mesh;
//     Plane014_vintage_2_0: THREE.Mesh;
//     Plane011_vintage_2_0: THREE.Mesh;
//     Plane002_white_0: THREE.Mesh;
//     Plane008_white_0: THREE.Mesh;
//     Plane013_white_0: THREE.Mesh;
//     Plane015_white_0: THREE.Mesh;
//     Plane016_vintage_2_0: THREE.Mesh;
//     Plane017_white_0: THREE.Mesh;
//     Plane018_vintage_2_0: THREE.Mesh;
//     Plane019_vintage_2_0: THREE.Mesh;
//     Plane020_vintage_2_0: THREE.Mesh;
//     Plane021_vintage_2_0: THREE.Mesh;
//     Plane022_vintage_2_0: THREE.Mesh;
//     kewboard_vintage_2_0: THREE.Mesh;
//     kewboard_white_0: THREE.Mesh;
//     cpu001_gray_metallic_0: THREE.Mesh;
//   };
//   materials: {
//     gray: THREE.MeshStandardMaterial;
//     vintage_2: THREE.MeshStandardMaterial;
//     ["white.001"]: THREE.MeshStandardMaterial;
//     screen: THREE.MeshStandardMaterial;
//     black: THREE.MeshStandardMaterial;
//     white: THREE.MeshStandardMaterial;
//     gray_metallic: THREE.MeshStandardMaterial;
//     metallic: THREE.MeshStandardMaterial;
//     green: THREE.MeshStandardMaterial;
//     gray_stiker: THREE.MeshStandardMaterial;
//     vintage_1: THREE.MeshStandardMaterial;
//   };
// };
//
// // Create default materials with specific colours
// const createDefaultMaterials = () => ({
//   gray: new THREE.MeshStandardMaterial({ color: "#808080", roughness: 0.5 }),
//   vintage_2: new THREE.MeshStandardMaterial({
//     color: "#d4c4a8",
//     roughness: 0.7,
//   }),
//   "white.001": new THREE.MeshStandardMaterial({
//     color: "#ffffff",
//     roughness: 0.2,
//   }),
//   screen: new THREE.MeshStandardMaterial({
//     color: "#000000",
//     emissive: "#103060",
//     roughness: 0.1,
//   }),
//   black: new THREE.MeshStandardMaterial({ color: "#000000", roughness: 0.5 }),
//   white: new THREE.MeshStandardMaterial({ color: "#ffffff", roughness: 0.3 }),
//   gray_metallic: new THREE.MeshStandardMaterial({
//     color: "#a0a0a0",
//     metalness: 0.8,
//     roughness: 0.2,
//   }),
//   metallic: new THREE.MeshStandardMaterial({
//     color: "#c0c0c0",
//     metalness: 1,
//     roughness: 0.1,
//   }),
//   green: new THREE.MeshStandardMaterial({ color: "#00ff00", roughness: 0.5 }),
//   gray_stiker: new THREE.MeshStandardMaterial({
//     color: "#404040",
//     roughness: 0.6,
//   }),
//   vintage_1: new THREE.MeshStandardMaterial({
//     color: "#c0b090",
//     roughness: 0.7,
//   }),
// });
//
// interface ComputerModelProps extends React.HTMLProps<SVGGElement> {
//   setIsScreenVisible: React.Dispatch<React.SetStateAction<boolean>>;
// }
//
// // Export the ComputerModel function component
// export function ComputerModel({
//   setIsScreenVisible,
//   ...props
// }: ComputerModelProps) {
//   const { nodes } = useGLTF("/computerModel.glb") as GLTFResult;
//   const defaultMaterials = createDefaultMaterials();
//
//   const handleScreenClick = () => {
//     console.log("Screen mesh clicked!");
//     setIsScreenVisible(true);
//   };
//
//   return (
//     <group {...props} dispose={null}>
//       <group
//         position={[-0.491, 14.798, 0]}
//         rotation={[-Math.PI / 2, 0, 0]}
//         scale={0.002}
//       >
//         <group rotation={[Math.PI / 2, 0, 0]}>
//           <group
//             position={[0, 222.199, 0]}
//             rotation={[-Math.PI / 2, 0, 0]}
//             scale={100}
//           >
//             <mesh
//               geometry={nodes.monitor_gray_0.geometry}
//               material={defaultMaterials.gray}
//             />
//             <mesh
//               geometry={nodes.monitor_vintage_2_0.geometry}
//               material={defaultMaterials.vintage_2}
//             />
//             <mesh
//               geometry={nodes.monitor_white001_0.geometry}
//               material={defaultMaterials["white.001"]}
//             />
//             <mesh
//               geometry={nodes.monitor_screen_0.geometry}
//               material={defaultMaterials.screen}
//               onClick={handleScreenClick}
//             />
//             <mesh
//               geometry={nodes.monitor_black_0.geometry}
//               material={defaultMaterials.black}
//             />
//           </group>
//           {/* CPU Group */}
//           <group
//             position={[12.124, 26.489, -9.714]}
//             rotation={[-Math.PI / 2, 0, 0]}
//             scale={100}
//           >
//             <mesh
//               geometry={nodes.cpu_white_0.geometry}
//               material={defaultMaterials.white}
//             />
//             <mesh
//               geometry={nodes.cpu_gray_metallic_0.geometry}
//               material={defaultMaterials.gray_metallic}
//             />
//             <mesh
//               geometry={nodes.cpu_metallic_0.geometry}
//               material={defaultMaterials.metallic}
//             />
//             <mesh
//               geometry={nodes.cpu_gray_0.geometry}
//               material={defaultMaterials.gray}
//             />
//             <mesh
//               geometry={nodes.cpu_green_0.geometry}
//               material={defaultMaterials.green}
//             />
//             <mesh
//               geometry={nodes.cpu_gray_stiker_0.geometry}
//               material={defaultMaterials.gray_stiker}
//             />
//           </group>
//           {/* Keyboard Group */}
//           <group
//             position={[314.53, 2.767, 10.713]}
//             rotation={[-Math.PI / 2, 0.22, 0]}
//             scale={[100, 179.37, 100]}
//           >
//             <group
//               position={[-0.816, 0.944, 0.182]}
//               rotation={[0, -1.516, 0]}
//               scale={[1, 0.558, 1]}
//             >
//               <mesh
//                 geometry={nodes.cpu003_green_0.geometry}
//                 material={defaultMaterials.green}
//               />
//               <mesh
//                 geometry={nodes.cpu003_gray_stiker_0.geometry}
//                 material={defaultMaterials.gray_stiker}
//               />
//             </group>
//             <mesh
//               geometry={nodes.kewboard_vintage_2_0.geometry}
//               material={defaultMaterials.vintage_2}
//             />
//             <mesh
//               geometry={nodes.kewboard_white_0.geometry}
//               material={defaultMaterials.white}
//             />
//             {/* Keyboard keys */}
//             {[
//               {
//                 node: nodes.Plane001_vintage_2_0,
//                 pos: [-0.468, -0.848, 0.224],
//               },
//               {
//                 node: nodes.Plane003_vintage_2_0,
//                 pos: [-0.468, -0.756, 0.224],
//               },
//               { node: nodes.Plane004_white001_0, pos: [-0.468, -0.629, 0.224] },
//               // ... Add other keyboard keys here
//             ].map((key, index) => (
//               <mesh
//                 key={index}
//                 geometry={key.node.geometry}
//                 material={defaultMaterials.vintage_2}
//                 position={key.pos}
//                 scale={0.106}
//               />
//             ))}
//           </group>
//           {/* Floppy drives and other components */}
//           <mesh
//             geometry={nodes.flopy_vintage_1_0.geometry}
//             material={defaultMaterials.vintage_1}
//             position={[82.4, 26.742, -9.735]}
//             rotation={[-Math.PI / 2, 0, 0]}
//             scale={100}
//           />
//           <mesh
//             geometry={nodes.Cube_screen_0.geometry}
//             material={defaultMaterials.screen}
//             position={[76.322, 223.241, -89.253]}
//             rotation={[-Math.PI / 2, -0.081, 0]}
//             scale={[67.645, 70.66, 62.739]}
//             onClick={handleScreenClick}
//           />
//           <mesh
//             geometry={nodes.vent_monitor_gray_0.geometry}
//             material={defaultMaterials.gray}
//             position={[0, 222.307, 0]}
//             rotation={[-Math.PI / 2, 0, 0]}
//             scale={100}
//           />
//         </group>
//       </group>
//     </group>
//   );
// }
//
// useGLTF.preload("/computerModel.glb");

// TEST3
// import React from "react";
// import * as THREE from "three";
// import { useGLTF } from "@react-three/drei";
// import { GLTF } from "three-stdlib";
//
// // Type definitions for GLTF and Props
// type GLTFResult = GLTF & {
//   nodes: Record<string, THREE.Mesh>;
//   materials: Record<string, THREE.MeshStandardMaterial>;
// };
//
// interface ComputerModelProps extends React.HTMLProps<SVGGElement> {
//   setIsScreenVisible: React.Dispatch<React.SetStateAction<boolean>>;
// }
//
// // Default materials creation
// const createDefaultMaterials = () => ({
//   gray: new THREE.MeshStandardMaterial({ color: "#808080", roughness: 0.5 }),
//   vintage_2: new THREE.MeshStandardMaterial({
//     color: "#d4c4a8",
//     roughness: 0.7,
//   }),
//   "white.001": new THREE.MeshStandardMaterial({
//     color: "#ffffff",
//     roughness: 0.2,
//   }),
//   screen: new THREE.MeshStandardMaterial({
//     color: "#000000",
//     emissive: "#103060",
//     roughness: 0.1,
//   }),
//   black: new THREE.MeshStandardMaterial({ color: "#000000", roughness: 0.5 }),
//   white: new THREE.MeshStandardMaterial({ color: "#ffffff", roughness: 0.3 }),
//   gray_metallic: new THREE.MeshStandardMaterial({
//     color: "#a0a0a0",
//     metalness: 0.8,
//     roughness: 0.2,
//   }),
//   metallic: new THREE.MeshStandardMaterial({
//     color: "#c0c0c0",
//     metalness: 1,
//     roughness: 0.1,
//   }),
//   green: new THREE.MeshStandardMaterial({ color: "#00ff00", roughness: 0.5 }),
//   gray_sticker: new THREE.MeshStandardMaterial({
//     color: "#404040",
//     roughness: 0.6,
//   }),
//   vintage_1: new THREE.MeshStandardMaterial({
//     color: "#c0b090",
//     roughness: 0.7,
//   }),
// });
//
// export const ComputerModel: React.FC<ComputerModelProps> = ({
//   setIsScreenVisible,
//   ...props
// }) => {
//   const { nodes } = useGLTF("/computerModel.glb") as GLTFResult;
//   const defaultMaterials = createDefaultMaterials();
//
//   const handleScreenClick = (event: React.MouseEvent) => {
//     console.log("Screen mesh clicked!", event);
//     setIsScreenVisible(true);
//   };
//
//   return (
//     <group {...props} dispose={null}>
//       <group
//         position={[-0.491, 14.798, 0]}
//         rotation={[-Math.PI / 2, 0, 0]}
//         scale={0.002}
//       >
//         <group rotation={[Math.PI / 2, 0, 0]}>
//           <group
//             position={[0, 222.199, 0]}
//             rotation={[-Math.PI / 2, 0, 0]}
//             scale={100}
//           >
//             <mesh
//               geometry={nodes.monitor_gray_0.geometry}
//               material={defaultMaterials.gray}
//             />
//             <mesh
//               geometry={nodes.monitor_vintage_2_0.geometry}
//               material={defaultMaterials.vintage_2}
//             />
//             <mesh
//               geometry={nodes.monitor_white001_0.geometry}
//               material={defaultMaterials["white.001"]}
//             />
//             <mesh
//               geometry={nodes.monitor_screen_0.geometry}
//               material={defaultMaterials.screen}
//               onClick={handleScreenClick}
//             />
//             <mesh
//               geometry={nodes.monitor_black_0.geometry}
//               material={defaultMaterials.black}
//             />
//           </group>
//           <group
//             position={[12.124, 26.489, -9.714]}
//             rotation={[-Math.PI / 2, 0, 0]}
//             scale={100}
//           >
//             <mesh
//               geometry={nodes.cpu_white_0.geometry}
//               material={defaultMaterials.white}
//             />
//             <mesh
//               geometry={nodes.cpu_gray_metallic_0.geometry}
//               material={defaultMaterials.gray_metallic}
//             />
//             <mesh
//               geometry={nodes.cpu_metallic_0.geometry}
//               material={defaultMaterials.metallic}
//             />
//             <mesh
//               geometry={nodes.cpu_gray_0.geometry}
//               material={defaultMaterials.gray}
//             />
//             <mesh
//               geometry={nodes.cpu_green_0.geometry}
//               material={defaultMaterials.green}
//             />
//             <mesh
//               geometry={nodes.cpu_gray_sticker_0.geometry}
//               material={defaultMaterials.gray_sticker}
//             />
//           </group>
//           <group
//             position={[314.53, 2.767, 10.713]}
//             rotation={[-Math.PI / 2, 0.22, 0]}
//             scale={[100, 179.37, 100]}
//           >
//             <mesh
//               geometry={nodes.kewboard_vintage_2_0.geometry}
//               material={defaultMaterials.vintage_2}
//             />
//             <mesh
//               geometry={nodes.kewboard_white_0.geometry}
//               material={defaultMaterials.white}
//             />
//           </group>
//           <mesh
//             geometry={nodes.Cube_screen_0.geometry}
//             material={defaultMaterials.screen}
//             position={[76.322, 223.241, -89.253]}
//             rotation={[-Math.PI / 2, -0.081, 0]}
//             scale={[67.645, 70.66, 62.739]}
//             onClick={handleScreenClick}
//           />
//         </group>
//       </group>
//     </group>
//   );
// };
//
// useGLTF.preload("/computerModel.glb");

// TEST4
// ComputerModel.tsx
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import React, { useState } from "react";
import ComputerScreen from "./ComputerScreen";

type GLTFResult = GLTF & {
  nodes: {
    monitor_gray_0: THREE.Mesh;
    monitor_vintage_2_0: THREE.Mesh;
    monitor_white001_0: THREE.Mesh;
    monitor_screen_0: THREE.Mesh;
    monitor_black_0: THREE.Mesh;
    cpu_white_0: THREE.Mesh;
    cpu_gray_metallic_0: THREE.Mesh;
    cpu_metallic_0: THREE.Mesh;
    cpu_gray_0: THREE.Mesh;
    cpu_green_0: THREE.Mesh;
    cpu_gray_stiker_0: THREE.Mesh;
    flopy_vintage_1_0: THREE.Mesh;
    Cube_screen_0: THREE.Mesh;
    flopy001_vintage_1_0: THREE.Mesh;
    flopy002_vintage_1_0: THREE.Mesh;
    vent_monitor_gray_0: THREE.Mesh;
    cpu003_green_0: THREE.Mesh;
    cpu003_gray_stiker_0: THREE.Mesh;
    Plane001_vintage_2_0: THREE.Mesh;
    Plane003_vintage_2_0: THREE.Mesh;
    Plane004_white001_0: THREE.Mesh;
    Plane005_white_0: THREE.Mesh;
    Plane006_vintage_2_0: THREE.Mesh;
    Plane007_white_0: THREE.Mesh;
    Plane009_white001_0: THREE.Mesh;
    Plane010_vintage_2_0: THREE.Mesh;
    Plane012_vintage_2_0: THREE.Mesh;
    Plane014_vintage_2_0: THREE.Mesh;
    Plane011_vintage_2_0: THREE.Mesh;
    Plane002_white_0: THREE.Mesh;
    Plane008_white_0: THREE.Mesh;
    Plane013_white_0: THREE.Mesh;
    Plane015_white_0: THREE.Mesh;
    Plane016_vintage_2_0: THREE.Mesh;
    Plane017_white_0: THREE.Mesh;
    Plane018_vintage_2_0: THREE.Mesh;
    Plane019_vintage_2_0: THREE.Mesh;
    Plane020_vintage_2_0: THREE.Mesh;
    Plane021_vintage_2_0: THREE.Mesh;
    Plane022_vintage_2_0: THREE.Mesh;
    kewboard_vintage_2_0: THREE.Mesh;
    kewboard_white_0: THREE.Mesh;
    cpu001_gray_metallic_0: THREE.Mesh;
  };
  materials: {
    gray: THREE.MeshStandardMaterial;
    vintage_2: THREE.MeshStandardMaterial;
    ["white.001"]: THREE.MeshStandardMaterial;
    screen: THREE.MeshStandardMaterial;
    black: THREE.MeshStandardMaterial;
    white: THREE.MeshStandardMaterial;
    gray_metallic: THREE.MeshStandardMaterial;
    metallic: THREE.MeshStandardMaterial;
    green: THREE.MeshStandardMaterial;
    gray_stiker: THREE.MeshStandardMaterial;
    vintage_1: THREE.MeshStandardMaterial;
  };
};

const createDefaultMaterials = () => ({
  gray: new THREE.MeshStandardMaterial({ color: "#808080", roughness: 0.5 }),
  vintage_2: new THREE.MeshStandardMaterial({
    color: "#d4c4a8",
    roughness: 0.7,
  }),
  "white.001": new THREE.MeshStandardMaterial({
    color: "#ffffff",
    roughness: 0.2,
  }),
  screen: new THREE.MeshStandardMaterial({
    color: "#000000",
    emissive: "#103060",
    roughness: 0.1,
  }),
  black: new THREE.MeshStandardMaterial({ color: "#000000", roughness: 0.5 }),
  white: new THREE.MeshStandardMaterial({ color: "#ffffff", roughness: 0.3 }),
  gray_metallic: new THREE.MeshStandardMaterial({
    color: "#a0a0a0",
    metalness: 0.8,
    roughness: 0.2,
  }),
  metallic: new THREE.MeshStandardMaterial({
    color: "#c0c0c0",
    metalness: 1,
    roughness: 0.1,
  }),
  green: new THREE.MeshStandardMaterial({ color: "#00ff00", roughness: 0.5 }),
  gray_stiker: new THREE.MeshStandardMaterial({
    color: "#404040",
    roughness: 0.6,
  }),
  vintage_1: new THREE.MeshStandardMaterial({
    color: "#c0b090",
    roughness: 0.7,
  }),
});

interface ComputerModelProps {
  setIsScreenVisible?: React.Dispatch<React.SetStateAction<boolean>>;
}

// Complete keyboard key mapping
const keyboardKeys = [
  { node: "Plane001_vintage_2_0", pos: [-0.468, -0.848, 0.224] },
  { node: "Plane003_vintage_2_0", pos: [-0.468, -0.756, 0.224] },
  { node: "Plane004_white001_0", pos: [-0.468, -0.629, 0.224] },
  { node: "Plane005_white_0", pos: [-0.468, -0.529, 0.224] },
  { node: "Plane006_vintage_2_0", pos: [-0.368, -0.848, 0.224] },
  { node: "Plane007_white_0", pos: [-0.368, -0.756, 0.224] },
  { node: "Plane009_white001_0", pos: [-0.368, -0.629, 0.224] },
  { node: "Plane010_vintage_2_0", pos: [-0.368, -0.529, 0.224] },
  { node: "Plane012_vintage_2_0", pos: [-0.268, -0.848, 0.224] },
  { node: "Plane014_vintage_2_0", pos: [-0.268, -0.756, 0.224] },
  { node: "Plane011_vintage_2_0", pos: [-0.268, -0.629, 0.224] },
  { node: "Plane002_white_0", pos: [-0.268, -0.529, 0.224] },
  { node: "Plane008_white_0", pos: [-0.168, -0.848, 0.224] },
  { node: "Plane013_white_0", pos: [-0.168, -0.756, 0.224] },
  { node: "Plane015_white_0", pos: [-0.168, -0.629, 0.224] },
  { node: "Plane016_vintage_2_0", pos: [-0.168, -0.529, 0.224] },
  { node: "Plane017_white_0", pos: [-0.068, -0.848, 0.224] },
  { node: "Plane018_vintage_2_0", pos: [-0.068, -0.756, 0.224] },
  { node: "Plane019_vintage_2_0", pos: [-0.068, -0.629, 0.224] },
  { node: "Plane020_vintage_2_0", pos: [-0.068, -0.529, 0.224] },
  { node: "Plane021_vintage_2_0", pos: [0.032, -0.848, 0.224] },
  { node: "Plane022_vintage_2_0", pos: [0.032, -0.756, 0.224] },
];

export function ComputerModel({
  setIsScreenVisible = () => {},
}: ComputerModelProps) {
  const { nodes } = useGLTF("/computerModel.glb") as GLTFResult;
  const defaultMaterials = createDefaultMaterials();
  const [isPowerOn, setIsPowerOn] = useState(true);

  const handleScreenClick = () => {
    setIsPowerOn((prev) => !prev);
    setIsScreenVisible((prev) => !prev);
    console.log("Screen power:", !isPowerOn);
  };

  return (
    <group dispose={null}>
      <group
        position={[-0.491, 14.798, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.002}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          {/* Monitor Group */}
          <group
            position={[0, 222.199, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.monitor_gray_0.geometry}
              material={defaultMaterials.gray}
            />
            <mesh
              geometry={nodes.monitor_vintage_2_0.geometry}
              material={defaultMaterials.vintage_2}
            />
            <mesh
              geometry={nodes.monitor_white001_0.geometry}
              material={defaultMaterials["white.001"]}
            />
            <ComputerScreen
              geometry={nodes.monitor_screen_0.geometry}
              material={defaultMaterials.screen}
              position={[0, 0.5, 0.2]}
              onClick={handleScreenClick}
            />
            <mesh
              geometry={nodes.monitor_black_0.geometry}
              material={defaultMaterials.black}
            />
          </group>

          {/* CPU Group */}
          <group
            position={[12.124, 26.489, -9.714]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.cpu_white_0.geometry}
              material={defaultMaterials.white}
            />
            <mesh
              geometry={nodes.cpu_gray_metallic_0.geometry}
              material={defaultMaterials.gray_metallic}
            />
            <mesh
              geometry={nodes.cpu_metallic_0.geometry}
              material={defaultMaterials.metallic}
            />
            <mesh
              geometry={nodes.cpu_gray_0.geometry}
              material={defaultMaterials.gray}
            />
            <mesh
              geometry={nodes.cpu_green_0.geometry}
              material={defaultMaterials.green}
            />
            <mesh
              geometry={nodes.cpu_gray_stiker_0.geometry}
              material={defaultMaterials.gray_stiker}
            />
          </group>

          {/* Keyboard Group */}
          <group
            position={[314.53, 2.767, 10.713]}
            rotation={[-Math.PI / 2, 0.22, 0]}
            scale={[100, 179.37, 100]}
          >
            <group
              position={[-0.816, 0.944, 0.182]}
              rotation={[0, -1.516, 0]}
              scale={[1, 0.558, 1]}
            >
              <mesh
                geometry={nodes.cpu003_green_0.geometry}
                material={defaultMaterials.green}
              />
              <mesh
                geometry={nodes.cpu003_gray_stiker_0.geometry}
                material={defaultMaterials.gray_stiker}
              />
            </group>
            <mesh
              geometry={nodes.kewboard_vintage_2_0.geometry}
              material={defaultMaterials.vintage_2}
            />
            <mesh
              geometry={nodes.kewboard_white_0.geometry}
              material={defaultMaterials.white}
            />
            {/* Keyboard keys */}
            {keyboardKeys.map((key, index) => (
              <mesh
                key={index}
                geometry={nodes[key.node as keyof typeof nodes].geometry}
                material={defaultMaterials.vintage_2}
                position={key.pos}
                scale={0.106}
              />
            ))}
          </group>

          {/* Floppy drives and other components */}
          <mesh
            geometry={nodes.flopy_vintage_1_0.geometry}
            material={defaultMaterials.vintage_1}
            position={[82.4, 26.742, -9.735]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.flopy001_vintage_1_0.geometry}
            material={defaultMaterials.vintage_1}
            position={[82.4, 46.742, -9.735]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.flopy002_vintage_1_0.geometry}
            material={defaultMaterials.vintage_1}
            position={[82.4, 66.742, -9.735]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
          <mesh
            geometry={nodes.vent_monitor_gray_0.geometry}
            material={defaultMaterials.gray}
            position={[0, 222.307, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />

          {/* Additional CPU components */}
          <mesh
            geometry={nodes.cpu001_gray_metallic_0.geometry}
            material={defaultMaterials.gray_metallic}
            position={[12.124, 26.489, -9.714]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={100}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/computerModel.glb");
