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
      <div className="relative h-76 overflow-hidden rounded-lg md:h-96">
        <div className="flex gap-x-2">
          <div className="flex flex-row relative left-[-75px] ss:left-[-55px] md:left-[10px] gap-x-2">
          {getVisibleImages().map((image, index) => (
            <>
            <div className="flex flex-col space-y-1 bg-[rgba(255,255,255,0.03)] backdrop-blur-xl p-2 rounded-xl">
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className="h-44 md:h-72 rounded-2xl"
              />
              <h1 className="mt-4 font-medium">Nama {image.slice(-11,-9)}</h1>
              <div className="flex flex-col gap-y-2 md:flex-row gap-x-2">
                <div className="flex flex-row rounded-lg text-sm bg-[#1d1c1c] text-white p-3 w-[145px] md:w-[185px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-stopwatch-fill pr-1 " viewBox="0 0 16 16"><path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584l.013-.012.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354-.012.012A6.97 6.97 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0"/></svg> 
                  {image.slice(-8,-6)} Nov 2024
                </div>
                {/* <p className="btn bg-[#2C2C2C] text-white cursor-not-allowed" disabled>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stopwatch-fill" viewBox="0 0 16 16"><path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584l.013-.012.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354-.012.012A6.97 6.97 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0"/></svg> 
                  {image.slice(-7)}
                </p> */}
                <button className="btn btn-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"/>
                  </svg>
                  Beli Tiket
                </button>
              </div>
            </div>
            </>
          ))}
        </div>
        </div>
      </div>
      <button
        type="button"
        className="bg-white bg-opacity-0 backdrop-blur-[2px] absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
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
        className="bg-white bg-opacity-0 backdrop-blur-[2px] absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
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
