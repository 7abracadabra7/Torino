"use client";
import React, { useState } from "react";
import Select from "react-select";
import styles from "./SearchTicket.module.css";
import { Calendar, CalendarProvider } from "zaman";
import Image from "next/image";
import { useSearchTour } from "../../services/queries";

const SearchTicket = ({ destinationCities, originCities }) => {
  const [originCity, setOriginCity] = useState(null);
  const [destinationCity, setDestinationCity] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarValue, setCalendarValue] = useState(new Date());

  const { data } = useSearchTour(
    originCity?.value,
    destinationCity?.value,
    calendarValue
  );

  // if (isLoading) {
  //   return <span>Loading...</span>
  // }

  // if (isError) {
  //   return <span>Error: {error.message}</span>
  // }

  console.log("data:", data);

  const handleOriginChange = (selectedOption) => {
    setOriginCity(selectedOption);
  };

  const handleDestinationChange = (selectedOption) => {
    setDestinationCity(selectedOption);
  };

  const handleSearch = () => {
    console.log("Origin:", originCity);
    console.log("Destination:", destinationCity);
    // console.log("Selected Date:", calendarValue.toISOString());
    const selectedDate = new Date(calendarValue);
    selectedDate.setHours(0, 0, 0, 0);

    const formattedDate = selectedDate.toISOString();
    setCalendarValue(formattedDate);
  };

  return (
    <div className={styles.container}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/icons/location.png"
          width={24}
          height={24}
          alt="profile image"
        />
        <Select
          styles={{
            control: (provided) => ({
              ...provided,
              border: "none",
              boxShadow: "none",
              width: "170px",
              height: "50px",
              cursor: "pointer",
            }),
            placeholder: (provided) => ({
              ...provided,
              color: "black",
            }),
          }}
          options={originCities}
          onChange={handleOriginChange}
          // onFocus={() => setShowCalendar(false)}
          placeholder="مبدا"
          components={{ DropdownIndicator: () => null }}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <Image
          src="/icons/global-search.png"
          width={24}
          height={24}
          alt="profile image"
        />
        <Select
          styles={{
            control: (provided) => ({
              ...provided,
              border: "none",
              boxShadow: "none",
              width: "170px",
              height: "50px",
              color: "black",
              cursor: "pointer",
            }),
            placeholder: (provided) => ({
              ...provided,
              color: "black",
            }),
          }}
          options={destinationCities}
          onChange={handleDestinationChange}
          placeholder="مقصد"
          components={{ DropdownIndicator: () => null }}
          // onFocus={() => setShowCalendar(false)}
        />
      </div>

      <div
        className={styles.dateContainer}
        style={{ display: "flex", justifyContent: "center" }}
        onClick={() => setShowCalendar(!showCalendar)}
      >
        <Image
          src="/icons/cal.png"
          width={24}
          height={24}
          alt="profile image"
          style={{ marginLeft: "10px", cursor: "pointer" }}
        />
        <button className={styles.dateBtn}>تاریخ</button>
        {showCalendar && (
          <div className={styles.calendar}>
            <CalendarProvider
              style={{
                width: "300px",
                height: "220px",
              }}
              locale="fa"
              direction="rtl"
            >
              <Calendar
                style={{
                  width: "300px",
                  height: "220px",
                }}
                defaultValue={calendarValue}
                onChange={(e) => setCalendarValue(new Date(e.value))}
                onClick={(event) => event.stopPropagation()}
              />
            </CalendarProvider>
          </div>
        )}
      </div>

      <button className={styles.button} onClick={handleSearch}>
        جستجو
      </button>
    </div>
  );
};

export default SearchTicket;
