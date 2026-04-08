import {
  Shield,
  Server,
  Bot,
  TrendingUp,
  Bitcoin,
  Smartphone,
  Briefcase,
  GraduationCap,
  Globe,
  ShieldCheck,
  Award,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  shield: Shield,
  server: Server,
  bot: Bot,
  "trending-up": TrendingUp,
  bitcoin: Bitcoin,
  smartphone: Smartphone,
  briefcase: Briefcase,
  "graduation-cap": GraduationCap,
  globe: Globe,
  "shield-check": ShieldCheck,
};

export function getCategoryIcon(iconKey: string): LucideIcon {
  return iconMap[iconKey] || Award;
}
