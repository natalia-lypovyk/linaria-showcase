import Head from 'next/head';

import Styled from "./home.styles";

export default function Home() {
  return (
    <>
      <Head>
        <title>With Linaria</title>
      </Head>

      <Styled.Form>
        <Styled.Label>
          Owner*
          <Styled.Input />
        </Styled.Label>

        <Styled.Label>
          Repo*
          <Styled.Input />
        </Styled.Label>

        <Styled.Button>Go!</Styled.Button>
      </Styled.Form>
    </>
  )
}
