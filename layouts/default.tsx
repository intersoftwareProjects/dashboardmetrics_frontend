// import { Navbar } from "@/components/navbar";
// import { Link } from "@nextui-org/link";
// import { Head } from "./head";

export default function DefaultLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<div className="relative flex flex-col h-screen">
			{/* <Head />
			<Navbar /> */}
            <main className="intersoftware container mx-auto max-w-7xl flex-grow" style={{backgroundColor: "white"}}>
			{/* <main className="container mx-auto max-w-7xl px-6 flex-grow"> */}
				{children}
			</main>
			{/* <footer className="w-full flex items-center justify-center py-3">
				<Link
					isExternal
					className="flex items-center gap-1 text-current"
					href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
					title="nextui.org homepage"
				>
					<span className="text-default-600">Powered by</span>
					<p className="text-primary">NextUI</p>
				</Link>
			</footer> */}
		</div>
	);
}

// El contenido comentado elimina la navbar y el footer que vienen por defecto en la base de NextUI
// El codigo puede ser util para crear un layout personalizado para el dashboard posterior al login
