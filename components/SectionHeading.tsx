interface SectionHeadingProps {
  no: string;
  label: string;
}

/**
 * Technical calendar section label, e.g. "02 / COMMUNITY",
 * with a hard horizontal divider beneath it.
 */
export default function SectionHeading({ no, label }: SectionHeadingProps) {
  return (
    <div className="mb-4">
      <div className="flex items-baseline justify-between gap-3 min-w-0">
        <h2 className="twrap font-mono text-[13px] font-bold uppercase tracking-[0.22em] text-ink">
          <span className="mr-2 inline-block h-2.5 w-2.5 border-2 border-line bg-accent align-baseline" />
          {no} / {label}
        </h2>
        <span aria-hidden="true" className="font-mono text-[11px] text-muted">
          {"//"}0x{no}
        </span>
      </div>
      <div
        aria-hidden="true"
        className="mt-2 border-b-2 border-line"
      />
    </div>
  );
}
