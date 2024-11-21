"use client";
import { VendyzIcon } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { startLoading, stopLoading } from "../redux/slices/loadingSlice";
import { TailSpin } from "react-loader-spinner";
import { useRouter } from "next/navigation";

const LoginForm = () => {
	const { toast } = useToast();
	const isLoading = useAppSelector((state) => state.loading.isLoading);
	const dispatch = useAppDispatch();
	const router = useRouter();

	const schema = z.object({
		emailAddress: z
			.string()
			.min(1, { message: "Email is required" })
			.email({ message: "Invalid email address" })
			.refine((val) => val.includes("@") && val.endsWith(".com"), {
				message: "Email must include '@' and end with '.com'",
			}),
		password: z.string().min(1, { message: "Password is required" }),
		// .min(6, { message: "Password must be more than 6 characters" })
		// .regex(/[!@#$%^&*(),.?":{}|<>]/, {
		// 	message: "Password must contain a special character",
		// })
		// .regex(/\d/, { message: "Password must contain a number" }),
	});

	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schema),
	});

	const watchAllFields = watch();

	const isButtonDisabled =
		!watchAllFields.emailAddress ||
		!watchAllFields.password ||
		Object.keys(errors).length > 0;

	const onSubmit = async (data: any) => {
		dispatch(startLoading());
		const payload = {
			email: data.emailAddress,
			password: data.password,
		};
		localStorage.setItem("user", JSON.stringify(payload));

		setTimeout(() => {
			dispatch(stopLoading());
			toast({
				variant: "success",
				description: "Login successful",
			});
			router.push("/dashboard");
		}, 3000);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="h-screen w-full md:w-[500px] px-6 md:px-14 pt-10 md:py-14"
		>
			<div className="flex justify-center mb-5">
				<Image src={VendyzIcon} alt="logo" priority />
			</div>
			<h2 className="text-center text-lg md:text-xl font-semibold">
				Login to your account
			</h2>
			<div className="mt-5 flex flex-col gap-1">
				<label htmlFor="email" className="text-customBlue font-medium">
					Email
				</label>
				<input
					{...register("emailAddress")}
					name="emailAddress"
					type="email"
					placeholder="Enter a valid email"
					className="text-sm rounded-lg h-[40px] border border-customBlue px-3 md:px-3 placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-customBlue"
				/>
				{errors.emailAddress && (
					<p className="text-sm text-red-500">
						{errors.emailAddress.message as string}
					</p>
				)}
			</div>
			<div className="mt-5 flex flex-col gap-1">
				<label
					htmlFor="password"
					className="text-customBlue font-medium"
				>
					Password
				</label>
				<input
					{...register("password")}
					name="password"
					type="password"
					placeholder="Enter your password"
					className="text-sm rounded-lg h-[40px] border border-customBlue px-3 md:px-3 placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-customBlue"
				/>
				{errors.password && (
					<p className="text-sm text-red-500">
						{errors.password.message as string}
					</p>
				)}
			</div>
			<div className="mt-5 flex justify-end">
				<Link
					href="/"
					className="text-customBlue cursor-pointer text-sm"
				>
					Forgot password?
				</Link>
			</div>
			<div className="mt-2 flex justify-end">
				<div className="text-sm">
					Don't have an account?{" "}
					<Link href="/" className="text-customBlue cursor-pointer">
						Sign Up
					</Link>
				</div>
			</div>

			<CustomButton
				btnContent={
					isLoading ? (
						<TailSpin color="white" height="30px" width="50px" />
					) : (
						"Login"
					)
				}
				btnStyles={cn(
					"bg-customBlue flex items-center justify-around text-sm md:text-lg text-white rounded-lg cursor-pointer h-[40px] w-full mt-5",
					isButtonDisabled && "opacity-25"
				)}
				btnType="submit"
			/>
		</form>
	);
};

export default LoginForm;
