import { buttonVariants } from "@/components/ui/button";
import { VariantProps } from "class-variance-authority";
import { LucideIcon } from "lucide-react";

export interface GuideCardProps {
	title: string;
	description: string;
	linkText: string;
	thumbnail?: string;
}

export interface GuideListItemProps {
	Icon: LucideIcon;
	title: string;
	body: string;
	linkText?: string;
}

export interface SectionTitleProps {
	title: string;
	description?: string;
	primaryButton?: string;
	secondaryButton?: string;
	SecondaryIcon?: LucideIcon;
}

export interface IntegratedApps {
	name: string;
	url: string;
	icon: LucideIcon | string;
}

export interface Testimony {
	companyName: string;
	companyLogo: string;
	color: string;
	name: string;
	title: string;
	testimony: string;
	integratedApps: IntegratedApps[];
}

export interface TestimonialCardProps {
	testimony: Testimony;
	isCurrent?: boolean;
}

export interface Trustee {
	logo: string;
	companyName: string;
	detail: string;
	profile: string;
	name: string;
	title: string;
}

export interface TrusteeCardProps {
	trustee: Trustee;
}

export interface ButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement>,
	VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

export interface ActionLinkProps {
	link: string;
	text: string;
	className?: string;
}
