"use client";
import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

import { FloatingWhatsApp } from 'react-floating-whatsapp'
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
          <FloatingWhatsApp phoneNumber={'9664977979'} accountName={'Jatin Vaishnav'} allowEsc
            allowClickAway
            notification
            darkMode={true}
            notificationSound={true} />
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;
