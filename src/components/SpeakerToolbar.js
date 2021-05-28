export default function SpeakerToolbar({
  theme,
  setTheme,
  setShowSessions,
  showSessions,
}) {
  return (
    <section className="toolbar dark-theme-header">
      <div className="container">
        <div className="justify-content-between">
          <ul className="toolrow d-flex flex-colum flex-lg-row">
            <li className=" d-flex flex-column flex-md-row">
              <b>Show Sessions &nbsp;&nbsp;</b>
              <label className="fav">
                <input
                  type="checkbox"
                  checked={showSessions}
                  onChange={(event) => setShowSessions(event.target.checked)}
                />
                <span className="switch"></span>
              </label>
            </li>
            <li className=" d-flex flex-column flex-md-row">
              <strong>Theme</strong>
              <select
                className="form-control theme"
                value={theme}
                onChange={(event) => setTheme(event.target.value)}
              >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
