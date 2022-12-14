import React from "react";

const Multidimensional = () => {
  return (
    <main className="showcase multi">
      <h6>3D Web Experience</h6>
      <h2>
        3D opens a new door for creativity and it has been easier and more fun
        to create.
      </h2>
      <h5>Click the crystal ball and move around.</h5>
      <iframe src="https://my.spline.design/untitled-9feee0f680b9dec72bc5cc1880b2dece/"></iframe>

      <style jsx>{`
        .multi {
          background: #1e1f1f;
          text-align: center;
        }

        .multi iframe {
          border: 0;
          max-width: 100%;
          min-height: 500px;
          width: 800px;
        }

        .multi h2 {
          color: #fff;
        }
      `}</style>
    </main>
  );
};

export default Multidimensional;
