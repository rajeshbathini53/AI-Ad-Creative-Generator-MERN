export default function CanvasEditor({
  headline,
  cta,
  headlineSize,
  ctaSize,
  canvasRef
}) {
  return (
    <div className="canvas" ref={canvasRef}>
      <img src="https://picsum.photos/600/400" className="bg" />

      <h1
        className="headline"
        draggable
        style={{ fontSize: headlineSize + "px" }}
      >
        {headline}
      </h1>

      <button
        className="cta"
        draggable
        style={{ fontSize: ctaSize + "px" }}
      >
        {cta}
      </button>
    </div>
  );
}
