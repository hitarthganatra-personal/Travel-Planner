import React, { useEffect } from 'react';
import '../App.css'

function MainComponent() {
    useEffect(() => {
        if (window.google) {
          initAutocomplete(); 
        } else {
          const interval = setInterval(() => {
            if (window.google) {
              clearInterval(interval);
              initAutocomplete();
            }
          }, 500);
        }
      }, []); 

      const initAutocomplete = () => {
        const input = document.getElementById("autocomplete");
        const autocomplete = new google.maps.places.Autocomplete(input);
    
        console.log("Google Maps Autocomplete initialized");
    
        autocomplete.addListener("place_changed", () => {
          const place = autocomplete.getPlace();
          console.log("Selected Place:", place);
        });
      };
      
  return (
    <>
        <script
        async
        defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC6Rc_d9NDb8VJ4z-IcfIaUGHbzNzZRvW4&libraries=places"
        ></script>

        <div className="relative w-full h-218 z-10 shadow-slate-500 shadow-sm pr-150 pl-10 pt-60 flex flex-col">
            <h1 className='w-200 uppercase text-3xl text-yellow-500 backdrop-blur-lg p-5'><span className='text-6xl'>Your next adventure  </span><br /><span>just one search away!</span></h1>
            <div>
                <input id="autocomplete" className='bg-white text-black mt-10 ml-5 w-220 p-4 rounded-md' type="text" placeholder="Enter a place" />
            </div>
        </div>
    </>
  )
}

export default MainComponent    