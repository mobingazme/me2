import Layout from "@/commponents/layout/Layout";
import './globals.css'


export const metadata = {
  title: "mobin.gazmeh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir='rtl'>
      <body>
        <video className="fixed top-0 left-0 w-full h-full object-cover -z-20" src="/videos/bgVideo.mp4" autoPlay='ture' loop='ture' muted ></video>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}

