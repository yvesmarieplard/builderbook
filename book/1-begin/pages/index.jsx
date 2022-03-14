import Head from 'next/head';
import Button from '@material-ui/core/Button';

const Index = () => (
  <div style={{ padding: '10x 45px' }}>
    <Head>
      <title>index Page</title>
      <meta name="description" content="this is the desciption of the index page" />
    </Head>
    <p>Content on Index page</p>
    <Button variant="contained">MUI button</Button>
  </div>
);

export default Index;
