interface GeneCardProps {
    name: string
    id: number | string
    func: string
}

export const GeneCard = ({ name, id, func }: GeneCardProps) => {
    return (
        <div className="gene-card border border-[#D9BB84] hover:border-[#592202] m-3 p-3">
            <h3 className="text-[#D9A036]">
                Name: <span className="text-[#592202]">{name}</span>
            </h3>

            <p className="text-[#D9A036]">
                Id: <span className="text-[#592202]">{id}</span>
            </p>

            <p className="text-[#D9A036]">
                Function: <span className="text-[#592202]">{func}</span>
            </p>
        </div>
    )
}
