export default function CanvasEditor({ headline, cta, headlineSize, ctaSize, generated, canvasRef }) {
  return (
    <div className="canvas" ref={canvasRef} >

    {generated && (
  <img src="/sample.png" className="bg" />
)}

{generated && (
        <>
      <h1
  style={{
    fontSize: headlineSize + "px",
    position: "absolute",
    top: "30px",  
    left: "50%",
    transform: "translateX(-50%)",
    color: "white",
    zIndex: 10
  }}
>
  {headline}
</h1>


      <button
        className="cta"
        style={{ fontSize: ctaSize +"px" }}
        type="button"
      >
        {cta}
      </button>
      </>
)}
    </div>
  );
}
