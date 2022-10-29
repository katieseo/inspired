import React from "react";
import Masonry from "react-masonry-css";
import { masonryData } from "../api/data";

const MasonryLayout = () => {
  const breakpointColumnsObj = {
    default: 7,
    2000: 6,
    1800: 5,
    1400: 4,
    800: 3,
    600: 2,
    400: 1,
  };

  return (
    <main className="masonry">
      <div className="page-title">
        <h6>Cascading grid layout</h6>
        <h2>Masonry Style Layout</h2>
      </div>

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {masonryData.map((item) => (
          <div key={item.id}>
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
          </div>
        ))}
      </Masonry>

      <style jsx global>{`
        .masonry h2 {
          color: white;
        }

        .masonry img {
          border-radius: 4px;
          transition: all 1s ease-in-out;
        }

        .masonry-grid {
          display: -webkit-box; /* Not needed if autoprefixing */
          display: -ms-flexbox; /* Not needed if autoprefixing */
          display: flex;
          margin-left: -30px; /* gutter size offset */
          width: auto;
        }
        .masonry-grid_column {
          padding-left: 30px; /* gutter size */
          background-clip: padding-box;
        }

        /* Style items */
        .masonry-grid_column > div {
          /* change div to reference elements in <Masonry> */
          border-radius: 4px;
          color: white;
          font-size: 0.75rem;
          font-weight: 300;
          padding: 30px 6%;
        }
      `}</style>
    </main>
  );
};

export default MasonryLayout;
