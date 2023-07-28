import React, { useEffect, useRef, useState } from "react";
import Item from "./Item";
import "./carousel.css";
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/3.jpg";
import img4 from "../assets/4.jpg";
import img5 from "../assets/5.jpg";
import img6 from "../assets/6.jpg";

const items = [
  {
    id: 0,
    img: img1,
    content: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 1,
    img: img2,
    content: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 2,
    img: img3,
    content: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 3,
    img: img4,
    content: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 4,
    img: img5,
    content: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    id: 5,
    img: img6,
    content: "Lorem ipsum dolor sit amet consectetur.",
  },
];

const Carousel = () => {
  const slides = useRef();
  const [activeItem, setActiveItem] = useState(0);
  const [intervalItem, setIntervalItem] = useState(null);

  useEffect(() => {
    const id = setTimeout(() => {
      setActiveItem((prev) => {
        slides.current.scrollLeft =
          ((prev + 1) % items.length) * slides.current.clientWidth;
        return (prev + 1) % items.length;
      });

      console.log(slides.current.scrollLeft);
    }, 5000);
    setIntervalItem(id);
    return clearInterval(intervalItem);
  }, [activeItem]);
  const nextHandler = () => {
    slides.current.scrollLeft +=
      slides.current.clientWidth % slides.current.scrollWidth;
    setActiveItem((prev) => {
      return (prev + 1) % items.length;
    });
  };
  const PrevHandler = () => {
    slides.current.scrollLeft -=
      slides.current.clientWidth % slides.current.scrollWidth;
    setActiveItem((prev) => {
      return Math.abs((prev - 1) % items.length);
    });
  };
  return (
    <div className="container">
      <div className="slides" ref={slides}>
        {items.map((item) => (
          <Item Item={item} />
        ))}
      </div>
      <div className="controls">
        <div>
          <button
            className="next"
            onClick={nextHandler}
            disabled={activeItem >= items.length - 1 ? true : false}
          >
            {`>`}
          </button>
        </div>
        <div className="pagination">
          {items.map((item) => {
            return (
              <button
                className=""
                style={
                  activeItem == item.id
                    ? { background: `red` }
                    : { background: `gray` }
                }
              >
                {}
              </button>
            );
          })}
        </div>
        <div>
          <button
            className="prev"
            onClick={PrevHandler}
            disabled={activeItem <= 0 ? true : false}
          >
            {`<`}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
