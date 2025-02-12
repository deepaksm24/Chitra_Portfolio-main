import React from "react";
import Button from "react-bootstrap/Button";

function Resumepage() {
  return (
    <div>
      <a
      href="https://drive.google.com/file/d/1RmOQHpMx_f1ngiDlCOlSvNOYlzyWXuGT/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"     
      >
        <Button className="mt-5" variant="outline-success">
          My Resume
        </Button>
      </a>
    </div>
  );
}

export default Resumepage;
