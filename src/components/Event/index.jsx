import React, { useState } from 'react';
import Event from './useFetchEvent';
import { Link } from 'react-router-dom';

function formatDate(dateString) {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const [year, month, day] = dateString.split('-');
  return `${parseInt(day)} ${months[parseInt(month) - 1]} ${year}`;
}

const Carousel = () => {
  const {event,loading} = Event()
  if (loading) {
    return <div className='flex justify-center overflow-hidden'>Loading...</div>;
  }

  return (
    <div className="flex justify-center overflow-hidden">
      {/* <Event/> */}
    <div className="w-[85%] lg:w-[75%]">
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
    {
          // this.state.event
            event.map(Eventlist =>
                <div className="flex flex-col space-y-1 bg-[rgba(255,255,255,0.03)] backdrop-blur-xl p-2 rounded-xl w-72">
                <img
                    key={Eventlist.id_event}
                    src={Eventlist.poster}
                    alt={`Slide ${Eventlist.id_event}`}
                    className="h-44 md:h-72 rounded-2xl"
                />
                <h1 className="mt-4 font-medium"> {Eventlist.nama_event} </h1>
                <div className="flex flex-col gap-y-2 md:flex-row gap-x-2">
                    <div className="flex flex-row rounded-lg text-sm bg-[#1d1c1c] text-white p-3 w-[145px] md:w-[185px]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-stopwatch-fill pr-1 " viewBox="0 0 16 16"><path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584l.013-.012.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354-.012.012A6.97 6.97 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0"/></svg> 
                      {formatDate(Eventlist.tanggal)}
                    </div>
                    {/* <p className="btn bg-[#2C2C2C] text-white cursor-not-allowed" disabled>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stopwatch-fill" viewBox="0 0 16 16"><path d="M6.5 0a.5.5 0 0 0 0 1H7v1.07A7.001 7.001 0 0 0 8 16a7 7 0 0 0 5.29-11.584l.013-.012.354-.354.353.354a.5.5 0 1 0 .707-.707l-1.414-1.415a.5.5 0 1 0-.707.707l.354.354-.354.354-.012.012A6.97 6.97 0 0 0 9 2.071V1h.5a.5.5 0 0 0 0-1zm2 5.6V9a.5.5 0 0 1-.5.5H4.5a.5.5 0 0 1 0-1h3V5.6a.5.5 0 1 1 1 0"/></svg> 
                    {image.slice(-7)}
                    </p> */}
              
                    <Link to={`/acara/${Eventlist['slug']}`}>
                    {/* <Link to={`/${event.id_event}`}> */}
                    <button className="btn btn-primary w-32">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"/>
                    </svg>
                    Beli Tiket
                    </button>
                    </Link>
                </div>
                </div>
            )
        }
    </div>
    </div>
    </div>
  );
};

export default Carousel;
