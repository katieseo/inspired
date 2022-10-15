import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>inspired Web Creativity</title>
        <meta
          name="description"
          content="Collection of modern web inspiration"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main home">
        <h6>
          Collection of <br /> Modern Web Inspiration
        </h6>
        <h2>What did you get inspired by today?</h2>
        <iframe
          src="https://my.spline.design/untitledcopy-5c5227cda40e1e796bd0aff95ae6be99/"
          className="ani-small"
        ></iframe>
        <iframe
          src="https://my.spline.design/untitled-2ed143459f10b9b62065c65d5e7d8982/"
          className="ani-large"
        ></iframe>
      </main>
    </div>
  );
}
