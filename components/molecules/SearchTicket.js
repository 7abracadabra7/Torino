"use client";
import React, { useState } from "react";
import Select from "react-select";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import styles from "./SearchTicket.module.css";
import { Calendar, CalendarProvider } from "zaman";

const SearchTicket = ({ destinationCities, originCities }) => {
  const [selectedDate, setSelectedDate] = useState(new Date()); // تاریخ انتخاب شده
  const [originCity, setOriginCity] = useState(null);
  const [destinationCity, setDestinationCity] = useState(null);
  const [showCalendar, setShowCalendar] = useState(false); // وضعیت نمایش تقویم
  const [calendarValue, setCalendarValue] = useState(new Date());

  const handleOriginChange = (selectedOption) => {
    setOriginCity(selectedOption);
  };

  const handleDestinationChange = (selectedOption) => {
    setDestinationCity(selectedOption);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date); // به روز رسانی تاریخ انتخاب شده
    setShowCalendar(false); // مخفی کردن تقویم بعد از انتخاب تاریخ
  };

  const handleSearch = () => {
    console.log("Origin:", originCity);
    console.log("Destination:", destinationCity);
    console.log("Selected Date:", selectedDate.toLocaleDateString()); // نمایش تاریخ انتخاب شده
  };

  return (
    <div className={styles.container}>
      <Select
        styles={{
          control: (provided) => ({
            ...provided,
            border: "none",
            boxShadow: "none",
            width: "200px",
            height: "50px",
            margin: "10px",
          }),
          placeholder: (provided) => ({
            ...provided,
            color: "black",
          }),
        }}
        options={originCities}
        onChange={handleOriginChange}
        placeholder="مبدا"
        components={{ DropdownIndicator: () => null }}
      />

      <Select
        styles={{
          control: (provided) => ({
            ...provided,
            border: "none",
            boxShadow: "none",
            width: "200px",
            height: "50px",
            margin: "10px",
            color: "black",
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
      />

      <div
        className={styles.dateContainer}
        style={{ display: "flex", justifyContent: "center", margin: "10px" }}
      >
        <button
          className={styles.dateBtn}
          onClick={() => setShowCalendar(!showCalendar)}
        >
          تاریخ
        </button>
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
                defaultValue={calendarValue}
                onChange={(e) => setCalendarValue(new Date(e.value))}
              />
            </CalendarProvider>
          </div>
        )}
      </div>

      <button className={styles.button} onClick={handleSearch}>
        جستجو
      </button>

      {selectedDate && console.log(selectedDate.toLocaleDateString())}
    </div>
  );
};

export default SearchTicket;
