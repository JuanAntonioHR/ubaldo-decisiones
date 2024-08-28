import { useEffect, useRef } from 'react';
import mermaid from 'mermaid';

const MermaidChart = ({ chart }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: true });
    if (chartRef.current) {
      mermaid.contentLoaded();
    }
  }, [chart]);

  return (
    <div className="mermaid" ref={chartRef}>
      {chart}
    </div>
  );
};

export default MermaidChart;
