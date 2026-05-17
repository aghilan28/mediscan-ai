"use client";

import { useEffect, useState } from "react";

export function useDemoDelay(ms = 450) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setReady(true), ms);
    return () => window.clearTimeout(timer);
  }, [ms]);

  return ready;
}
