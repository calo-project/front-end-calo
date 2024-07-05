import React, { useState } from 'react';

const Carousel = () => {
  const images = [
    'https://i.pinimg.com/564x/31/81/68/318168c0f8d650267176330bf2f3c3e7.jpg',
    'https://i.pinimg.com/564x/ae/51/82/ae518249a0497e64c78dc2766182849c.jpg',
    'https://i.pinimg.com/564x/2b/fc/0c/2bfc0ceae8de93a0469041ff20f3edd6.jpg',
    'https://i.pinimg.com/564x/58/dc/9b/58dc9ba28970e3fdc45de00b1ec44bc7.jpg',
    'https://i.pinimg.com/736x/20/82/1b/20821b60c456b97a579d7f56cf2e816d.jpg',
    'https://i.pinimg.com/564x/f4/4a/60/f44a60b81636aaa27491a731d02e1cc4.jpg',
    'https://i.pinimg.com/564x/c1/b6/bb/c1b6bbf1cfe5b891fe45693ee590e703.jpg',
    'https://i.pinimg.com/564x/5a/bc/d3/5abcd3c7927f8ef9696d4ba57bfe74f3.jpg',
    'https://i.pinimg.com/564x/4b/80/12/4b8012a5c62503bea40267f2d875080c.jpg',
    'https://i.pinimg.com/564x/cd/0a/61/cd0a6109c26f940eee301f866c4e5cbf.jpg',
  ];

  const [startIndex, setStartIndex] = useState(0);
  const totalImages = images.length;
  const imagesToShow = 5;

  const handlePrev = () => {
    setStartIndex((startIndex - 1 + totalImages) % totalImages);
  };

  const handleNext = () => {
    setStartIndex((startIndex + 1) % totalImages);
  };

  const getVisibleImages = () => {
    let visibleImages = [];
    for (let i = 0; i < imagesToShow; i++) {
      visibleImages.push(images[(startIndex + i) % totalImages]);
    }
    return visibleImages;
  };

  return (
    <div className="relative w-full" data-carousel="static">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div className="flex gap-x-3">
          {getVisibleImages().map((image, index) => (
            <img
              key={index}
              src={image}
              className="w-1/5"
              alt={`Slide ${index}`}
            />
          ))}
        </div>
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
