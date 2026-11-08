import * as THREE from "three";

export const CAMERA_KEYFRAMES = [
  {
    progress: 0.0,
    position: new THREE.Vector3(0, 2.6, 6.8),
    target: new THREE.Vector3(0, 0.4, 0),
    fov: 45,
  },
  {
    progress: 0.15,
    position: new THREE.Vector3(0, 1.35, 3.1),
    target: new THREE.Vector3(0, 0.55, 0),
    fov: 42,
  },
  {
    progress: 0.30,
    position: new THREE.Vector3(0, 0.72, 1.28),
    target: new THREE.Vector3(0, 0.64, -0.25),
    fov: 36,
  },
  {
    progress: 0.45,
    position: new THREE.Vector3(3.2, 1.4, 2.2),
    target: new THREE.Vector3(6.5, 0.5, 0),
    fov: 44,
  },
  {
    progress: 0.60,
    position: new THREE.Vector3(6.5, 0.6, 5.2),
    target: new THREE.Vector3(6.5, 0.0, 0),
    fov: 45,
  },
  {
    progress: 0.75,
    position: new THREE.Vector3(0, 1.2, -5.2),
    target: new THREE.Vector3(0, 1.0, -9.5),
    fov: 50,
  },
  {
    progress: 0.90,
    position: new THREE.Vector3(-4.5, 2.2, -2.5),
    target: new THREE.Vector3(0, 0.5, -2.0),
    fov: 46,
  },
  {
    progress: 1.0,
    position: new THREE.Vector3(0, 6.5, 11.0),
    target: new THREE.Vector3(1.5, 0.0, -2.0),
    fov: 52,
  },
];

const smoothstep = (min, max, value) => {
  const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
  return x * x * (3 - 2 * x);
};

export function interpolateCamera(progress, outPos, outTarget) {
  const clamped = Math.max(0, Math.min(1, progress));

  let startIdx = 0;
  for (let i = 0; i < CAMERA_KEYFRAMES.length - 1; i++) {
    if (clamped >= CAMERA_KEYFRAMES[i].progress && clamped <= CAMERA_KEYFRAMES[i + 1].progress) {
      startIdx = i;
      break;
    }
  }

  const startFrame = CAMERA_KEYFRAMES[startIdx];
  const endFrame = CAMERA_KEYFRAMES[startIdx + 1] || startFrame;

  const t =
    startFrame.progress === endFrame.progress
      ? 0
      : smoothstep(startFrame.progress, endFrame.progress, clamped);

  outPos.lerpVectors(startFrame.position, endFrame.position, t);
  outTarget.lerpVectors(startFrame.target, endFrame.target, t);
  const fov = THREE.MathUtils.lerp(startFrame.fov, endFrame.fov, t);

  return fov;
}
