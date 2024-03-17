import { createContext } from "react";

export enum Locale_Enam {
    EN ="en",
    KA = "ka",
}

interface LocaleContextValue {
    locale: Locale_Enam;
    toggleLocale: () => void;
    setLocale: React.Dispatch<React.SetStateAction<Locale_Enam>>
}

export const LocaleContext = createContext<LocaleContextValue>({
    locale: Locale_Enam.EN,
    setLocale: () => {},
    toggleLocale: () => {},
});
