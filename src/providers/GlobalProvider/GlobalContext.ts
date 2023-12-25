import { createContext } from "react";

import { TWeek, TSubject } from "@src/@types/general";

interface TGlobalContext {
  weeks: TWeek[];
  subjects: TSubject[];
  setWeeks: React.Dispatch<React.SetStateAction<TWeek[]>>;
  setSubjects: React.Dispatch<React.SetStateAction<TSubject[]>>;
}

export const GlobalContext = createContext<TGlobalContext>({
  weeks: [],
  subjects: [],
  setSubjects: () => {},
  setWeeks: () => {},
});
