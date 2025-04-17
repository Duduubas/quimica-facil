export default function Footer() {
    return (
        <footer>
            {/* CTA Section */}
            <section className="py-12 bg-blue-700 text-white text-center">
                <div className="container mx-auto px-4 md:px-8">
                    <h2 className="text-3xl font-bold mb-6">Pronto para começar?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">Junte-se aos nossos CABEÇÕES e comece sua jornada rumo à aprovação!</p>
                    <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors">
                        MATRICULE-SE AGORA
                    </button>
                </div>
            </section>

            {/* Footer Content */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4 md:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Informações */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold text-blue-800 mb-4 pb-2 border-b border-gray-200">INFORMAÇÕES</h2>
                            <div className="space-y-3 mt-4">
                                <p className="text-gray-700 flex items-center">
                                    Juazeiro do Norte - CE
                                </p>
                                <p className="text-gray-700 flex items-center">
                                    CPF: 722.811.623-20
                                </p>
                                <p className="text-gray-700 flex items-center">
                                    +55 88 99249 - 7932 (whatsapp)
                                </p>
                                <p className="text-gray-700 flex items-center">
                                    <a href="mailto:cursoquimicafacil@hotmail.com" className="text-blue-600 hover:text-blue-800 transition-colors">cursoquimicafacil@hotmail.com</a>
                                </p>
                            </div>
                        </div>

                        {/* Política - Reestilizada */}
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold text-blue-800 mb-4 pb-2 border-b border-gray-200">POLÍTICA</h2>
                            
                            <div className="mt-4">
                                <h3 className="font-bold text-blue-700 mb-2 flex items-center">
                                    Política de Entrega
                                </h3>
                                <p className="text-gray-700 pl-8 mb-4">
                                    Os nossos materiais são digitais (PDF) e encontram-se postados na plataforma. Você terá acesso imediato.
                                </p>
                                
                                <h3 className="font-bold text-blue-700 mb-2 flex items-center">
                                    Política de Reembolso
                                </h3>
                                <p className="text-gray-700 pl-8">
                                    Em até 10 dias após a aquisição de nossos planos, você poderá solicitar reembolso, através dos nossos canais de comunicação. O reembolso ocorrerá de acordo com as regras da administradora do cartão.
                                </p>
                            </div>
                        </div>

                        {/* Satisfação */}
                        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center justify-center">
                            <div className="flex flex-col items-center">
                                <img 
                                    src="https://i.postimg.cc/sxzWJgvq/satisfacao.webp" 
                                    alt="Satisfação" 
                                    className="w-52 h-52 object-contain mb-4" 
                                />
                                <div className="bg-green-100 py-2 px-4 rounded-full text-green-800 font-semibold text-center">
                                    100% Garantida
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="mt-12 pt-6 border-t border-gray-300 text-center">
                        <p className="text-gray-600">&copy; {new Date().getFullYear()} Química Fácil. Todos os direitos reservados.</p>
                    </div>
                </div>
            </section>
        </footer>
    )
}