import Header from "./_components/Header";
import Sidebar from "./_components/Sidebar";

export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className="w-full h-screen flex">
			<Sidebar />
			<div className="w-full md:w-[80%] h-screen flex flex-col">
				<Header />
				<div className="h-[85%] p-5 overflow-y-scroll">{children}</div>
			</div>
		</main>
	);
}
