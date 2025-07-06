'use client';

export default function StudyReviewer() {
  const iframeUrl = process.env.NEXT_PUBLIC_STUDY_REVIEWER_IFRAME_URL;

  if (!iframeUrl) {
    return <p>Erro: URL do iframe não configurada</p>;
  }

  return (
    <iframe
      src={iframeUrl}
      title="Study Reviewer"
      style={{
        width: '100%',
        height: '100%',
        border: 'none',
      }}
    />
  );
}
