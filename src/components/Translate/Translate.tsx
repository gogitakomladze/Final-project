import { useContext } from "react"
import { LocaleContext } from "@src/provider/LocaleProvider/LocaleContext"
import { FormattedMessage } from "react-intl"
import { Switch } from 'antd';
import { Ttranslat } from "./Translate.styled";

export function Translate() {
const {toggleLocale} = useContext(LocaleContext);
const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };
const App: React.FC = () => <Switch defaultChecked onChange={onChange} />;

    return (
        <Ttranslat >
            <button onClick={() => toggleLocale()}><FormattedMessage id="ENG"/></button>
            
        </Ttranslat>
      
        );
}