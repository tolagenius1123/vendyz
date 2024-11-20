import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "./providers";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Vendyz",
	description:
		"Your Shield against Online Fraud, ensuring Transparent, Secure, & fast Transactions for both buyers & sellers.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={poppins.className}>
				<Providers>{children}</Providers>
				<Toaster />
			</body>
		</html>
	);
}
