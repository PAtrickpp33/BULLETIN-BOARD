function Footer() {
    return (
      <footer className= "text-black py-6">
        <div className="container mx-auto text-center px-4">
          <p className="mb-4">© 2023 BULLETIN BOARD. Powered by Next.js. All rights reserved.</p>
          
          <div className="flex justify-center space-x-4">
            <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <img src="/assets/images/nextjs.png" alt="Next.js Logo" className="w-12 h-12" />
            </a>
            <a href="https://www.linkedin.com/in/patrickpp33" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <img src="/assets/images/linkedin.png" alt="LinkedIn Logo" className="w-12 h-12" />
            </a>
            <a href="https://github.com/PAtrickpp33" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
              <img src="/assets/images/github.png" alt="GitHub Logo" className="w-12 h-12" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;
  