import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useScrollStore } from "./scrollStore";
import { interpolateCamera } from "./cameraPath";

export default function CameraRig() {
  const { camera } = useThree();
  const currentPos = useRef(new THREE.Vector3(0, 2.6, 6.8));
  const currentTarget = useRef(new THREE.Vector3(0, 0.4, 0));
  const desiredPos = useRef(new THREE.Vector3());
  const desiredTarget = useRef(new THREE.Vector3());

  useFrame((state, delta) => {
    const progress = useScrollStore.getState().progress;
    const targetFov = interpolateCamera(progress, desiredPos.current, desiredTarget.current);

    const pointerX = state.pointer.x * 0.15;
    const pointerY = state.pointer.y * 0.1;
    desiredPos.current.x += pointerX;
    desiredPos.current.y += pointerY;

    const damp = 1 - Math.exp(-6 * delta);
    currentPos.current.lerp(desiredPos.current, damp);
    currentTarget.current.lerp(desiredTarget.current, damp);

    camera.position.copy(currentPos.current);
    camera.lookAt(currentTarget.current);

    if (Math.abs(camera.fov - targetFov) > 0.05) {
      camera.fov = THREE.MathUtils.lerp(camera.fov, targetFov, damp);
      camera.updateProjectionMatrix();
    }
  });

  return null;
}
