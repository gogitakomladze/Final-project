import { LocaleContext, Locale_Enam } from "./LocaleContext";
import { PropsWithChildren, useEffect, useState } from "react";
import { IntlProvider } from "react-intl";

import en from "./translation/en.json"
import ka from "./translation/ka.json"

export function LocaleProvider({ children }: PropsWithChildren) {
    const [locale, setLocale] = useState<Locale_Enam>(Locale_Enam.EN);

    const languages = {en, ka}

    useEffect(() => {
        const language = localStorage.getItem("language");
        if (language) setLocale(language as Locale_Enam);
    }, []);


    function toggleLocale() {
        if (locale === Locale_Enam.KA) {
            setLocale(Locale_Enam.EN)
            localStorage.setItem("language", Locale_Enam.EN);
        }
        else if (locale === Locale_Enam.EN) {
            setLocale(Locale_Enam.KA)
            localStorage.setItem("language",Locale_Enam.KA)
        };
    };

    return(
         <LocaleContext.Provider value={{locale, setLocale, toggleLocale}}>
            <IntlProvider
            messages={languages[locale]}
            locale={locale}
            defaultLocale="en"
            >
                 {children}
                 </IntlProvider>
       </LocaleContext.Provider>
    )
}

