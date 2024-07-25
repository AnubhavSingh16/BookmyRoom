import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';
import Testimonials from './Testimonials';



SwiperCore.use([Navigation]);

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/api/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/api/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOfferListings();
  }, []);

  return (
    <div>
      {/* Top Section */}
      <div className="relative w-full h-screen">
        <div className="absolute inset-0 bg-image"></div>{" "}
        {/* Background image with blur */}
        <div className="relative z-10 flex flex-col gap-6 p-10 px-3 w-full h-screen text-center">
          <h1 className="text-white font-bold font-mono text-3xl lg:text-6xl">
            Find your next <span className="text-yellow-500">perfect</span>
            <br />
            <span className="text-yellow-500">place</span> with ease
          </h1>

          <Link
            to={"/search"}
            className="text-2xl text-yellow-400 font-bold font-mono hover:underline"
          >
            Let's get started...
          </Link>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between p-10 bg-white">
        {/* Left Section */}
        <div className="flex flex-col items-start lg:w-1/2">
          <div className="flex flex-row space-x-2">
            <div className="bg-gray-800 text-white font-semibold px-4 py-2 rounded-full mb-4">
              Know Before You Go
            </div>
            <div className="bg-gray-800 text-white font-semibold px-4 py-2 rounded-full mb-4">
              Trusted By All
            </div>
            <div className="bg-gray-800 text-white font-semibold px-4 py-2 rounded-full mb-4">
              Best services
            </div>
          </div>
          <h1 className="text-2xl lg:text-5xl font-bold text-gray-900 mb-4 font-mono">
            Bookmy-Room is the door for creating{" "}
            <span className="text-yellow-500">memories</span>
          </h1>
          <p className="text-gray-600 mb-4">
            BookmyRoom is the best place to find your next perfect place to
            live.
            <br />
            We have a wide range of properties for you to choose from.
          </p>

          <Link
            to={"/search"}
            className="text-lg text-brown font-bold hover:underline flex items-center gap-2 pl-3 bg-orange-200 w-full font-mono"
          >
            Explore
            <img width="60" height="50" src="./explore.jpg" alt="Explore" />
            some places
          </Link>
        </div>

        {/* Right Section */}
        <div className="pl-4 flex flex-row gap-4 lg:w-1/2 mt-8 lg:mt-0">
          <div className="bg-gray-200 rounded-xl overflow-hidden">
            <img
              src="./travel1.jpg"
              alt="Travel Image 1"
              className="object-cover h-80 w-48 rounded-xl"
            />
          </div>

          <div className="bg-gray-200 rounded-xl overflow-hidden">
            <img
              src="./travel2.jpg"
              alt="Travel Image 2"
              className="object-cover h-80 w-48 rounded-xl"
            />
          </div>
          <div className="bg-gray-200 rounded-xl overflow-hidden">
            <img
              src="travel3.jpg"
              alt="Travel Image 3"
              className="object-cover h-80 w-48 rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* listing results for offer, sale and rent */}
     <section className=''>
      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 my-4 ">
        {offerListings && offerListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-4xl font-semibold text-slate-800 font-mono bg-yellow-600">
                Recent offers
              </h2>
              <Link
                className="text-1xl font-mono text-white hover:underline bg-gray-600 pl-3 pr-3 rounded-md "
                to={"/search?offer=true"}
              >
                Show more offers
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-4xl font-semibold text-slate-700 font-mono">
                Recent places for rent
              </h2>
              <Link
                className="text-1xl font-mono text-white hover:underline bg-gray-600 pl-3 pr-3 rounded-md"
                to={"/search?type=rent"}
              >
                Show more places for rent
              </Link>
            </div>
            <div className="flex-wrap flex gap-4">
              {rentListings.map((listing) => (
                
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-4xl font-semibold text-slate-700 font-mono">
                Recent places for sale
              </h2>
              <Link
                className="text-1xl font-mono text-white hover:underline bg-gray-600 pl-3 pr-3 rounded-md"
                to={"/search?type=sale"}
              >
                Show more places for sale
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {saleListings.map((listing) => (
                <ListingItem listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
      </section>
      
      <section className=''>
          <Testimonials />
      
      </section>
      
      

    </div>
   
  );
}
