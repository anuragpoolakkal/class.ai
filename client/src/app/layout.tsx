"use client";
import 'regenerator-runtime/runtime'
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" data-theme="light">
			<head>
				<title>Class.AI</title>
				<link rel="icon" href="classai.png" type="image/png" sizes="any" />
			</head>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
