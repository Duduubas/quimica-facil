import { MousePointerClick } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col justify-center items-center text-blue-800 p-6 text-center">
            <h1 className="font-semibold text-8xl mb-4">404</h1>
            <h2 className="font-semibold text-2xl md:text-4xl mb-8">
                Hmm... A página procurada não existe!
            </h2>
            <a
                href="/"
                className="flex items-center gap-2 bg-blue-800 text-white px-6 py-3 rounded-2xl font-medium hover:bg-blue-700 transition"
            >
                <MousePointerClick />
                Página inicial
            </a>
        </div>
    );
}
