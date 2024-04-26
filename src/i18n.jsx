import  i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import languageDetector from 'i18next-browser-languagedetector'
import uzTranslation from '../public/locales/uz.json'
import enTranslation from '../public/locales/en.json'
import ruTranslation from '../public/locales/ru.json'
const language  = localStorage.getItem('i18nextLng' || 'en')

i18n
.use(Backend)
// tillni aniqlab berish 
.use(languageDetector)
// i18next react bilan configurstsiya qilib beradi  (bog;lab beradi)
.use(initReactI18next)
.init({
    fallbackLng:'en',
    lng:language,
    debug:true,
    resources:{
        uz:{translation: uzTranslation},
        en:{translation: enTranslation},
        ru:{translation: ruTranslation}
    }
})
export default i18n;