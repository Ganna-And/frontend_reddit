import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  
  render() {
    return (
      <Html lang="en" data-theme='mytheme'>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
          <link href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}