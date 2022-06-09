import "./Footer.css";

import { Button } from "primereact/button";

function Footer() {
  const githubLink = "https://github.com/cemres";
  const linkedinLink =
    "https://www.linkedin.com/in/cemre-sude-kasapo%C4%9Flu-b790a3223/";
  const fullYear = new Date().getFullYear();

  return (
    <div className="text-700 text-center footer">
      <div className="text-900 font-bold text-2xl mb-3">Food Order App</div>
      <div className="text-700 text-l mb-5">
        &copy; {fullYear} Cemre Sude Kasapoglu
      </div>
      <div className="grid justify-content-center">
        <div className="col-2">
          <div className="grid">
            <div className="col">
              <Button
                label="Github"
                icon="pi pi-github"
                className="font-bold p-button-raised p-button-rounded white-space-nowrap p-button-secondary"
                onClick={() => {
                  window.open(githubLink, "_blank");
                }}
              />
            </div>
            <div className="col">
              <Button
                label="Linkedin"
                icon="pi pi-link"
                className="font-bold p-button-outlined p-button-rounded white-space-nowrap p-button-secondary"
                onClick={() => {
                  window.open(linkedinLink, "_blank");
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
