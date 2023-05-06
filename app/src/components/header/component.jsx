import "./style.css"
function Component() {
  return (
    <div className="header">
      <div className="header__elements">
        <div className="header__logos">
          <span>Codelândia</span>
          <span>Blog</span>
        </div>
        <div className="header__form">
          <input type="text" placeholder="Pesquisar no blog..."/>
        </div>
      </div>
    </div>
  );
}

export default Component
