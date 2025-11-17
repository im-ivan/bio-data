import { Link } from "react-router-dom"

export const Header = () => (
    <header className="bg-[#D9BB84] p-3">
        <nav className="block border border-[#592202] py-5">
            <ul className="flex justify-end space-x-3">
                <li><Link to="/" className="p-5 hover:text-[#BF532C]">Home</Link></li>
                <li><Link to="/catalog" className="p-5 hover:text-[#BF532C]">Catálogo</Link></li>
                <li><Link to="/basket" className="p-5 hover:text-[#BF532C]">Cesta de Análise</Link></li>
            </ul>
        </nav>
    </header>
)
