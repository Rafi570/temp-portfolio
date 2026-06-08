"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid hydration mismatch by waiting for mount
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <NextThemesProvider
      attribute="data-theme"
      defaultTheme="dark"
      enableSystem={true}
      themes={["light", "dark", "cupcake", "synthwave", "retro", "cyberpunk", "valentine", "aqua", "nord", "sunset"]}
    >
      {children}
    </NextThemesProvider>
  );
}
