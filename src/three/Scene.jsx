import { Grid, Sparkles } from "@react-three/drei";
import CameraRig from "./CameraRig";
import Workspace from "./Workspace";
import ProjectViz from "./ProjectViz";
import TechEnvironment from "./TechEnvironment";

export default function Scene() {
  return (
    <>
      <color attach="background" args={["#0B0B0E"]} />
      <fog attach="fog" args={["#0B0B0E", 6, 22]} />

      <CameraRig />

      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 8, 5]} intensity={1.2} color="#F4F4F6" />
      <pointLight position={[0, 1.5, 0.5]} intensity={1.6} color="#FF4D00" distance={6} />
      <pointLight position={[6.5, 2.0, 2.0]} intensity={2.0} color="#FF4D00" distance={9} />
      <pointLight position={[0, 2.0, -8.5]} intensity={1.8} color="#FF4D00" distance={9} />

      <Grid
        position={[0, -1.45, 0]}
        args={[40, 40]}
        cellSize={0.75}
        cellThickness={0.5}
        cellColor="#1E1E26"
        sectionSize={3.0}
        sectionThickness={1}
        sectionColor="#2E2E3A"
        fadeDistance={24}
        fadeStrength={1}
      />

      <Sparkles count={90} scale={[18, 8, 22]} size={1.4} speed={0.2} opacity={0.25} color="#FF4D00" />

      <Workspace />
      <ProjectViz />
      <TechEnvironment />
    </>
  );
}
