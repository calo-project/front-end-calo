import React from "react";
import { useParams } from 'react-router-dom';
import Slider from "../../../../../../components/slider"
import Event from '../../../../../../hooks/useFetchDetail';
// import Event from '../../../../../../components/Event/useFetchEvent';
function formatCurrency(value) {
    return `Rp. ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")},-`;
}
function formatDateTime(dateTime) {
    const [date, time] = dateTime.split(' ');
    return { date, time };
}
function InternalPage() {
    const { slug } = useParams();
    // const { event } = Event("konser-band");
    const { event, loading } = Event({ slug: 'glorius' });

    if (loading) {
        return <div>Loading...</div>;
    }
    const { date, time } = formatDateTime(event.waktu_mulai);

  return (
    <>
      <div className="flex justify-center">
        <div className="flex w-5/6">
        <div className="flex flex-col w-1/2 p-2 items-center gap-y-4">
            <img className="w-96 h-96 rounded-xl" src="https://i.pinimg.com/564x/31/81/68/318168c0f8d650267176330bf2f3c3e7.jpg" alt="" />
            <div className="w-[28rem]  bg-[#ffffff50] rounded-xl p-5">
                <h1 className="text-white text-sm">Harga</h1>
                <h1 className="text-black font-bold text-lg">{formatCurrency(event.harga)}</h1>
                <button className="btn w-full btn-primary mt-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
                    <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4z"/>
                </svg>
                Beli Tiket
                </button>
            </div>
        </div>

        <div className="flex flex-col w-1/2 p-2 gap-y-4">
            <h1 className="text-5xl">{event.nama_event}</h1> {/* asdasddsadass */}
            <div className="flex flex-col p-3 gap-y-1 w-full h-full bg-[#ffffff50] rounded-xl">
            <h1 className="text-xl">Deskripsi</h1>
            <h1 className="text-sm text-justify">
                {event.deskripsi_event}
                {/* {eventData['deskripsi_event']} */}
            </h1>

            <h1 className="text-xl">Date and time</h1>
            <h1 className="text-sm text-justify">
                {event.waktu_mulai}
            </h1>

            <h1 className="text-xl">Location</h1>
            <h1 className="text-sm text-justify">
                {event.tempat}
            </h1>

            <h1 className="text-xl">Highlight</h1>
            
            <ul className="list-disc ml-5">
                <li>Saksikan langsung penampilan memukau group asal Korea Selatan, 2024 aespa Live Tour - SYNK: PARALLEL LINE in JAKARTA</li>
                <li>Konser akan berlangsung pada tanggal {date} di {event.detail_alamat} mulai pukul {time} WIB.</li>
                <li>Harga tiket sudah termasuk pajak 10% dan biaya pemrosesan tiket tetapi belum termasuk biaya platform.</li>
                <li>Kategori berdiri akan memiliki nomor antrean, dan kategori duduk akan memiliki nomor kursi.</li>
            </ul>

            </div>
        </div>

        </div>
        </div>
        <div className="flex justify-center mt-11">
            <div className="flex flex-col sm:w-5/6 gap-y-4">
                <h1 className="text-[#DCFE52] text-3xl px-4">Yang Akan Datang</h1>
                <Slider />
            </div>
        </div>



    </>
  );
}

export default InternalPage;





