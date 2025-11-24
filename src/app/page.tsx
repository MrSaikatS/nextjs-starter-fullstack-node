import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Next.js Starter Fullstack",
	description: "Production grade Fullstack Next.js starter template",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<div className="space-y-2 text-center">
				<h1 className="text-5xl font-semibold">Next.js Starter Fullstack</h1>
				<h2 className="text-3xl">
					Production grade Fullstack Next.js starter template
				</h2>
			</div>
		</section>
	);
};

export default page;
