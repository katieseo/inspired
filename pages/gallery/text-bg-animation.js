import React from "react";

const TextBgAnimation = () => {
  return (
    <main className="showcase text-bg-animation">
      <div className="typography">
        <div className="accent">text</div>
        <div>background</div>
        <div>animation</div>
      </div>
      <style jsx>{`
        .text-bg-animation {
          background: #4d6c81;
        }

        .typography {
          color: rgba(77, 108, 129, 0.2);
          font-size: 7rem;
          letter-spacing: 1rem;
          line-height: 0.86;
          text-align: center;
          word-break: break-all;

          background-image: url("/img/hojas_3.jpg");
          background-clip: text;
          -webkit-background-clip: text;
          animation: bgscroll 25s linear infinite;
        }

        @keyframes bgscroll {
          from {
            background-position: center 0;
          }
          to {
            background-position: center 300%;
          }
        }

        .accent {
          font-size: 10rem;
          line-height: 0.8;
        }

        @media (min-width: 60rem) {
          .accent {
            margin-left: -15rem;
          }
        }
      `}</style>
    </main>
  );
};

export default TextBgAnimation;
