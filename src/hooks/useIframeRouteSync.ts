"use client";

import { useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

export function useIframeRouteSync() {
  const router = useRouter();
  const pathname = usePathname();
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (
        event.data.type === "STUDY_REVIEWER_ROUTE_CHANGE" &&
        event.data.source === "study-reviewer"
      ) {
        const newPath = event.data.fullPath;

        if (newPath && newPath !== pathname) {
          window.history.replaceState(null, "", newPath);
        }
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [pathname]);

  useEffect(() => {
    if (pathname.startsWith("/study-reviewer") && iframeRef.current) {
      const targetPath = pathname.replace("/study-reviewer", "") || "/";

      iframeRef.current.contentWindow?.postMessage(
        {
          type: "STUDY_REVIEWER_NAVIGATE_TO",
          path: pathname,
          source: "core-project",
        },
        "*"
      );
    }
  }, [pathname]);

  return iframeRef;
}
