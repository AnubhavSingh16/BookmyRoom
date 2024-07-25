import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import { useSelector } from 'react-redux';
import { Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import Map from '../components/Map';
import {
  FaBath,
  FaBed,
  FaChair,
  FaMapMarkerAlt,
  FaParking,
  FaShare,
} from 'react-icons/fa';
import Contact from '../components/Contact';

SwiperCore.use([Navigation]);

export default function Listing() {
  const [listing, setListing] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [contact, setContact] = useState(false);
  const params = useParams();
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchListing = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/listing/get/${params.listingId}`);
        const data = await res.json();
        if (data.success === false) {
          setError(true);
        } else {
          setListing(data);
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(true);
        setLoading(false);
      }
    };
    fetchListing();
  }, [params.listingId]);

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      {loading && <p className="text-center my-7 text-2xl">Loading...</p>}
      {error && (
        <p className="text-center my-7 text-2xl">Something went wrong!</p>
      )}
      {listing && !loading && !error && (
        <div className="space-y-10">
          <div className="relative">
            <Swiper navigation>
              {listing.imageUrls.map((url) => (
                <SwiperSlide key={url}>
                  <div
                    className="h-[500px] w-full"
                    style={{
                      background: `url(${url}) center no-repeat `,
                      backgroundSize: 'cover',
               
                      objectFit: 'cover'
                    }}
                  ></div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="absolute top-4 right-4 z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-white shadow-md cursor-pointer">
              <FaShare
                className="text-gray-500"
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  setCopied(true);
                  setTimeout(() => {
                    setCopied(false);
                  }, 2000);
                }}
              />
            </div>
            {copied && (
              <p className="absolute top-16 right-4 z-10 rounded-md bg-white p-2 shadow-md">
                Link copied!
              </p>
            )}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="flex flex-col bg-white rounded-lg shadow-lg p-2 space-y-6">
              <p className="text-3xl font-light-bold text-gray-800 pl-6">
                {listing.name} - ₹{' '}
                {listing.offer
                  ? listing.discountPrice.toLocaleString('en-IN')
                  : listing.regularPrice.toLocaleString('en-IN')}
                {listing.type === 'rent' && ' / month'}
              </p>
              <p className="flex items-center gap-2 text-black font-light-bold  pl-6">
                <FaMapMarkerAlt className="text-green-700" />
                {listing.address}
              </p>
              <div className="flex gap-4 pl-6">
                <p className="bg-black w-full max-w-[200px] text-center text-white bg-gradient-to-r from-slate-900 to-slate-600 p-2 rounded-full  shadow-lg">
                  {listing.type === 'rent' ? 'For Rent' : 'For Sale'}
                </p>
                {listing.offer && (
                  <p className="bg-black w-full max-w-[200px] text-center text-white bg-gradient-to-r from-slate-900 to-slate-600 p-2 rounded-full  shadow-lg">
                    ₹
                    {(
                      +listing.regularPrice - +listing.discountPrice
                    ).toLocaleString('en-IN')}{' '}
                    OFF
                  </p>
                )}
              </div>
              <p className="text-black font-light-bold pl-6">
                <span className="font-semibold text-green-800 font-light-bold">Description - </span>
                {listing.description}
              </p>
              <ul className="text-green-900 font-semibold text-sm flex flex-wrap items-center gap-4 sm:gap-6 pl-6">
                <li className="flex items-center gap-2 whitespace-nowrap">
                  <FaBed className="text-lg" />
                  {listing.bedrooms > 1
                    ? `${listing.bedrooms} Beds`
                    : `${listing.bedrooms} Bed`}
                </li>
                <li className="flex items-center gap-2 whitespace-nowrap">
                  <FaBath className="text-lg" />
                  {listing.bathrooms > 1
                    ? `${listing.bathrooms} Baths`
                    : `${listing.bathrooms} Bath`}
                </li>
                <li className="flex items-center gap-2 whitespace-nowrap">
                  <FaParking className="text-lg" />
                  {listing.parking ? 'Parking Spot' : 'No Parking'}
                </li>
                <li className="flex items-center gap-2 whitespace-nowrap">
                  <FaChair className="text-lg" />
                  {listing.furnished ? 'Furnished' : 'Unfurnished'}
                </li>
              </ul>
              {currentUser &&
                listing.userRef !== currentUser._id &&
                !contact && (
                  <button
                    onClick={() => setContact(true)}
                    className="text-white text-center bg-gradient-to-r from-slate-900 to-slate-600 p-2 rounded-full  shadow-lg  hover:opacity-80 py-3 mt-3"
                  >
                    Contact Landlord
                  </button>
                )}
              {contact && <Contact listing={listing} />}
            </div>
            <div className="flex justify-center items-start">
              
              <div className="w-full h-full pt-5">
                <Map lat={listing.lat} long={listing.long} />
              </div>
            </div>
          </div>
        </div>
        
      )}
    </main>
  );
}
