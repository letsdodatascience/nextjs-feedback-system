import Head from 'next/head';
import { useAuth } from '../lib/auth';

import { Flex, Heading, Button, Code } from '@chakra-ui/core';

export default function Home() {
  const auth = useAuth();
  return (
    <div>
      <Head>
        <title>Commenting System SaaS</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Flex
        maxWidth='700px'
        width='100%'
        direction='column'
        marginRight='auto'
        marginLeft='auto'
        marginTop='3em'
        align='center'
        justify='center'
      >
        <Heading marginBottom='3em' textAlign='center'>
          Commenting System
        </Heading>
        <Button
          variantColor='teal'
          variant='solid'
          onClick={(e) => auth.signinWithGithub()}
          mb='1em'
        >
          Github Login
        </Button>
        {auth.user ? (
          <div>
            Current User : <Code>{auth?.user.email}</Code>
          </div>
        ) : (
          ''
        )}
        {auth.user ? (
          <Button
            mt='1em'
            variantColor='teal'
            variant='solid'
            onClick={(e) => auth.signout()}
          >
            Sign out
          </Button>
        ) : (
          ''
        )}
      </Flex>
    </div>
  );
}
