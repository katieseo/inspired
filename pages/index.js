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

      <main className="showcase home">
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

        <style jsx>{`
          .home {
            background: #cbe2e0;
            text-align: center;
          }

          .home iframe {
            border: 0;
            max-width: 100%;
            min-height: 350px;
            width: 100%;
          }

          .ani-large {
            display: none;
          }

          @media (min-width: 800px) {
            .showcase.home iframe.ani-large {
              display: block;
              min-height: 500px;
              width: 800px;
            }

            .showcase.home iframe.ani-small {
              display: none;
            }
          }
        `}</style>
      </main>
    </div>
  );
}
