
import { useMemo, useState } from "react";
import geneData from "../assets/bio-data-db.json"
import type { Gene } from "../types/Gene"
import { GeneCard } from "./GeneCard"

interface FilterFields {
    name: boolean;
    id: boolean;
    function: boolean;
}

const MAX_ITEMS = 10
const MAX_LEFT = (MAX_ITEMS - 1) / 2

export const GeneCatalog = () => {
    const genesList: Gene[] = geneData
    const [filters, setFilters] = useState<FilterFields>({
        name: true,
        id: true,
        function: true
    })
    const [currentPage, setCurrentPage] = useState<number>(1)

    const handleFilterChange = (field: keyof FilterFields) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [field]: !prevFilters[field]
        }))
    }

    const [search, setSearch] = useState<string>("");
    const filteredGenes = useMemo(() => {
        const query = search.toLowerCase();

        return genesList.filter(gene => {
            if (!query) return true

            const nameMatch = filters.name && gene.name.toLowerCase().includes(query)
            const idMatch = filters.id && gene.id.toLowerCase().includes(query)
            const functionMatch = filters.function && gene.function.toLowerCase().includes(query)

            return nameMatch || idMatch || functionMatch;
        });
    }, [search, filters, genesList])

    return <>
        <div className="catalog-filter-area p-5">
            <div className="w-full max-w-sm min-w-[200px]">
                <div className="relative">
                    <input
                        className="w-full bg-transparent placeholder:text-slate-400 text-amber-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-amber-400 hover:border-amber-600 shadow-sm focus:shadow"
                        placeholder="Pesquisar por Nome, ID ou Função (Ex: 'Protein' ou 'BRCA')"
                        onChange={e => setSearch(e.target.value)}
                        value={search}
                    />
                    <button
                        className="absolute top-1 right-1 flex items-center rounded bg-amber-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-amber-700 focus:shadow-none active:bg-amber hover:bg-amber-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-2">
                            <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                        </svg>
                        Buscar
                    </button>
                </div>
                <div className="flex">
                    <div className="input-group flex items-center mx-3">
                        <label className="m-1" htmlFor="gene-name">Name</label>
                        <input type="checkbox"
                            className="m-1"
                            name="gene-name"
                            id="gene-name"
                            checked={filters.name}
                            onChange={() => handleFilterChange("name")}
                        />
                    </div>
                    <div className="input-group flex items-center mx-3">
                        <label className="m-1" htmlFor="gene-id">Id</label>
                        <input type="checkbox"
                            className="m-1"
                            name="gene-id"
                            id="gene-id"
                            checked={filters.id}
                            onChange={() => handleFilterChange("id")}
                        />
                    </div>
                    <div className="input-group flex items-center mx-3">
                        <label className="m-1" htmlFor="gene-function">Function</label>
                        <input type="checkbox"
                            className="m-1"
                            name="gene-function"
                            id="gene-function"
                            checked={filters.function}
                            onChange={() => handleFilterChange("function")}
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="catalog-board">
            {filteredGenes.length === 0 ?
                <p className="col-span-full text-center text-slate-500">Nenhum gene encontrado com os critérios de busca e filtro.</p> :
                <p className="col-span-full text-center text-slate-500">A busca retornou {filteredGenes.length} resultados.</p>
            }
            {
                filteredGenes.map(gene => {
                    return (
                        <GeneCard key={gene.id} id={gene.id} name={gene.name} func={gene.function} />
                    )
                })
            }
        </div>
    </>
}