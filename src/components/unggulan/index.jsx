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
    'https://i.pinimg.com/564x/31/81/68/318168c0f8d650267176330bf2f3c3e7.jpg',
    'https://i.pinimg.com/564x/ae/51/82/ae518249a0497e64c78dc2766182849c.jpg',
    'https://i.pinimg.com/564x/2b/fc/0c/2bfc0ceae8de93a0469041ff20f3edd6.jpg',
    'https://i.pinimg.com/564x/58/dc/9b/58dc9ba28970e3fdc45de00b1ec44bc7.jpg',
    'https://i.pinimg.com/736x/20/82/1b/20821b60c456b97a579d7f56cf2e816d.jpg',
    'https://i.pinimg.com/564x/f4/4a/60/f44a60b81636aaa27491a731d02e1cc4.jpg',
  ];

  return (
    <div className="flex flex-wrap  items-center justify-center text-center gap-y-6">
        {images.map((image, index) => (
            <div className="w-1/2 md:w-1/3 lg:w-1/4 flex justify-center items-center gap-x-3">
                <h1>{index+1}</h1>
                <img src={image} key={index} className="w-14 h-14 rounded-full" alt={`Artis ${index}`} />
                <div className="flex flex-col">
                    <h1>Artis 1</h1>
                    <h1>Negara</h1>
                </div>
            </div>
        ))}
    </div>
  );
};

export default Carousel;
