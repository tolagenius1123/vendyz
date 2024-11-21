import { cn } from "@/lib/utils";
import Link from "next/link";

type SidebarLinkProps = {
	href: string;
	label: string;
	icon: React.ReactNode;
	isActive: boolean;
};

const SidebarLink = ({ href, label, icon, isActive }: SidebarLinkProps) => (
	<Link href={href} className={cn("flex items-center gap-5 h-[44px] group")}>
		<span
			className={cn(
				"bg-transparent group-hover:bg-customBlue h-full w-1 rounded-r-md",
				isActive ? "bg-customBlue" : "bg-transparent"
			)}
		></span>
		<span className="flex items-center gap-3">
			<span
				className={cn(
					"text-customGrey group-hover:text-customBlue",
					isActive ? "text-customBlue" : "text-customGrey"
				)}
			>
				{icon}
			</span>
			<span
				className={cn(
					"text-[16px] font-medium text-customGrey group-hover:text-customBlue",
					isActive ? "text-customBlue" : "text-customGrey"
				)}
			>
				{label}
			</span>
		</span>
	</Link>
);

export default SidebarLink;
