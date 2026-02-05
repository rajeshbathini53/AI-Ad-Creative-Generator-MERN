import { useState, useRef } from "react";
import Toolbar from "../components/Toolbar";
import CanvasEditor from "../components/CanvasEditor";
import html2canvas from "html2canvas";

export default function Studio() {
  const [headline, setHeadline] = useState("AdVantage Gen - Design Smarter Ads");
  const [cta, setCta] = useState("Generate Now");

  const [headlineSize, setHeadlineSize] = useState(36);
  const [ctaSize, setCtaSize] = useState(18);

  const canvasRef = useRef();

  const download = async () => {
  const canvas = await html2canvas(canvasRef.current, {
    useCORS: true,
    allowTaint: true
  });

    const link = document.createElement("a");
    link.download = "creative.png";
    link.href = canvas.toDataURL();
    link.click();
  };

  return (
    <div className="studio">
      <Toolbar
        headline={headline}
        setHeadline={setHeadline}
        cta={cta}
        setCta={setCta}
        headlineSize={headlineSize}
        setHeadlineSize={setHeadlineSize}
        ctaSize={ctaSize}
        setCtaSize={setCtaSize}
        download={download}
      />

      <CanvasEditor
        headline={headline}
        cta={cta}
        headlineSize={headlineSize}
        ctaSize={ctaSize}
        canvasRef={canvasRef}
      />
    </div>
  );
}
