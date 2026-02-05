export default function Toolbar({
  headline,
  setHeadline,
  cta,
  setCta,
  headlineSize,
  setHeadlineSize,
  ctaSize,
  setCtaSize,
  download
}) {
  return (
    <div className="toolbar">

      <div className="logoBox">
        <img src="/logo.png" className="logo" />
        <span>AdVantage Gen</span>
      </div>

      <input
        value={headline}
        onChange={(e) => setHeadline(e.target.value)}
        placeholder="Headline Text"
      />

      <label>Headline Size</label>
      <input
        type="range"
        min="50"
        max="60"
        value={headlineSize}
        onChange={(e) => setHeadlineSize(e.target.value)}
      />

      <input
        value={cta}
        onChange={(e) => setCta(e.target.value)}
        placeholder="CTA Text"
      />

      <label>CTA Size</label>
      <input
        type="range"
        min="12"
        max="30"
        value={ctaSize}
        onChange={(e) => setCtaSize(e.target.value)}
      />

      <button onClick={download}>Download</button>
    </div>
  );
}
