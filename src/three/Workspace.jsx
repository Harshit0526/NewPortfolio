import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, RoundedBox } from "@react-three/drei";
// import { useGLTF } from "@react-three/drei"; // Uncomment when swapping in a custom GLB model

export default function Workspace() {
  const floatingPanelLeft = useRef();
  const floatingPanelRight = useRef();

  /* ============================================================================
   * OPTIONAL GLB MODEL SWAP POINT
   * To replace the procedural laptop/desk with a custom .glb asset later:
   * 1. Place `workspace.glb` in `/public/models/workspace.glb`
   * 2. Uncomment `useGLTF` import above and the lines below:
   * const { scene } = useGLTF("/models/workspace.glb");
   * return <primitive object={scene} position={[0, 0, 0]} />;
   * ============================================================================ */

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (floatingPanelLeft.current) {
      floatingPanelLeft.current.position.y = 0.85 + Math.sin(t * 1.4) * 0.04;
    }
    if (floatingPanelRight.current) {
      floatingPanelRight.current.position.y = 0.9 + Math.cos(t * 1.2) * 0.04;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <RoundedBox args={[4.6, 0.08, 2.2]} radius={0.02} smoothness={4} position={[0, -0.04, 0]}>
        <meshStandardMaterial color="#111115" metalness={0.6} roughness={0.3} />
      </RoundedBox>

      <mesh position={[0, 0.002, 1.09]}>
        <boxGeometry args={[4.58, 0.006, 0.01]} />
        <meshBasicMaterial color="#FF4D00" />
      </mesh>

      <mesh position={[-2.1, -0.75, 0]}>
        <boxGeometry args={[0.08, 1.4, 1.8]} />
        <meshStandardMaterial color="#09090C" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[2.1, -0.75, 0]}>
        <boxGeometry args={[0.08, 1.4, 1.8]} />
        <meshStandardMaterial color="#09090C" metalness={0.8} roughness={0.2} />
      </mesh>

      <RoundedBox args={[1.3, 0.04, 0.88]} radius={0.01} smoothness={4} position={[0, 0.02, 0.15]}>
        <meshStandardMaterial color="#1C1C22" metalness={0.85} roughness={0.2} />
      </RoundedBox>

      <mesh position={[0, 0.042, 0.1]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1.14, 0.45]} />
        <meshStandardMaterial color="#0B0B0E" roughness={0.8} />
      </mesh>

      <mesh position={[0, 0.042, 0.44]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.38, 0.2]} />
        <meshStandardMaterial color="#141419" metalness={0.5} roughness={0.3} />
      </mesh>

      <group position={[0, 0.04, -0.28]} rotation={[-0.18, 0, 0]}>
        <RoundedBox args={[1.3, 0.84, 0.025]} radius={0.01} smoothness={4} position={[0, 0.42, 0]}>
          <meshStandardMaterial color="#18181E" metalness={0.85} roughness={0.2} />
        </RoundedBox>

        <mesh position={[0, 0.42, 0.014]}>
          <planeGeometry args={[1.22, 0.76]} />
          <meshBasicMaterial color="#09090D" />
        </mesh>

        <Html
          transform
          occlude="blending"
          distanceFactor={0.62}
          position={[0, 0.42, 0.016]}
          className="w-[760px] h-[470px] bg-[#0B0B0E] border border-[#27272A] rounded p-5 font-mono text-[11px] leading-[1.55] text-zinc-300 select-none overflow-hidden shadow-2xl"
        >
          <div className="flex items-center justify-between border-b border-zinc-800 pb-2 mb-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF4D00]"></span>
              <span className="text-zinc-400 font-semibold">OrderService.java — Viastastore</span>
            </div>
            <span className="text-[10px] text-[#FF4D00] tracking-widest uppercase">
              Spring Boot // @Transactional
            </span>
          </div>
          <pre className="text-left overflow-hidden">
            <code>
              <span className="text-[#FF4D00]">@Service</span>{"\n"}
              <span className="text-zinc-400">public class</span> <span className="text-white font-semibold">ViastastoreOrderService</span> {"{"}{"\n\n"}
              {"  "}<span className="text-[#FF4D00]">@Autowired</span>{"\n"}
              {"  "}<span className="text-zinc-400">private</span> OrderRepository orderRepo;{" "}
              <span className="text-zinc-500">// 8 JPA Entities on MySQL + HikariCP</span>{"\n\n"}
              {"  "}<span className="text-[#FF4D00]">@Transactional</span>{"\n"}
              {"  "}<span className="text-zinc-400">public</span> OrderResponse verifyAndProcessOrder(PaymentDTO dto) {"{"}{"\n"}
              {"    "}<span className="text-zinc-500">// Server-side Razorpay signature verification</span>{"\n"}
              {"    "}boolean valid = RazorpaySignature.verify(dto.getOrderId(), dto.getSignature());{"\n"}
              {"    "}<span className="text-zinc-400">if</span> (!valid) <span className="text-zinc-400">throw new</span> SecurityException(<span className="text-amber-400">"Invalid Razorpay Signature"</span>);{"\n\n"}
              {"    "}<span className="text-zinc-500">// 6-Stage Order Lifecycle & Role-Based Access (User, Admin)</span>{"\n"}
              {"    "}Order order = orderRepo.findByRazorpayId(dto.getOrderId());{"\n"}
              {"    "}order.setStage(OrderStage.CONFIRMED);{"\n"}
              {"    "}<span className="text-zinc-400">return</span> OrderMapper.toDTO(orderRepo.save(order));{"\n"}
              {"  }"}{"\n"}
              {"}"}
            </code>
          </pre>
          <div className="mt-3 pt-2 border-t border-zinc-800/80 flex justify-between text-[10px] text-zinc-500">
            <span>ENDPOINTS: ~65 REST / MVC</span>
            <span>VIEWS: 30+ THYMELEAF PAGES</span>
            <span className="text-emerald-400">OTP: JAVAMAIL (5-MIN EXPIRY)</span>
          </div>
        </Html>
      </group>

      <group ref={floatingPanelLeft} position={[-1.35, 0.85, -0.15]} rotation={[0, 0.3, 0]}>
        <mesh>
          <planeGeometry args={[0.95, 0.52]} />
          <meshStandardMaterial color="#121218" transparent opacity={0.85} />
        </mesh>
        <Html transform distanceFactor={0.9} position={[0, 0, 0.01]} className="w-[280px] p-3 font-mono text-[10px] text-zinc-300 pointer-events-none">
          <div className="border-l-2 border-[#FF4D00] pl-2">
            <div className="text-[#FF4D00] uppercase tracking-widest">TRAINING // TECHPILE</div>
            <div className="text-white font-semibold mt-0.5">Summer Trainee – Java Spring Boot</div>
            <div className="text-zinc-400 mt-1">Grade: A++ | ID: TechpileST260932</div>
          </div>
        </Html>
      </group>

      <group ref={floatingPanelRight} position={[1.35, 0.9, -0.15]} rotation={[0, -0.3, 0]}>
        <mesh>
          <planeGeometry args={[0.95, 0.52]} />
          <meshStandardMaterial color="#121218" transparent opacity={0.85} />
        </mesh>
        <Html transform distanceFactor={0.9} position={[0, 0, 0.01]} className="w-[280px] p-3 font-mono text-[10px] text-zinc-300 pointer-events-none">
          <div className="border-l-2 border-zinc-500 pl-2">
            <div className="text-zinc-400 uppercase tracking-widest">ARCHITECTURE // CORE</div>
            <div className="text-white font-semibold mt-0.5">Spring MVC + Data JPA + MySQL</div>
            <div className="text-[#FF4D00] mt-1">HikariCP + @Transactional</div>
          </div>
        </Html>
      </group>
    </group>
  );
}
