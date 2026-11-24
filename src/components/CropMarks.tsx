// Printer's crop marks at the four corners of a proof. Put it inside an element
// with `position: relative`; the marks sit just outside its edges.
export function CropMarks() {
  const corners = [
    "-left-3 -top-3 border-l border-t",
    "-right-3 -top-3 border-r border-t",
    "-bottom-3 -left-3 border-b border-l",
    "-bottom-3 -right-3 border-b border-r",
  ];
  return (
    <>
      {corners.map((c) => (
        <span key={c} aria-hidden="true" className={`pointer-events-none absolute size-2 border-muted/60 ${c}`} />
      ))}
    </>
  );
}
