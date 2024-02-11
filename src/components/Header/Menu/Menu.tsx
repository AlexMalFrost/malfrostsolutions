import React from 'react';
import './Menu.scss';

const Menu: React.FC = () => {
  const [menulogo, setMenuLogo] = React.useState(true);
  const [selectedlang, setSelectedLang] = React.useState('ES');
  const [switcher, setSwitcher] = React.useState(false);
  const langs = ['ES', 'RU', 'EN', 'PT'];
  return (
    <div className="menu">
      <div className="menu_wrap">
        <div className="menu_lang">
          <div className="menu_lang_choose" onClick={() => setSwitcher(!switcher)}>
            {selectedlang}
          </div>
        </div>
      </div>
      <div className={switcher ? 'menu_choose' : 'none'}>
        {langs.map((item) => (
          <div key={item}>
            <div
              className="menu_choose_list"
              onClick={() => {
                setSelectedLang(item);
                setSwitcher(!switcher);
              }}>
              {item}
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="menu_logo" onClick={() => setMenuLogo(!menulogo)}>
          <div className={menulogo ? 'menu_material_logo' : 'menu_material_logo_rotated'}>
            <div className="main_lines">
              <div className="lines"></div>
              <div className="lines"></div>
              <div className="lines"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
