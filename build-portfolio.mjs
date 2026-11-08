// build-portfolio.mjs
// Run with: node build-portfolio.mjs
import fs from "fs";
import path from "path";
import { execSync } from "child_process";

const files = {
  "package.json": JSON.stringify(
    {
      name: "harshit-srivastav-3d-portfolio",
      private: true,
      version: "1.0.0",
      type: "module",
      scripts: {
        dev: "vite",
        build: "vite build",
        preview: "vite preview",
      },
      dependencies: {
        "@react-three/drei": "^9.105.0",
        "@react-three/fiber": "^8.16.0",
        gsap: "^3.12.5",
        "lucide-react": "^0.378.0",
        react: "^18.3.1",
        "react-dom": "^18.3.1",
        three: "^0.164.0",
        zustand: "^4.5.2",
      },
      devDependencies: {
        "@vitejs/plugin-react": "^4.2.1",
        autoprefixer: "^10.4.19",
        postcss: "^8.4.38",
        tailwindcss: "^3.4.3",
        vite: "^5.2.11",
      },
    },
    null,
    2
  ),

  "vite.config.js": `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
`,

  "tailwind.config.js": `/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        charcoal: "#0B0B0E",
        surface: "#121217",
        accent: "#FF4D00",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        sans: ['"Inter"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [],
};
`,

  "postcss.config.js": `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
`,

  "index.html": `<!DOCTYPE html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Harshit Srivastav — Java & Spring Boot Developer</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;600&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">
  </head>
  <body class="bg-[#0B0B0E] text-[#F4F4F6] antialiased selection:bg-[#FF4D00] selection:text-white overflow-x-hidden">
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`,

  "src/index.css": `@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
  .bg-grid-pattern {
    background-size: 40px 40px;
    background-image: 
      linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  }
}

::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background: #0B0B0E;
}
::-webkit-scrollbar-thumb {
  background: #27272A;
}
::-webkit-scrollbar-thumb:hover {
  background: #FF4D00;
}
`,

  "src/data/personal.js": `export const personal = {
  name: "Harshit Srivastav",
  heroTitle: "Java & Spring Boot Developer",
  location: "Lucknow, Uttar Pradesh, India",
  email: "harshitsrivast0526@gmail.com",
  linkedin: "https://linkedin.com/in/harshit-srivastav-28b76a382",
  linkedinHandle: "linkedin.com/in/harshit-srivastav-28b76a382",
  github: "https://github.com/Harshit0526",
  githubHandle: "github.com/Harshit0526",
  tagline:
    "Final-year B.Tech Computer Science & Engineering student aspiring to a Software Development Engineer (SDE) role, with hands-on experience building a full-stack Java application using Spring Boot, Spring MVC, Spring Data JPA, MySQL and REST APIs.",
  summary:
    "Final-year B.Tech Computer Science & Engineering student aspiring to a Software Development Engineer (SDE) role, with hands-on experience building a full-stack Java application using Spring Boot, Spring MVC, Spring Data JPA, MySQL and REST APIs. Strong foundation in data structures, OOP, DBMS and layered application design. Seeking an entry-level SDE, Java Developer or Spring Boot Developer role.",
  resumeUrl: "", // Empty state: Place PDF in /public and add path here
};
`,

  "src/data/experience.js": `export const experience = [
  {
    id: "exp-1",
    company: "Techpile Technology Pvt. Ltd.",
    role: "Summer Trainee – Java Spring Boot",
    period: "Jun 2026 – Jul 2026",
    certificateId: "TechpileST260932",
    grade: "A++",
    highlights: [
      'Completed an industry-oriented Java Spring Boot training and earned an "A++" grade (Certificate ID: TechpileST260932).',
      "Applied layered architecture (controllers, repositories, DTOs, entity models) while building the training project, Viastastore.",
    ],
  },
];
`,

  "src/data/projects.js": `export const projects = [
  {
    id: "viastastore",
    title: "Viastastore",
    subtitle: "Full-Stack E-Commerce Web Application",
    techStack: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Data JPA",
      "Thymeleaf",
      "MySQL",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/Harshit0526/Viastastore",
    githubDisplay: "github.com/Harshit0526/Viastastore",
    liveUrl: "", // Empty state: Not present in resume
    bullets: [
      "Built an e-commerce platform with product browsing, wishlist, cart, checkout and order tracking.",
      "Integrated Razorpay payments with server-side signature verification.",
      "Implemented JavaMail OTP verification (5-minute expiry) for registration and password change.",
      "Designed 8 JPA entities on MySQL and about 65 endpoints using a layered architecture.",
      "Ensured data consistency with Spring @Transactional order processing and HikariCP pooling.",
      "Developed an admin panel with role-based access (User, Admin) and a 6-stage order lifecycle.",
      "Built 30+ Thymeleaf pages using HTML, CSS and JavaScript for the storefront and admin panel.",
    ],
    architectureNodes: [
      {
        id: "frontend",
        layer: "PRESENTATION LAYER",
        title: "30+ Thymeleaf Pages (HTML, CSS, JS)",
        detail: "Storefront (Browse, Wishlist, Cart, Checkout) & Admin Panel (User/Admin RBAC)",
        yOffset: 1.8,
        color: "#FF4D00",
      },
      {
        id: "controllers",
        layer: "WEB / CONTROLLER LAYER",
        title: "Spring MVC Controllers (~65 Endpoints)",
        detail: "REST APIs, Request Routing, DTO Mapping & Role-Based Access Control",
        yOffset: 0.9,
        color: "#F4F4F6",
      },
      {
        id: "services",
        layer: "SERVICE & TRANSACTION LAYER",
        title: "Spring @Transactional Business Logic",
        detail: "6-Stage Order Lifecycle, Cart/Checkout Processing",
        yOffset: 0.0,
        color: "#FF4D00",
        integrations: [
          {
            id: "razorpay",
            title: "Razorpay API",
            detail: "Payments + Server-Side Signature Verification",
            xOffset: -2.6,
          },
          {
            id: "javamail",
            title: "JavaMail OTP",
            detail: "5-Minute Expiry (Registration & Password Change)",
            xOffset: 2.6,
          },
        ],
      },
      {
        id: "persistence",
        layer: "PERSISTENCE LAYER",
        title: "Spring Data JPA & Hibernate",
        detail: "8 JPA Entities, Repositories & HikariCP Connection Pooling",
        yOffset: -0.9,
        color: "#F4F4F6",
      },
      {
        id: "database",
        layer: "DATABASE LAYER",
        title: "MySQL Relational Database",
        detail: "Persistent Storage for Users, Products, Orders & Transactions",
        yOffset: -1.8,
        color: "#FF4D00",
      },
    ],
  },
];
`,

  "src/data/skills.js": `export const skills = [
  {
    category: "Languages",
    items: ["Java", "JavaScript", "SQL"],
  },
  {
    category: "Back End",
    items: ["Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate", "REST APIs", "JavaMail"],
  },
  {
    category: "Front End",
    items: ["HTML", "CSS", "JavaScript", "Bootstrap", "Thymeleaf"],
  },
  {
    category: "Database",
    items: ["MySQL"],
  },
  {
    category: "Computer Science",
    items: ["Data Structures", "OOP", "DBMS", "Operating Systems", "Computer Networks"],
  },
  {
    category: "Concepts",
    items: ["MVC Architecture", "Layered Architecture", "Dependency Injection", "Transaction Management"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Maven", "Eclipse", "VS Code", "Vercel", "Razorpay API"],
  },
  {
    category: "Soft Skills",
    items: ["Problem Solving", "Communication", "Teamwork", "Organizational Skills", "Time Management"],
  },
];
`,

  "src/data/education.js": `export const education = [
  {
    id: "edu-1",
    institution: "Bansal Institute of Engineering & Technology, Lucknow",
    degree: "Bachelor of Technology (B.Tech) – Computer Science & Engineering",
    period: "Expected August 2027",
    score: "CGPA: 8.35 / 10 (up to 6th Sem)",
  },
];
`,

  "src/data/certifications.js": `export const certifications = [
  {
    id: "cert-1",
    title: "Java Spring Boot Summer Training",
    issuer: "Techpile Technology Pvt. Ltd.",
    date: "Jun 2026 – Jul 2026",
    certificateId: "TechpileST260932",
    grade: "A++",
    credentialUrl: "", // Empty state: No verification URL in resume
    certificateImage: "", // Empty state: No certificate image file provided
  },
];
`,

  "src/three/scrollStore.js": `import { create } from "zustand";

export const useScrollStore = create((set) => ({
  progress: 0,
  activeStage: "00 // WORKSPACE_INIT",
  setProgress: (progress) => {
    let stage = "00 // WORKSPACE_INIT";
    if (progress >= 0.9) stage = "06 // SYSTEM_PULLBACK";
    else if (progress >= 0.75) stage = "05 // EDUCATION_&_CONTACT";
    else if (progress >= 0.6) stage = "04 // TECH_STACK_MATRIX";
    else if (progress >= 0.45) stage = "03 // VIASTASTORE_ARCHITECTURE";
    else if (progress >= 0.25) stage = "02 // SPRING_BOOT_RUNTIME";
    else if (progress >= 0.12) stage = "01 // TERMINAL_APPROACH";

    set({ progress, activeStage: stage });
  },
}));
`,

  "src/three/cameraPath.js": `import * as THREE from "three";

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
`,

  "src/three/CameraRig.jsx": `import { useRef } from "react";
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
`,

  "src/three/Workspace.jsx": `import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Html, RoundedBox } from "@react-three/drei";
// import { useGLTF } from "@react-three/drei"; // Uncomment when swapping in a custom GLB model

export default function Workspace() {
  const floatingPanelLeft = useRef();
  const floatingPanelRight = useRef();

  /* ============================================================================
   * OPTIONAL GLB MODEL SWAP POINT
   * To replace the procedural laptop/desk with a custom .glb asset later:
   * 1. Place \`workspace.glb\` in \`/public/models/workspace.glb\`
   * 2. Uncomment \`useGLTF\` import above and the lines below:
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
              <span className="text-[#FF4D00]">@Service</span>{"\\n"}
              <span className="text-zinc-400">public class</span> <span className="text-white font-semibold">ViastastoreOrderService</span> {"{"}{"\\n\\n"}
              {"  "}<span className="text-[#FF4D00]">@Autowired</span>{"\\n"}
              {"  "}<span className="text-zinc-400">private</span> OrderRepository orderRepo;{" "}
              <span className="text-zinc-500">// 8 JPA Entities on MySQL + HikariCP</span>{"\\n\\n"}
              {"  "}<span className="text-[#FF4D00]">@Transactional</span>{"\\n"}
              {"  "}<span className="text-zinc-400">public</span> OrderResponse verifyAndProcessOrder(PaymentDTO dto) {"{"}{"\\n"}
              {"    "}<span className="text-zinc-500">// Server-side Razorpay signature verification</span>{"\\n"}
              {"    "}boolean valid = RazorpaySignature.verify(dto.getOrderId(), dto.getSignature());{"\\n"}
              {"    "}<span className="text-zinc-400">if</span> (!valid) <span className="text-zinc-400">throw new</span> SecurityException(<span className="text-amber-400">"Invalid Razorpay Signature"</span>);{"\\n\\n"}
              {"    "}<span className="text-zinc-500">// 6-Stage Order Lifecycle & Role-Based Access (User, Admin)</span>{"\\n"}
              {"    "}Order order = orderRepo.findByRazorpayId(dto.getOrderId());{"\\n"}
              {"    "}order.setStage(OrderStage.CONFIRMED);{"\\n"}
              {"    "}<span className="text-zinc-400">return</span> OrderMapper.toDTO(orderRepo.save(order));{"\\n"}
              {"  }"}{"\\n"}
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
`,

  "src/three/ProjectViz.jsx": `import { useRef } from "react";
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
`,

  "src/three/TechEnvironment.jsx": `import { useRef } from "react";
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
`,

  "src/three/Scene.jsx": `import { Grid, Sparkles } from "@react-three/drei";
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
`,

  "src/components/Navbar.jsx": `import { useScrollStore } from "../three/scrollStore";
import { personal } from "../data/personal";

export default function Navbar() {
  const progress = useScrollStore((s) => s.progress);
  const activeStage = useScrollStore((s) => s.activeStage);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 border-b border-white/10 bg-[#0B0B0E]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="#hero" className="font-display font-bold tracking-tight text-white text-sm">
            {personal.name.toUpperCase()}
          </a>
          <span className="hidden sm:inline-block font-mono text-[11px] text-[#FF4D00] px-2 py-0.5 bg-[#FF4D00]/10 border border-[#FF4D00]/30 rounded">
            {activeStage}
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-6 font-mono text-xs text-zinc-400">
          <a href="#about" className="hover:text-white transition-colors">ABOUT</a>
          <a href="#experience" className="hover:text-white transition-colors">EXPERIENCE</a>
          <a href="#projects" className="hover:text-white transition-colors">PROJECTS</a>
          <a href="#skills" className="hover:text-white transition-colors">TECH STACK</a>
          <a href="#education" className="hover:text-white transition-colors">EDUCATION</a>
          <a href="#contact" className="text-[#FF4D00] hover:underline">CONTACT</a>
        </nav>

        <div className="font-mono text-xs text-zinc-400 tabular-nums">
          CAM_TIMELINE: <span className="text-white font-semibold">{Math.round(progress * 100)}%</span>
        </div>
      </div>

      <div className="h-[2px] w-full bg-zinc-900">
        <div
          className="h-full bg-[#FF4D00] transition-all duration-75"
          style={{ width: \`\${progress * 100}%\` }}
        />
      </div>
    </header>
  );
}
`,

  "src/sections/HeroSection.jsx": `import { personal } from "../data/personal";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 px-6">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-7 bg-[#0B0B0E]/75 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded">
          <div className="flex items-center gap-2 font-mono text-xs text-[#FF4D00] uppercase tracking-widest mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>{personal.location}</span>
          </div>

          <p className="font-mono text-xs text-zinc-400 uppercase tracking-widest mb-2">
            PORTFOLIO // {personal.name}
          </p>

          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.05]">
            {personal.heroTitle}
          </h1>

          <p className="mt-5 font-sans text-zinc-300 text-base sm:text-lg leading-relaxed">
            {personal.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 font-mono text-xs">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-[#FF4D00] text-white font-medium rounded hover:bg-[#e04400] transition"
            >
              <Github className="w-4 h-4" />
              {personal.githubHandle}
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 bg-zinc-900/90 border border-zinc-700 text-zinc-200 rounded hover:border-[#FF4D00] transition"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href={\`mailto:\${personal.email}\`}
              className="flex items-center gap-2 px-4 py-2.5 bg-zinc-900/90 border border-zinc-700 text-zinc-200 rounded hover:border-[#FF4D00] transition"
            >
              <Mail className="w-4 h-4" />
              {personal.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
`,

  "src/sections/AboutSection.jsx": `import { personal } from "../data/personal";

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-7xl mx-auto w-full flex justify-end">
        <div className="w-full lg:w-6/12 bg-[#0B0B0E]/85 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded">
          <div className="font-mono text-xs text-[#FF4D00] uppercase tracking-widest mb-2">
            01 // PROFESSIONAL SUMMARY
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Layered Application Design & Backend Engineering.
          </h2>
          <p className="mt-5 font-sans text-zinc-300 leading-relaxed text-base">
            {personal.summary}
          </p>
          <div className="mt-6 pt-6 border-t border-zinc-800 grid grid-cols-2 gap-4 font-mono text-xs">
            <div>
              <span className="text-zinc-500 block">TARGET ROLES</span>
              <span className="text-white">Entry-Level SDE, Java Developer, Spring Boot Developer</span>
            </div>
            <div>
              <span className="text-zinc-500 block">CORE FOUNDATION</span>
              <span className="text-white">Data Structures, OOP, DBMS, Layered Design</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
`,

  "src/sections/ExperienceSection.jsx": `import { experience } from "../data/experience";

export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="w-full lg:w-6/12 bg-[#0B0B0E]/85 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded">
          <div className="font-mono text-xs text-[#FF4D00] uppercase tracking-widest mb-2">
            02 // EXPERIENCE
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-6">
            Industry Training
          </h2>

          {experience.map((exp) => (
            <div key={exp.id} className="space-y-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-zinc-800 pb-3">
                <div>
                  <h3 className="font-display text-xl font-semibold text-white">{exp.role}</h3>
                  <p className="font-mono text-xs text-[#FF4D00]">{exp.company}</p>
                </div>
                <span className="font-mono text-xs text-zinc-400 px-2.5 py-1 bg-zinc-900 border border-zinc-800 rounded">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-3 font-sans text-sm text-zinc-300">
                {exp.highlights.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-[#FF4D00] font-mono mt-0.5">›</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`,

  "src/sections/ProjectsSection.jsx": `import { projects } from "../data/projects";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-[130vh] flex items-center px-6 py-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="w-full lg:w-6/12 bg-[#0B0B0E]/85 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded">
          <div className="font-mono text-xs text-[#FF4D00] uppercase tracking-widest mb-2">
            03 // SYSTEM ARCHITECTURE & PROJECTS
          </div>

          {projects.map((project) => (
            <div key={project.id}>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {project.title}
              </h2>
              <p className="font-mono text-xs text-zinc-400 mt-1">{project.subtitle}</p>

              <div className="flex flex-wrap gap-1.5 my-5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 font-mono text-[11px] bg-zinc-900 text-zinc-200 border border-zinc-800 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-2.5 font-sans text-sm text-zinc-300 my-6">
                {project.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-[#FF4D00] font-mono">0{idx + 1}.</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center gap-4 font-mono text-xs">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#FF4D00] text-white rounded hover:bg-[#e04400] transition"
                >
                  <Github className="w-4 h-4" />
                  {project.githubDisplay}
                </a>

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-700 text-white rounded"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Deployment
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-3 py-2 bg-zinc-900/60 border border-dashed border-zinc-700 text-zinc-500 rounded">
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo URL: Not provided in resume (Empty State)
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`,

  "src/sections/TechStackSection.jsx": `import { skills } from "../data/skills";

export default function TechStackSection() {
  return (
    <section id="skills" className="min-h-screen flex items-end px-6 py-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="bg-[#0B0B0E]/85 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded">
          <div className="font-mono text-xs text-[#FF4D00] uppercase tracking-widest mb-2">
            04 // TECHNICAL SKILLS
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight mb-8">
            Resume Skill Matrix
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {skills.map((group) => (
              <div
                key={group.category}
                className="p-4 bg-zinc-950/80 border border-zinc-800/90 rounded hover:border-[#FF4D00]/50 transition"
              >
                <div className="font-mono text-xs text-[#FF4D00] uppercase tracking-wider mb-3">
                  {group.category}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 font-mono text-xs bg-zinc-900 text-zinc-200 border border-zinc-800 rounded"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
`,

  "src/sections/EducationCertSection.jsx": `import { education } from "../data/education";
import { certifications } from "../data/certifications";

export default function EducationCertSection() {
  return (
    <section id="education" className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-[#0B0B0E]/85 backdrop-blur-md border border-white/10 p-8 rounded">
          <div className="font-mono text-xs text-[#FF4D00] uppercase tracking-widest mb-2">
            05 // EDUCATION
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">
            Academic Background
          </h2>

          {education.map((edu) => (
            <div key={edu.id} className="space-y-2">
              <div className="font-display text-lg font-semibold text-white">
                {edu.institution}
              </div>
              <div className="font-sans text-sm text-zinc-300">{edu.degree}</div>
              <div className="pt-3 flex flex-wrap gap-3 font-mono text-xs">
                <span className="px-3 py-1 bg-[#FF4D00]/15 text-[#FF4D00] border border-[#FF4D00]/30 rounded">
                  {edu.score}
                </span>
                <span className="px-3 py-1 bg-zinc-900 text-zinc-300 border border-zinc-800 rounded">
                  {edu.period}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#0B0B0E]/85 backdrop-blur-md border border-white/10 p-8 rounded">
          <div className="font-mono text-xs text-[#FF4D00] uppercase tracking-widest mb-2">
            06 // CERTIFICATIONS
          </div>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-6">
            Verified Training Credential
          </h2>

          {certifications.map((cert) => (
            <div key={cert.id} className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-display text-lg font-semibold text-white">{cert.title}</span>
                <span className="font-mono text-xs px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded">
                  Grade: {cert.grade}
                </span>
              </div>
              <div className="font-mono text-xs text-zinc-400">
                {cert.issuer} • {cert.date}
              </div>
              <div className="font-mono text-xs text-white bg-zinc-900/90 border border-zinc-800 px-3 py-2 rounded">
                Certificate ID: <span className="text-[#FF4D00]">{cert.certificateId}</span>
              </div>

              <div className="mt-4 p-4 border border-dashed border-zinc-800 rounded bg-zinc-950/50 font-mono text-[11px] text-zinc-500 space-y-1">
                <div>[EMPTY STATE] Certificate Preview Image: Not provided</div>
                <div>[EMPTY STATE] Public Verification URL: Not provided in resume</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
`,

  "src/sections/ContactSection.jsx": `import { personal } from "../data/personal";
import { Github, Linkedin, Mail, FileDown } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen flex items-center px-6 py-24">
      <div className="max-w-7xl mx-auto w-full">
        <div className="bg-[#0B0B0E]/90 backdrop-blur-md border border-white/10 p-10 md:p-16 rounded">
          <div className="font-mono text-xs text-[#FF4D00] uppercase tracking-widest mb-3">
            07 // INITIATE CONNECTION
          </div>
          <h2 className="font-display text-4xl sm:text-6xl font-bold text-white tracking-tight">
            Let&apos;s Build Something.
          </h2>
          <p className="mt-4 font-sans text-zinc-400 max-w-2xl text-base">
            Available for entry-level Software Development Engineer (SDE), Java Developer, or Spring Boot Developer roles.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 font-mono text-xs">
            <a
              href={personal.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-[#FF4D00] text-white font-medium rounded hover:bg-[#e04400] transition"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-5 py-3 bg-zinc-900 border border-zinc-700 text-white rounded hover:border-[#FF4D00] transition"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a
              href={\`mailto:\${personal.email}\`}
              className="flex items-center gap-2 px-5 py-3 bg-zinc-900 border border-zinc-700 text-white rounded hover:border-[#FF4D00] transition"
            >
              <Mail className="w-4 h-4" />
              Email ({personal.email})
            </a>

            {personal.resumeUrl ? (
              <a
                href={personal.resumeUrl}
                download
                className="flex items-center gap-2 px-5 py-3 bg-white text-black font-medium rounded hover:bg-zinc-200 transition"
              >
                <FileDown className="w-4 h-4" />
                Download Resume
              </a>
            ) : (
              <span
                title="Add PDF file path to src/data/personal.js"
                className="flex items-center gap-2 px-5 py-3 bg-zinc-900/50 border border-dashed border-zinc-700 text-zinc-400 rounded cursor-not-allowed"
              >
                <FileDown className="w-4 h-4 text-[#FF4D00]" />
                Download Resume (Attach PDF in personal.js)
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
`,

  "src/App.jsx": `import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Scene from "./three/Scene";
import { useScrollStore } from "./three/scrollStore";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import TechStackSection from "./sections/TechStackSection";
import EducationCertSection from "./sections/EducationCertSection";
import ContactSection from "./sections/ContactSection";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const scrollContainerRef = useRef(null);
  const setProgress = useScrollStore((state) => state.setProgress);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: scrollContainerRef.current,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.5,
      onUpdate: (self) => {
        setProgress(self.progress);
      },
    });

    return () => trigger.kill();
  }, [setProgress]);

  return (
    <div ref={scrollContainerRef} className="relative bg-charcoal bg-grid-pattern">
      <Navbar />

      <div className="fixed inset-0 z-0 pointer-events-none">
        <Canvas
          dpr={[1, 1.75]}
          camera={{ position: [0, 2.6, 6.8], fov: 45, near: 0.1, far: 100 }}
          gl={{ antialias: true, powerPreference: "high-performance" }}
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <TechStackSection />
        <EducationCertSection />
        <ContactSection />
      </main>
    </div>
  );
}
`,

  "src/main.jsx": `import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`,
};

// 1. Write all project files and directories
for (const [relativePath, content] of Object.entries(files)) {
  const fullPath = path.resolve(process.cwd(), relativePath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content, "utf8");
  console.log("Created:", relativePath);
}

// 2. Automatically create a .zip archive of the project
try {
  if (process.platform === "win32") {
    execSync(
      'powershell -Command "Compress-Archive -Path package.json,vite.config.js,tailwind.config.js,postcss.config.js,index.html,src -DestinationPath harshit-portfolio.zip -Force"'
    );
  } else {
    execSync(
      "zip -r harshit-portfolio.zip package.json vite.config.js tailwind.config.js postcss.config.js index.html src"
    );
  }
  console.log("\\n✅ Successfully generated harshit-portfolio.zip!");
} catch (err) {
  console.log("\\n✅ All project files generated! (Zip CLI skipped, files are ready in current directory).");
}