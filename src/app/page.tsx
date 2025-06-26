import { Card } from "@/components/Card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
        <div className="text-left">
          <h1 className="text-5xl font-bold text-white mb-4">Gemini CLI: Your Open-Source AI Agent</h1>
          <p className="text-xl text-white/80">Bring the power of Gemini directly into your terminal. Free, open-source, and built for developers.</p>
        </div>
        <div>
          <Image 
            src="https://raw.githubusercontent.com/google-gemini/gemini-cli/main/docs/assets/gemini-screenshot.png"
            alt="Gemini CLI Screenshot"
            width={1280}
            height={720}
            className="rounded-lg"
          />
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white mb-8">Get Started</h2>
        <div className="bg-black/20 rounded-lg p-6 inline-block text-left">
          <pre className="text-white/80 whitespace-pre-wrap">
            <code>
              npm install -g @google/gemini-cli
              <br />
              gemini
            </code>
          </pre>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card>
          <h2 className="text-2xl font-bold mb-2">Unmatched Usage</h2>
          <p>60 requests/minute, 1,000/day, and a 1M token context window.</p>
        </Card>
        <Card>
          <h2 className="text-2xl font-bold mb-2">Powerful Models</h2>
          <p>Access Gemini 2.5 Pro for coding, debugging, and more.</p>
        </Card>
        <Card>
          <h2 className="text-2xl font-bold mb-2">Google Search</h2>
          <p>Ground prompts with real-time information from the web.</p>
        </Card>
        <Card>
          <h2 className="text-2xl font-bold mb-2">Open & Extensible</h2>
          <p>Fully open-source (Apache 2.0) and ready for contributions.</p>
        </Card>
        <Card>
          <h2 className="text-2xl font-bold mb-2">Code Assist</h2>
          <p>Shared technology with Gemini Code Assist in VS Code.</p>
        </Card>
        <Card>
          <h2 className="text-2xl font-bold mb-2">Quickstart</h2>
          <p>Get started in minutes with a single command.</p>
        </Card>
      </div>

      <footer className="text-center text-white/50 mt-16">
        <div className="flex justify-center gap-8 mb-4">
          <a href="#" className="hover:underline">Contribute</a>
          <a href="#" className="hover:underline">CLI Commands</a>
          <a href="#" className="hover:underline">Troubleshooting</a>
        </div>
        <p>&copy; 2025 Google. All rights reserved.</p>
      </footer>
    </main>
  );
}