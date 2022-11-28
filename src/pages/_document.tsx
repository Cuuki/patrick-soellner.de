import type { DocumentContext, DocumentInitialProps } from 'next/document';
import Document, {
  Head as NextHead,
  Html as NextHtml,
  Main as NextMain,
  NextScript,
} from 'next/document';
import { InitializeColorMode } from 'theme-ui';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    return await Document.getInitialProps(ctx);
  }

  render() {
    return (
      <NextHtml>
        <NextHead />
        <body>
          <InitializeColorMode />
          <NextMain />
          <NextScript />
        </body>
      </NextHtml>
    );
  }
}

export default MyDocument;
