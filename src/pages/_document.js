import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <link
          rel='stylesheet'
          href='https://unpkg.com/leaflet@1.9.2/dist/leaflet.css'
          integrity='sha256-sA+zWATbFveLLNqWO2gtiw3HL/lh1giY/Inf1BJ0z14='
          crossorigin=''
        />

        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
        <script
          src='https://unpkg.com/leaflet@1.9.2/dist/leaflet.js'
          integrity='sha256-o9N1jGDZrf5tS+Ft4gbIK7mYMipq9lqpVJ91xHSyKhg='
          crossorigin=''
        ></script>
        <script src='https://unpkg.com/react/umd/react.production.min.js'></script>
        <script src='https://unpkg.com/react-dom/umd/react-dom.production.min.js'></script>
        <script src='https://unpkg.com/prop-types/prop-types.min.js'></script>
        <script src='https://unpkg.com/recharts/umd/Recharts.js'></script>
      </Html>
    );
  }
}
