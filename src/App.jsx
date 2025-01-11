import { useEffect, useState } from 'react'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {

  const [data, setData] = useState(false);

  const [date, setDate] = useState(new Date());

  const [showCalendar, setShowCalendar] = useState(true);

  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  function handleToggleCalendar() {
    setShowCalendar(!showCalendar);
    console.log(showCalendar);
  }

  const handleDateChange = (date) => {
    setDate(date);
    console.log("DATE:", date);
  }

  useEffect(() => {
    async function fetchAPOD() {

      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY

      const url = "https://api.nasa.gov/planetary/apod?api_key=" + NASA_KEY;

      const today = (new Date()).toDateString();
      const localKey = `NASA-${today}`;


      console.log("fart nutszzz");
      // Check if api data for today has been stored locally
 /*     if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        return
      }*/

      // If no data from today has been stored, clear cache
    //  localStorage.clear();

/*      try {
        const response = await fetch(url);
        const apiData = await response.json();

        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        //console.log(apiData);
      } catch (error) {
        console.log(error);
      }*/

    }

    fetchAPOD();

  }, [date])

  // inputs: function, dependency array
  //   code is executed when array requirements are True
  //   blank array = run code when page loads
  //   var in array = run code when var changes
  useEffect(() => {
    async function fetchAPOD() {

      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY

      const url = "https://api.nasa.gov/planetary/apod?api_key=" + NASA_KEY;

      const today = (new Date()).toDateString();
      const localKey = `NASA-${today}`;

      // Check if api data for today has been stored locally
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setData(apiData);
        return
      }

      // If no data from today has been stored, clear cache
      localStorage.clear();

      // Send api request and store data in local storage
      try {
        const response = await fetch(url);
        const apiData = await response.json();

        localStorage.setItem(localKey, JSON.stringify(apiData));
        setData(apiData);
        //console.log(apiData);
      } catch (error) {
        console.log(error);
      }

    }

    fetchAPOD();

  }, [])

  // Conditional rendering
  return (
    <>

      {showCalendar && (<DatePicker
        id="datePicker"
        popperPlacement=""
        selected={date}
        onChange={handleDateChange}
        dateFormat="yyyy-MM-dd"/>
      )}

      {data ? (<Main data={data} />) : (
        <div className="loading">
          <i className="fa-solid fa-spinner"></i>
        </div>
      )}

      {showModal && (
        <Sidebar data={data} handleToggleModal={handleToggleModal} /> 
      )}

      {data && (
        <Footer data={data} handleToggleModal={handleToggleModal} handleToggleCalendar={handleToggleCalendar} />
      )}

    </>
  )
}

export default App
