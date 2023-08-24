import { createContext } from "react";
import useLocalSLng from "../extras/useLocalSLng";

export const LanguageContext = createContext();

const LanguagePreferenceProvider = ({ children }) => {
  const [languagePreference, setLanguagePreference] = useLocalSLng("language");

  return (
    <LanguageContext.Provider
      value={{ languagePreference, setLanguagePreference }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguagePreferenceProvider;
