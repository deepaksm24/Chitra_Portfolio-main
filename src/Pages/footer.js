const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 text-center">
      <div className="container">
        <p className="mb-2">&copy; {new Date().getFullYear()} Chitradevi. All Rights Reserved.</p>
        <div className="d-flex justify-content-center gap-3">
          <a href="https://github.com/Chitradevid" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">GitHub</a>
          <a href="https://www.linkedin.com/in/chitra-devi-08874787/" target="_blank" rel="noopener noreferrer" className="text-light text-decoration-none">LinkedIn</a>
          <a href="mailto:chitradevii93@gmail.com" className="text-light text-decoration-none">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;