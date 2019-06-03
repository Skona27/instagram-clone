/** @jsx jsx */
import { css, Global, jsx } from "@emotion/core";
import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  public static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  public render() {
    return (
      <html lang="eng">
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Global
          styles={css`
            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
              @import url("https://fonts.googleapis.com/css?family=Raleway:400,600,700&display=swap");
              font-family: "Raleway", sans-serif;
            }
          `}
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
