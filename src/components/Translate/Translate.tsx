import { useContext } from "react"
import { LocaleContext } from "@src/provider/LocaleProvider/LocaleContext"
import { FormattedMessage } from "react-intl"


export function Translate() {
const {toggleLocale} = useContext(LocaleContext)
    return (
        <div>
            <button onClick={() => toggleLocale()}>შეცვალე ენა</button>
            <FormattedMessage id="hello"/>
        </div>
        );
}