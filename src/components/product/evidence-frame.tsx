export function EvidenceFrame({
  label,
  title,
  description,
  variant = "chart",
}: {
  label: string;
  title: string;
  description: string;
  variant?: "chart" | "heatmap" | "interface";
}) {
  return (
    <figure className={`evidence-frame evidence-frame--${variant}`}>
      <div className="evidence-frame__bar">
        <span>{label}</span>
        <span>Evidence asset pending handoff</span>
      </div>
      <div className="evidence-frame__visual" role="img" aria-label={description}>
        {variant === "chart" ? (
          <>
            <div className="chart-grid" />
            <div className="chart-line" />
          </>
        ) : null}
        {variant === "heatmap" ? (
          <div className="heatmap-placeholder">
            {Array.from({ length: 42 }).map((_, index) => (
              <span key={index} style={{ opacity: 0.15 + ((index * 7) % 10) / 15 }} />
            ))}
          </div>
        ) : null}
        {variant === "interface" ? (
          <div className="interface-placeholder">
            <div />
            <div />
            <div />
            <div />
          </div>
        ) : null}
        <div className="evidence-frame__notice">
          <strong>{title}</strong>
          <span>
            The requested production screenshot was not included in this session.
            This labelled slot avoids inventing product evidence.
          </span>
        </div>
      </div>
      <figcaption>{description}</figcaption>
    </figure>
  );
}
