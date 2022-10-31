import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html className="nightwind">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          {/* Meta Tags */}
          <meta name="title" content="Portfolio" key="title" />
          <meta
            name="description"
            key="description"
            content="A Github themed portfolio template using NextJS & TailwindCSS"
          />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" key="ogtype" content="website" />
          <meta property="og:url" key="ogurl" content="Portfolio" />
          <meta
            property="og:title"
            key="ogtitle"
            content="Personal Portfolio"
          />
          <meta
            property="og:description"
            key="ogdescription"
            content="A personal portfolio built using NextJS & TailwindCSS"
          />
          <meta property="og:image" key="ogimage" content="" />

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
