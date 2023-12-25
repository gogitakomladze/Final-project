import { PropsWithChildren, useState } from "react";
import { TSubject, TWeek } from "@src/@types/general";
import { GlobalContext } from "./GlobalContext";

import { mock_subjects } from "@src/mocks/subjects";
import { mock_weeks } from "@src/mocks/weeks";

export function GlobalProvider({ children }: PropsWithChildren) {
  const [weeks, setWeeks] = useState<TWeek[]>(mock_weeks);
  const [subjects, setSubjects] = useState<TSubject[]>(mock_subjects);

  return (
    <GlobalContext.Provider value={{ weeks, setWeeks, subjects, setSubjects }}>
      {children}
    </GlobalContext.Provider>
  );
}
