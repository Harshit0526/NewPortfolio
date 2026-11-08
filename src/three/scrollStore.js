import { create } from "zustand";

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
