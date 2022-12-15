import { Html, Head, Main, NextScript } from 'next/document';

const Document: React.FC = () => {
  return (
    <Html>
      <Head />
      <body>
        <div id='overlays' />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
