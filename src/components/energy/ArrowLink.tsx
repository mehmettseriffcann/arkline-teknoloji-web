import { ArrowRight } from "lucide-react";

// Vestas tarzı daire içinde ok + metin bağlantısı
export default function ArrowLink({
  href,
  onClick,
  children,
  tone = "dark",
}: {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  tone?: "dark" | "light";
}) {
  const ring =
    tone === "light"
      ? "border-white/60 text-white group-hover:bg-white group-hover:text-brand"
      : "border-accent text-accent group-hover:bg-accent group-hover:text-white";
  const label = tone === "light" ? "text-white" : "text-brand";
  const content = (
    <>
      <span
        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors ${ring}`}
      >
        <ArrowRight size={16} />
      </span>
      <span className={`text-sm font-medium ${label}`}>{children}</span>
    </>
  );
  const cls = "group inline-flex items-center gap-3 cursor-pointer text-left";

  return href ? (
    <a href={href} className={cls}>
      {content}
    </a>
  ) : (
    <button type="button" onClick={onClick} className={cls}>
      {content}
    </button>
  );
}
