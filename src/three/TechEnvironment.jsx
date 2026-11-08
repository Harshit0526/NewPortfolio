import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, RoundedBox } from "@react-three/drei";
import { skills } from "../data/skills";

export default function TechEnvironment() {
  const groupRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.25) * 0.08;
    }
  });

  return (
    <group ref={groupRef} position={[0, 1.1, -9.5]}>
      {skills.map((group, idx) => {
        const col = (idx % 4) - 1.5;
        const row = Math.floor(idx / 4) - 0.5;
        const x = col * 2.3;
        const y = -row * 1.45;
        const z = idx % 2 === 0 ? 0.3 : -0.3;

        return (
          <group key={group.category} position={[x, y, z]}>
            <RoundedBox args={[1.95, 0.95, 0.12]} radius={0.02} smoothness={4}>
              <meshStandardMaterial color="#121217" metalness={0.7} roughness={0.25} />
            </RoundedBox>
            <Html
              transform
              distanceFactor={2.4}
              position={[0, 0, 0.08]}
              className="w-[310px] p-3 bg-[#0B0B0E]/95 border border-zinc-800 rounded pointer-events-none select-none"
            >
              <div className="font-mono text-[10px] text-[#FF4D00] uppercase tracking-widest mb-1">
                0{idx + 1} // {group.category}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-0.5 text-[11px] font-mono bg-zinc-900 text-zinc-200 border border-zinc-800 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
}
