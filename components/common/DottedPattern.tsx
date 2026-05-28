export default function DottedPattern({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none dotted-bg opacity-40 ${className}`}
      aria-hidden="true"
    />
  );
}
