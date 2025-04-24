import React, { useEffect, useState } from 'react'
import DoctorCard from '../../Components/Doctors/DoctorCard'
import { doctors } from "../../assets/data/doctors"
import Testimonials from '../../Components/Testimonials/Testimonials'
import { BASE_URL } from '../../../config';
import useFetchData from '../../hooks/useFetchData'
import Loader from "../../Loader/Loading"
import Error from "../../Error/Error"


const Doctors = () => {
  const [query, setQuery] = useState('');
  const [debounceQuery, setDebounceQuery] = useState('');
  const [searchTriggered, setSearchTriggered] = useState(false);
  const [noResults, setNoResults] = useState(false);
  const [fetchUrl, setFetchUrl] = useState('');

  const { data: doctors, loading, error } = useFetchData(fetchUrl);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTriggered(true);
    setQuery(query.trim());
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceQuery(query);
    }, 700);
    return () => clearTimeout(timeout);
  }, [query]);

  useEffect(() => {
    if (searchTriggered && debounceQuery) {
      setFetchUrl(`${BASE_URL}/doctors?query=${debounceQuery}`);
    }
  }, [debounceQuery, searchTriggered]);

  useEffect(() => {
    if (doctors.length === 0 && !loading && !error && searchTriggered) {
      setNoResults(true);
    } else {
      setNoResults(false);
    }
  }, [doctors, loading, error, searchTriggered]);

  return (
    <>
      {/* ===search bar=== */}
      <section className='bg-[#fff9ea]'>
        <div className="container text-center">
          <h2 className='heading'>
            Find A Doctor
          </h2>
          <div className='max-w-[570px] mt-[30px] mx-auto bg-[#0066ff2c] rounded-md flex items-center justify-between'>
            <input
              type="search"
              className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor'
              placeholder='Search Doctors by name or specialization' 
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <button className='btn mt-0 rounded-[0px] rounded-r-md' onClick={handleSearch}>
              Search
            </button>
          </div>
        </div>
      </section>
      {/* ====search bar end==== */}
      <section>
        <div className="container">
          {noResults && <div>No doctors found with the provided search criteria.</div>}
          {error && <div>Error loading doctors: {error}</div>}
          {!loading && !error && !noResults && (
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
              {doctors.filter(doctor => doctor.name.toLowerCase().includes(debounceQuery.toLowerCase())).map((doctor) => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          )}
        </div>
      </section>
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className='heading text-center'>What Our Patient Say</h2>
            <p className='text_para'>
              World Class Care For Everyone. Our Health System Offers Unmatched, expert Health care
            </p>
          </div>
          <Testimonials />
        </div>
      </section>
    </>
  );
};

export default Doctors
