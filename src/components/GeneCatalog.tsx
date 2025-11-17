import geneData from "../assets/bio-data-db.json"
import type { Gene } from "../types/Gene"
export const GeneCatalog = () => {
    const geneList: Gene[] = geneData
    return <>
        <div className="filter-area">

        </div>
        <div className="catalog-board">
            {
                geneList.map(gene => {
                    return (
                        <div key={gene.id}>
                            <h3>{gene.name}</h3>
                            <p>{gene.function}</p>
                        </div>)
                })
            }
        </div>
    </>
}