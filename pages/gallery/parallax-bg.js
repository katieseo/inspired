import React from "react";

const ParallaxBg = () => {
  return (
    <main className="parallax-bg">
      <div className="parallax-img1">
        <h6>Parallax Background Images</h6>
        <h2>
          Parallax effects can create a sense of depth and dimensionality.
        </h2>
      </div>
      <div className="parallax-img2">
        <h2>
          par·al·lax <br /> /ˈperəˌlaks/
        </h2>
      </div>
      <section>
        <p>
          the effect whereby the position or direction of an object appears to
          differ when viewed from different positions, e.g. through the
          viewfinder and the lens of a camera.
        </p>
      </section>
      <div className="parallax-img3"></div>
      <div className="parallax-img1"></div>

      <style jsx>{`
        .parallax-bg {
          padding-left: 0;
          padding-right: 0;
          text-align: center;
        }

        .parallax-bg section {
          align-items: center;
          font-family: "Cardo", serif;
          display: flex;
          color: #fff;
          justify-content: center;
          padding: 3rem;
          min-height: 500px;
          text-align: center;
        }

        .parallax-bg p {
          font-size: 1.4rem;
          line-height: 3;
          max-width: 30rem;
        }

        .parallax-img1,
        .parallax-img2,
        .parallax-img3 {
          align-items: center;
          display: flex;
          flex-direction: column;
          background-size: cover;
          background-attachment: scroll;
          background-position: center;
          justify-content: center;
          opacity: 0.95;
          position: relative;
        }

        .parallax-img1 {
          background-image: url("/img/pexels-cottonbro-3585031.jpg");
          min-height: 95vh;
        }

        .parallax-img2 {
          background-image: url("/img/pexels-angela-roma-7319336.jpg");
          min-height: 80vh;
        }

        .parallax-img3 {
          background-image: url("/img/pexels-max-vakhtbovych-6434617.jpg");
          min-height: 80vh;
        }

        @media (min-width: 800px) {
          .parallax-img1,
          .parallax-img2,
          .parallax-img3 {
            background-attachment: fixed;
          }
        }
      `}</style>
    </main>
  );
};

export default ParallaxBg;
