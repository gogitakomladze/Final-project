import { useGlobalProvider } from "@src/provider/GlobalProvider/useGlobalProvider"
import { useGetCategoris } from "@src/hooks/useGetCategori/useGetCategori";
import { TNavigateCategori } from "./Categori.styled";
export function Categori() {
const {categoriname} = useGetCategoris();
console.log(categoriname);
    return(
        <TNavigateCategori>
            {categoriname?.map((category) => {
                return(
                    <div key={category.id}>
                        <button>
                            <h3>{category.name}</h3>
                        </button>
                    </div>
                )
            })}
        </TNavigateCategori>

    )
}