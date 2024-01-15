import './LanguageSet.scss';

const LanguageSet = () => {
  return (
    <div className="language-settings">
      <a href="/" className="language-settings__language--active">
        Укр
      </a>
      <span className="language-settings__separator">|</span>
      <a href="/" className="language-settings__language">
        Рус
      </a>
    </div>
  );
};

export default LanguageSet;
