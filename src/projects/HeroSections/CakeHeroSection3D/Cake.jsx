import { useGLTF } from "@react-three/drei";
import cakeUrl from "./assets/cake.glb";
export default function Cake(props) {
  const { scene } = useGLTF(cakeUrl);
  return <primitive object={scene} {...props} />;
}
