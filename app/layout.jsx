import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import WhatsApp from "@components/whatsapp"
export const metadata = {
  title: "NEXTJSCRUD",
  description: "Discover & Share Your Prompts",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
      <Provider>
        <div className='main'>
          <div className='gradient' />
        </div>

        <main className='app'>
          <Nav />
          {children}
          <WhatsApp />
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
