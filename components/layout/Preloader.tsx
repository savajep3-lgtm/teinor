"use client";

import { useEffect, useState } from "react";

/**
 * Preloader liviano: solo aparece una vez por sesion.
 */
export default function Preloader() {
  const [visible, establecerVisible] = useState(false);

  useEffect(() => {
    const clave = "teinor-preloader-visto";
    const visto = window.sessionStorage.getItem(clave) === "1";

    if (visto) return;

    establecerVisible(true);
    document.body.style.overflow = "hidden";

    const temporizador = setTimeout(() => {
      establecerVisible(false);
      document.body.style.overflow = "";
      window.sessionStorage.setItem(clave, "1");
    }, 280);

    return () => {
      clearTimeout(temporizador);
      document.body.style.overflow = "";
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white">
      <div className="flex items-center gap-2">
        <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-marca-purpura [animation-delay:-0.2s]" />
        <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-marca-purpura [animation-delay:-0.1s]" />
        <span className="h-2.5 w-2.5 animate-bounce rounded-full bg-marca-purpura" />
      </div>
    </div>
  );
}
