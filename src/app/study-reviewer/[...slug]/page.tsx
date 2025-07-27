"use client";

import { useIframeRouteSync } from "@/hooks/useIframeRouteSync";

export default function StudyReviewerSubPage() {
  const iframeRef = useIframeRouteSync();
  const iframeUrl =
    process.env.NEXT_PUBLIC_STUDY_REVIEWER_IFRAME_URL ||
    "http://localhost:3002";

  return (
    <iframe
      ref={iframeRef}
      src={iframeUrl}
      title="Study Reviewer"
      style={{
        width: "100%",
        height: "100%",
        border: "none",
      }}
    />
  );
}
