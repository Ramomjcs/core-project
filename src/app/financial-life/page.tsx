'use client';

export default function FinancialLife() {
  const iframeUrl = process.env.NEXT_PUBLIC_FINANCIAL_IFRAME_URL;

  if (!iframeUrl) {
    return <p>Erro: URL do iframe não configurada</p>;
  }

  return (
    <iframe
      src={iframeUrl}
      title="Financial Life"
      style={{
        width: '100%',
        height: '100%',
        border: 'none',
      }}
    />
  );
}
