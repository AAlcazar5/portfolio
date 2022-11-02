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
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
