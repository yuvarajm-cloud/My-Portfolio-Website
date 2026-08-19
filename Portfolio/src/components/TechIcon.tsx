import { useId, useMemo } from "react";
import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa6";
import {
  SiAnsible,
  SiApache,
  SiDocker,
  SiGit,
  SiGithub,
  SiGrafana,
  SiJenkins,
  SiKubernetes,
  SiLinux,
  SiPrometheus,
  SiPython,
  SiTerraform,
} from "react-icons/si";
import { Shield } from "lucide-react";

type TechIconProps = {
  name: string;
  color?: string;
  size?: number;
  variant?: "default" | "plain";
};

type BrandDef = {
  icon: IconType | typeof Shield;
  color: string;
};

function AzureIcon({ size = 24, className }: { size?: number; className?: string }) {
  const uid = useId().replace(/:/g, "");
  const a = `azure-a-${uid}`;
  const b = `azure-b-${uid}`;
  const c = `azure-c-${uid}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id={a} x1="60.919" y1="9.602" x2="18.667" y2="134.423" gradientUnits="userSpaceOnUse">
          <stop stopColor="#114A8B" />
          <stop offset="1" stopColor="#0669BC" />
        </linearGradient>
        <linearGradient id={b} x1="74.117" y1="67.772" x2="64.344" y2="71.076" gradientUnits="userSpaceOnUse">
          <stop stopOpacity=".3" />
          <stop offset=".071" stopOpacity=".2" />
          <stop offset=".321" stopOpacity=".1" />
          <stop offset=".623" stopOpacity=".05" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={c} x1="68.742" y1="5.961" x2="115.122" y2="129.525" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3CCBF4" />
          <stop offset="1" stopColor="#2892DF" />
        </linearGradient>
      </defs>
      <path
        d="M46.09.002h40.685L44.541 125.137a6.485 6.485 0 01-6.146 4.413H6.733a6.482 6.482 0 01-5.262-2.699 6.474 6.474 0 01-.876-5.848L39.944 4.414A6.488 6.488 0 0146.09 0z"
        fill={`url(#${a})`}
        transform="translate(.587 4.468) scale(.91904)"
      />
      <path
        d="M97.28 81.607H37.987a2.743 2.743 0 00-1.874 4.751l38.1 35.562a5.991 5.991 0 004.087 1.61h33.574z"
        fill="#0078d4"
      />
      <path
        d="M46.09.002A6.434 6.434 0 0039.93 4.5L.644 120.897a6.469 6.469 0 006.106 8.653h32.48a6.942 6.942 0 005.328-4.531l7.834-23.089 27.985 26.101a6.618 6.618 0 004.165 1.519h36.396l-15.963-45.616-46.533.011L86.922.002z"
        fill={`url(#${b})`}
        transform="translate(.587 4.468) scale(.91904)"
      />
      <path
        d="M98.055 4.408A6.476 6.476 0 0091.917.002H46.575a6.478 6.478 0 016.137 4.406l39.35 116.594a6.476 6.476 0 01-6.137 8.55h45.344a6.48 6.48 0 006.136-8.55z"
        fill={`url(#${c})`}
        transform="translate(.587 4.468) scale(.91904)"
      />
    </svg>
  );
}

const BRAND_ICONS: Record<string, BrandDef> = {
  AWS: { icon: FaAws, color: "#FF9900" },
  "AWS EC2": { icon: FaAws, color: "#FF9900" },
  "AWS S3": { icon: FaAws, color: "#FF9900" },
  "Route 53": { icon: FaAws, color: "#FF9900" },
  "Application Load Balancer": { icon: FaAws, color: "#FF9900" },
  IAM: { icon: FaAws, color: "#FF9900" },
  "Security Groups": { icon: FaAws, color: "#FF9900" },
  Azure: { icon: AzureIcon as unknown as IconType, color: "#0078D4" },
  "Azure Blob": { icon: AzureIcon as unknown as IconType, color: "#0078D4" },
  Docker: { icon: SiDocker, color: "#2496ED" },
  Kubernetes: { icon: SiKubernetes, color: "#326CE5" },
  K8s: { icon: SiKubernetes, color: "#326CE5" },
  Jenkins: { icon: SiJenkins, color: "#D24939" },
  Terraform: { icon: SiTerraform, color: "#7B42BC" },
  Linux: { icon: SiLinux, color: "#FCC624" },
  GitHub: { icon: SiGithub, color: "#FFFFFF" },
  "GitHub Actions": { icon: SiGithub, color: "#FFFFFF" },
  Git: { icon: SiGit, color: "#F05032" },
  Python: { icon: SiPython, color: "#3776AB" },
  Prometheus: { icon: SiPrometheus, color: "#E6522C" },
  Grafana: { icon: SiGrafana, color: "#F46800" },
  Ansible: { icon: SiAnsible, color: "#EE0000" },
  Apache: { icon: SiApache, color: "#D22128" },
  Security: { icon: Shield, color: "#22C55E" },
  DNS: { icon: FaAws, color: "#FF9900" },
};

export const TECH: Record<string, { color: string }> = Object.fromEntries(
  Object.entries(BRAND_ICONS).map(([name, def]) => [name, { color: def.color.replace("#", "") }]),
);

const hexToRgb = (hex: string) => {
  const normalized = hex.replace(/^#/, "");
  const hexValue =
    normalized.length === 3
      ? normalized.split("").map((char) => char + char).join("")
      : normalized;

  if (!/^[0-9A-Fa-f]{6}$/.test(hexValue)) return null;

  return {
    r: parseInt(hexValue.slice(0, 2), 16),
    g: parseInt(hexValue.slice(2, 4), 16),
    b: parseInt(hexValue.slice(4, 6), 16),
  };
};

export function TechIcon({ name, color, size = 52, variant = "default" }: TechIconProps) {
  const brand = BRAND_ICONS[name];
  const brandColor = color ? `#${color.replace(/^#/, "")}` : brand?.color ?? "#94a3b8";

  const boxShadow = useMemo(() => {
    const rgb = hexToRgb(brandColor);
    return rgb
      ? `0 0 16px 3px rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.18)`
      : `0 0 14px 3px ${brandColor}`;
  }, [brandColor]);

  const logo = brand ? (
    name === "Azure" || name === "Azure Blob" ? (
      <AzureIcon size={size} className="shrink-0" />
    ) : brand.icon === Shield ? (
      <Shield size={size} color={brandColor} strokeWidth={2} aria-hidden className="shrink-0" />
    ) : (
      (() => {
        const Icon = brand.icon as IconType;
        return (
          <Icon
            size={size}
            color={brandColor}
            aria-hidden
            className="shrink-0"
            style={{ width: size, height: size }}
          />
        );
      })()
    )
  ) : (
    <span
      className="inline-flex items-center justify-center bg-muted/20 text-[9px] text-muted-foreground"
      style={{ width: size, height: size }}
    >
      {name.slice(0, 2)}
    </span>
  );

  if (variant === "plain") {
    return (
      <span
        title={name}
        aria-label={name}
        className="inline-flex shrink-0 items-center justify-center"
        style={{ width: size, height: size }}
      >
        {logo}
      </span>
    );
  }

  return (
    <span
      title={name}
      aria-label={name}
      className="group relative inline-flex items-center justify-center rounded-2xl bg-surface/95 p-2.5 transition duration-200 hover:-translate-y-0.5 hover:scale-[1.05]"
      style={{ boxShadow }}
    >
      {logo}
      <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-surface px-2 py-1 text-[10px] font-mono text-foreground opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
        {name}
      </span>
    </span>
  );
}
