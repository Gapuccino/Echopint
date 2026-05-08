"use client";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const NeuralCanvas = dynamic(() => import("./NeuralCanvas"), { ssr: false, loading: () => null });

export default function NeuralCanvasLoader() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
  }, []);

  if (!isDesktop) return null;
  return <NeuralCanvas />;
}
