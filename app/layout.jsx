import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import Footer from "@components/Footer";


export const metadata = {
  title: "BULLETIN BOARD",
  description: "Discover & Share Personal Prompts",
  favicon: '/assets/images/logo.svg',
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <link rel="icon"
      href='/assets/images/logo.svg'
      type="image/svg"
  
    />
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
          <Footer/>
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;