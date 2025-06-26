import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gemini CLI 入门教程 | 免费开源的 AI 命令行工具",
  description: "学习如何使用 Gemini CLI - Google 推出的免费开源 AI 命令行工具。适合零基础初学者，支持代码查询、编辑大型代码库、自动化工作流程等功能。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}