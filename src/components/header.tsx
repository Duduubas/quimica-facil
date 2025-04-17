import { FlaskConical } from "lucide-react"
import Link from "next/link"

export default function Header() {
    const navOptions = [
        // PÁGINAS DO SITE
        { href: '/', label: 'Início' },
        { href: '/conteudos', label: 'Conteúdos' },
        { href: '/cursos', label: 'Acesso aos Cursos' },
        { href: '/grupos', label: 'Acesso aos Grupos' },
        { href: '/planos', label: 'Comprar Plano' },
        { href: '/contato', label: 'Contato' },

        //PÁGINA DE LOGIN
        { href: '/login', label: 'Login' }
    ]
    return (
        <header className="bg-gradient-to-r from-amber-50 to-orange-50 p-7 shadow-md border-b-2 border-orange-200">
            <nav>
                <div className="flex items-center justify-between">
                    <Link href='/' className="flex items-center gap-[0.4rem] text-[1.3rem] md:text-[1.7rem] font-black text-blue-800 font-heading hover:text-blue-700 transition-colors duration-300">
                    <FlaskConical/> Química Fácil
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-3">
                        {navOptions.map((item, index) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`
                                    font-sans font-semibold
                                    ${item.label === 'Login' 
                                        ? 'bg-blue-600 text-white border-blue-800 hover:bg-blue-700'
                                        : 'bg-amber-50 border-blue-800 hover:bg-blue-700 hover:text-white'}
                                    border-2 rounded-tl-lg
                                    text-black px-5 py-2 text-[1rem]
                                    transition-all duration-300
                                    hover:shadow-md transform hover:-translate-y-0.5
                                `}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    )
}