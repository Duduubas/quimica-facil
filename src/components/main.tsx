import { FlaskConical } from "lucide-react";

export default function Main() {
    return (
        <>
            <main className="bg-gray-50 min-h-screen">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-700 to-purple-800 text-white py-16">
                    <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-2/3 mb-8 md:mb-0">
                            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">ESTUDE QUÍMICA SEM SAIR DE CASA!</h1>
                        </div>
                        <div className="md:w-1/3 flex justify-center">
                            <FlaskConical size={120} className="text-green-300 animate-pulse" />
                        </div>
                    </div>
                </section>

                {/* Intro Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">QUÍMICA FÁCIL</h1>
                            <hr className="border-blue-500 border-t-2 w-24 mx-auto mb-8" />
                            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                                Fala, <span className="font-bold text-blue-700">CABEÇÃO</span>!!! Seja bem-vindo(a) à plataforma <span className="font-bold text-blue-700">QUÍMICA FÁCIL</span>!
                                A nossa proposta para 2025 é oferecer <span className="font-bold">CURSOS ESPECÍFICOS</span>, totalmente direcionados para o vestibular da sua preferência!
                            </p>
                            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                                Ao adquirir qualquer um dos nossos planos, você garante acesso a um <span className="font-bold">CURSO COMPLETO</span>, voltado para a sua aprovação! As videoaulas e os e-books são elaborados exclusivamente de acordo com a realidade do seu vestibular. Assim, você terá uma preparação muito mais eficiente, sem perder tempo com conteúdos ou abordagens que não serão úteis para você!
                            </p>
                            <p className="text-lg leading-relaxed text-gray-700 mb-6">
                                Antes de escolher o seu <span className="font-bold">PLANO</span>, acesse a seção <span className="font-bold text-green-600">CONTEÚDOS GRÁTIS</span>! Lá você encontrará uma videoaula de cada um dos cursos ofertados atualmente!
                            </p>
                            <p className="text-xl font-bold text-blue-700">
                                EM 2025, VENHA SER UM CABEÇÃO!!!
                            </p>
                        </div>
                    </div>
                </section>

                {/* Courses Section */}
                <section className="py-16 bg-gray-100">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl font-bold text-blue-800 mb-4">Cursos Específicos</h2>
                            <p className="text-xl text-gray-600">Cursos direcionados para o vestibular da sua preferência!</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105">
                                <h2 className="text-2xl font-bold text-blue-700 mb-4">CURSO URCA</h2>
                                <p className="text-gray-700">25 Videoaulas com todos o conteúdo do manual! Receba 3 e-books.</p>
                                <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors">
                                    Saiba mais
                                </button>
                            </div>

                            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105">
                                <h2 className="text-2xl font-bold text-blue-700 mb-4">Curso UECE</h2>
                                <p className="text-gray-700">10 Videoaulas para a 1ª. fase e 10 videoaulas para a 2a. fase!! Receba 4 e-books.</p>
                                <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors">
                                    Saiba mais
                                </button>
                            </div>

                            <div className="bg-white rounded-lg shadow-lg p-8 transition-transform hover:scale-105">
                                <h2 className="text-2xl font-bold text-blue-700 mb-4">SSA 1</h2>
                                <p className="text-gray-700">15 Videoaulas abordando todo o conteúdo da prova de Química!</p>
                                <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors">
                                    Saiba mais
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Teacher Section */}
                <section className="py-16 bg-white">
                    <div className="container mx-auto px-4 md:px-8">
                        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
                            <div className="md:w-1/2">
                                <h1 className="text-3xl font-bold text-blue-800 mb-4">Prof. Richard Sintra</h1>
                                <hr className="border-blue-500 border-t-2 w-24 mb-6" />
                                <p className="text-lg leading-relaxed text-gray-700 mb-6">
                                    O professor Richard Sintra, o "TIO RICHARD", como os alunos carinhosamente o chamam, leciona química há mais de 25 anos, tendo passado por vários estados do nordeste, como Pernambuco, Paraíba, Bahia, Piauí e Ceará. Sempre voltado para a preparação dos seus "CABEÇÕES". O Tio Richard desenvolveu um método de aprendizagem que alia o lúdico ao científico, tornando o estudo da Química mais divertido e prazeroso.
                                </p>
                            </div>
                            <div className="md:w-1/2">
                                <img 
                                    src="https://i.postimg.cc/zXTZ4PbN/tio-richard.webp" 
                                    alt="Tio Richard" 
                                    className="rounded-full shadow-xl border-4 border-blue-500 mx-auto"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}