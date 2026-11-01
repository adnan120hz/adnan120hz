/**
 * Fluid section head, WorkSlop doc-head style: bold sans title
 * with a short rounded brand bar underneath. No numbers,
 * no mono labels, no divider rules.
 */
export default function SectionHeading({ label }: { label: string }) {
  return (
    <div className="mb-5">
      <h2 className="twrap text-[clamp(26px,6vw,34px)] font-extrabold leading-tight tracking-tight text-ink">
        {label}
      </h2>
      <span
        aria-hidden="true"
        className="mt-3 block h-[5px] w-14 rounded-full bg-brand"
      />
    </div>
  );
}
