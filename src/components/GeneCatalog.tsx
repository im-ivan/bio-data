import geneData from "../assets/bio-data-db.json"
import type { Gene } from "../types/Gene"
import { GeneCard } from "./GeneCard"
export const GeneCatalog = () => {
    const geneList: Gene[] = geneData
    return <>
        <div className="filter-area">
        </div>
        <div className="catalog-board">
            {
                geneList.map(gene => {
                    return (
                        <GeneCard key={gene.id} id={gene.id} name={gene.name} func={gene.function} />
                    )
                })
            }
        </div>
    </>
}