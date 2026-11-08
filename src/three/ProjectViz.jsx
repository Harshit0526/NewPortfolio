import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, RoundedBox, Line } from "@react-three/drei";
import * as THREE from "three";
import { useScrollStore } from "./scrollStore";
import { projects } from "../data/projects";

export default function ProjectViz() {
  const layerRefs = useRef([]);
  const integrationRefs = useRef([]);
  const project = projects[0];

  useFrame((_, delta) => {
    const progress = useScrollStore.getState().progress;

    const activeWindow =
      progress >= 0.42 && progress <= 0.72
        ? Math.sin(((progress - 0.42) / 0.3) * Math.PI)
        : 0;

    const expansionFactor = 0.55 + activeWindow * 0.65;
    const damp = 1 - Math.exp(-6 * delta);

    project.architectureNodes.forEach((node, idx) => {
      const ref = layerRefs.current[idx];
      if (ref) {
        const targetY = node.yOffset * expansionFactor;
        ref.position.y = THREE.MathUtils.lerp(ref.position.y, targetY, damp);
      }

      if (node.integrations) {
        node.integrations.forEach((integ, iIdx) => {
          const iref = integrationRefs.current[iIdx];
          if (iref) {
            const targetX = integ.xOffset * (0.75 + activeWindow * 0.35);
            iref.position.x = THREE.MathUtils.lerp(iref.position.x, targetX, damp);
          }
        });
      }
    });
  });

  return (
    <group position={[6.5, 0.3, 0]}>
      <Line
        points={[
          [0, -2.2, 0],
          [0, 2.2, 0],
        ]}
        color="#FF4D00"
        lineWidth={1.5}
        transparent
        opacity={0.45}
      />

      {project.architectureNodes.map((node, index) => (
        <group
          key={node.id}
          ref={(el) => (layerRefs.current[index] = el)}
          position={[0, node.yOffset * 0.55, 0]}
        >
          <RoundedBox args={[3.1, 0.22, 1.5]} radius={0.03} smoothness={4}>
            <meshStandardMaterial
              color="#14141B"
              metalness={0.7}
              roughness={0.25}
              emissive={node.color === "#FF4D00" ? "#FF4D00" : "#000000"}
              emissiveIntensity={node.color === "#FF4D00" ? 0.12 : 0}
            />
          </RoundedBox>

          <Html
            transform
            distanceFactor={2.2}
            position={[0, 0, 0.77]}
            className="w-[460px] bg-[#0B0B0E]/95 border border-zinc-800 px-4 py-2.5 rounded pointer-events-none select-none"
          >
            <div className="flex items-center justify-between font-mono text-[10px] text-[#FF4D00]">
              <span>{node.layer}</span>
              <span>VIASTASTORE // 0{index + 1}</span>
            </div>
            <div className="font-display font-bold text-sm text-white mt-0.5">{node.title}</div>
            <div className="font-sans text-[11px] text-zinc-400">{node.detail}</div>
          </Html>

          {node.integrations &&
            node.integrations.map((integ, iIdx) => (
              <group
                key={integ.id}
                ref={(el) => (integrationRefs.current[iIdx] = el)}
                position={[integ.xOffset * 0.75, 0, 0]}
              >
                <Line
                  points={[
                    [0, 0, 0],
                    [integ.xOffset > 0 ? -0.9 : 0.9, 0, 0],
                  ]}
                  color="#FF4D00"
                  lineWidth={1}
                />
                <RoundedBox args={[1.65, 0.28, 0.9]} radius={0.03} smoothness={4}>
                  <meshStandardMaterial color="#191312" metalness={0.6} roughness={0.3} />
                </RoundedBox>
                <Html
                  transform
                  distanceFactor={2.2}
                  position={[0, 0, 0.47]}
                  className="w-[260px] bg-[#0B0B0E] border border-[#FF4D00]/60 px-3 py-2 rounded pointer-events-none select-none"
                >
                  <div className="font-mono text-[9px] text-[#FF4D00] uppercase tracking-wider">
                    INTEGRATION MODULE
                  </div>
                  <div className="font-display font-semibold text-xs text-white">{integ.title}</div>
                  <div className="font-sans text-[10px] text-zinc-400 leading-tight mt-0.5">
                    {integ.detail}
                  </div>
                </Html>
              </group>
            ))}
        </group>
      ))}
    </group>
  );
}
