import { useTranslation } from 'react-i18next'
import { Logo } from '../../assets'
import './Navbar.css'


const Navbar = () => {
  const { t, i18n } = useTranslation();
  const language  = localStorage.getItem('i18nextLng')
  const handleChange = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  }
  const data = [
    {
      savol:"Ismingiz nima ?",
      javob:"Behruzbek"
    },
    {
      savol:"Familiyangiz  nima ?",
      javob:"Nazarov"
    },
  ]
  return (
    <div className='navbar'>
      <div className="container">
        <img src={Logo} alt="logo" className='navbar-logo' />
        <ul className="navbar-lists">
          <li className="navbar-list">{t("home")}</li>
          <li className="navbar-list">{t("aboit")}</li>
          <li className="navbar-list">{t("info")}</li>
          <li className="navbar-list">{t("connect")}</li>
          <h3>Savollar</h3>
          {
            data.map((item, i) =>(
              <div key={i}>
                <h4>{item.savol}</h4>
                <h4>{item.javob}</h4>
              </div>
              )  )
          }
        </ul>
        <div className="navbar-select-container">
          <div className="navbar-select" onChange={handleChange}>
            <select name="languages" value={language}>
              <option value="en">En</option>
              <option value="uz">Uz</option>
              <option value="ru">Ru</option>
            </select>
          </div>
          <div className="navbar-select-options">
            <span onClick={() => i18n.changeLanguage('en')}>En</span>
            <span onClick={() => i18n.changeLanguage('uz')}>Uz</span>
            <span onClick={() => i18n.changeLanguage('ru')}>Ru</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
