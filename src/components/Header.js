export default function Header({ theme }) {
  return (
    <div className="padT4 padB4">
      <div className="container mobile-container">
        <div className="d-flex justify-content-between">
          <div>
            <img alt="svcc Home page" src="/images/SVCCLogo.png" />
          </div>
          <div className="light">
            <h4 className="header-title">Silicon Vally Code Camp</h4>
          </div>
          <div className={theme === "light" ? "" : "text-info"}>
            Hello Mr. Ali &nbsp;&nbsp;
            <span href="#">sign-out</span>
          </div>
        </div>
      </div>
    </div>
  );
}
