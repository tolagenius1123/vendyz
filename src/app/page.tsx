import { MobileIcon } from "@/assets/icons";
import LoginForm from "@/components/LoginForm";
import Image from "next/image";

export default function Home() {
	return (
		<main className="h-screen w-full flex flex-col md:flex-row font-nanum">
			<section className="w-1/2 h-screen py-20 px-10 hidden md:flex items-center justify-around">
				<Image src={MobileIcon} alt="login picture" />
			</section>
			<section className="w-full md:w-1/2 h-screen flex items-center justify-around bg-slate-50">
				<LoginForm />
			</section>
		</main>
	);
}
