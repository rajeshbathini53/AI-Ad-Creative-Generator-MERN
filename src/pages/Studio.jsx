import { useState, useRef } from "react";
import Toolbar from "../components/Toolbar";
import CanvasEditor from "../components/CanvasEditor";
import html2canvas from "html2canvas";
import axios from "axios";


export default function Studio() {
  const [headline, setHeadline] = useState("");
  const [cta, setCta] = useState("");

  const [generated, setGenerated] = useState(false);


  const [headlineSize, setHeadlineSize] = useState(36);
  const [ctaSize, setCtaSize] = useState(18);

  const canvasRef = useRef();

 const generate = async () => {
  if (!headline || !cta) return;

  setGenerated(true);

  await axios.post("http://localhost:5000/api/save", {
    headline,
    cta
  });
};



  const download = async () => {
  const cta = document.querySelector(".cta");
  if (cta) cta.style.display = "none";

  const canvas = await html2canvas(canvasRef.current, {
    useCORS: true,
    allowTaint: true
  });

  const link = document.createElement("a");
  link.download = "creative.png";
  link.href = canvas.toDataURL();
  link.click();

  if (cta) cta.style.display = "block";
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
 generate={generate}
 download={download}
/>


      <CanvasEditor
 headline={headline}
 cta={cta}
 headlineSize={headlineSize}
 ctaSize={ctaSize}
 generated={generated}
 canvasRef={canvasRef}
/>

    </div>
  );
}
