import { useEffect, useRef } from "react";
import ResearchBunny from "@researchbunny/rb-widget";

// "all" | "audio,reels" | ["audio","reels"] -> "all" | ["audio","reels"]
const toList = (value) =>
  typeof value === "string" && value !== "all"
    ? value.split(",").map((item) => item.trim()).filter(Boolean)
    : value;

const ResearchBunnyWidget = ({
  paperId,
  formats = "audio,reels,infographic",
  languages = "all",
  theme = "navy",
  style = "tag",
}) => {
  const containerRef = useRef(null);
  // join array props so the effect doesn't re-run on every render
  const formatsKey = Array.isArray(formats) ? formats.join(",") : formats;
  const languagesKey = Array.isArray(languages) ? languages.join(",") : languages;

  useEffect(() => {
    if (!paperId || !containerRef.current) return;
    ResearchBunny.init({
      widgetType: "v2",
      paperId,
      container: containerRef.current,
      formats: toList(formatsKey),
      languages: toList(languagesKey),
      theme,
      style,
    });
  }, [paperId, formatsKey, languagesKey, theme, style]);

  return <div className="rb-widget-slot" ref={containerRef} />;
};

export default ResearchBunnyWidget;
