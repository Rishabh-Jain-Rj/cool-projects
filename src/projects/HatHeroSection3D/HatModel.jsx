import { useGLTF } from "@react-three/drei";
import hatUrl from "./assets/hat.glb";

export default function HatModel(props) {
  const { scene } = useGLTF(hatUrl);

  return <primitive object={scene} {...props} />;
}
