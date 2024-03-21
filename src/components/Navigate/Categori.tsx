import { useGlobalProvider } from "@src/provider/GlobalProvider/useGlobalProvider"
import { useGetCategoris } from "@src/hooks/useGetCategori/useGetCategori";
import { TNavigateCategori } from "./Categori.styled";
import { useNavigate } from "react-router-dom";
export function Categori() {
const {categoriname} = useGetCategoris();

const navigate = useNavigate();

    return(
        <TNavigateCategori>
            {categoriname?.map((category) => {
                return(
                    <div key={category.id}
                     onClick={() => {
                        if (category.name === "სმარტფონები"){
                            navigate("./Smartphone");
                        } else if (category.name === "ფოტო | ვიდეო"){
                            navigate("./Photovideo")
                        } else if (category.name === "გეიმინგი") {
                            navigate("./Gaming")
                        } else if(category.name === "ლეპტოპები") {
                            navigate("./Laptop")
                        } else if(category.name === "TV | მონიტორები") {
                            navigate("./Tvmonitor")
                        } else if(category.name == "ტაბები") {
                            navigate("./Tabs")
                        }else if(category.name == "აუდიო") {
                            navigate("./Audio")
                        }
                     }}>
                        <button>
                            <h3>{category.name}</h3>
                        </button>
                    </div>
                )
            })}
        </TNavigateCategori>

    )
}