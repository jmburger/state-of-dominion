export default function ArrowIcon({
  direction = "up-right",
  className,
}: {
  direction?: "up-right" | "down";
  className?: string;
}) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d={
          direction === "down"
            ? "M12 4v16m-7-7 7 7 7-7"
            : "M5 19 19 5M5 5h14v14"
        }
      />
    </svg>
  );
}
