import { useEffect, useState } from 'react'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function App() {

  const [data, setData] = useState(false);

  const [date, setDate] = useState(new Date());

  const [showCalendar, setShowCalendar] = useState(false);

  const [showModal, setShowModal] = useState(false);

  function handleToggleModal() {
    setShowModal(!showModal);
  }

  function handleToggleCalendar() {
    setShowCalendar(!showCalendar);
  }

  const handleDateChange = (date) => {

    // Check if the selected date is valid
    if (date <= new Date()) {
      setDate(date);
    } else {
      setDate(new Date());
    }
  }

  async function updateAPOD(newDate) {

    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;

    // yyyy-mm-dd format
    const year = newDate.getFullYear();
    const month = newDate.getMonth() + 1; 
    const day = newDate.getDate();
    const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

    const url = "https://api.nasa.gov/planetary/apod?api_key=" + NASA_KEY + "&date=" + formattedDate;

    console.log("Updating APOD to:", formattedDate);

    const localKey = `NASA-${newDate}`;

    // Check if api data for today has been stored locally
    if (localStorage.getItem(localKey)) {
      const apiData = JSON.parse(localStorage.getItem(localKey));
      setData(apiData);
      return
    }

    // If no data from today has been stored, clear cache
    localStorage.clear();

    // Send API request and store data in local storage
    try {
      const response = await fetch(url);
      const apiData = await response.json();

      localStorage.setItem(localKey, JSON.stringify(apiData));
      setData(apiData);
    } catch (error) {
      console.log(error);
    }
  }

  // Whenever date is changed (user changes calendar)
  useEffect(() => {
    
    updateAPOD(date)

  }, [date])

  // inputs: function, dependency array
  //   code is executed when array requirements are True
  //   blank array = run code when page loads
  //   var in array = run code when var changes
  useEffect(() => {

    updateAPOD(new Date());

  }, [])

  return (
    <>
      {showCalendar && (<DatePicker
          id="datePicker"
          selected={date}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
        />
      )}

      {data ? (<Main data={data} />) : (
        <div className="loading">
          <i className="fa-solid fa-spinner"></i>
        </div>
      )}

      {showModal && (<Sidebar 
          data={data} 
          showModal={showModal}
          handleToggleModal={handleToggleModal}/>
      )}

      {data && (
        <Footer data={data} handleToggleModal={handleToggleModal} handleToggleCalendar={handleToggleCalendar} showCalendar={showCalendar}/>
      )}

    </>
  )
}

export default App
