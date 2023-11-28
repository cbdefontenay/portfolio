import { languages } from "../i18n/ui";
import { getLangFromUrl, useTranslations } from "../i18n/utils";

const currentURL = new URL(window.location.href);
const lang = getLangFromUrl(currentURL);
const t = useTranslations(lang);

const LanguagePicker = () => {
  return (
    <div className="flex items-center justify-center">
      <ul className="grid grid-cols-1 gap-2 mt-4 items-center justify-center">
        {Object.entries(languages).map(([lang, label]) => (
          <li key={lang}>
            <a href={`/${lang}/`}>{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguagePicker;
