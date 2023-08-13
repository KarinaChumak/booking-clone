import { useState, useEffect, useRef } from 'react';
import styles from './AvailabilityTable.module.css';
import featureMap from '../../utils/hotelFeaturesMap';
import { ReserveButton } from '../../pages/HotelPage/HotelPage';

const availableRooms = [
  {
    roomType: 'One-Bedroom Apartment with Balcony (2 adults)',
    maxNumPeople: 2,
    amountRoomsLeft: 3,
    pricePerNight: 100,
    beds: [
      { type: 'large double', num: 1 },
      { type: 'sofa bed', num: 1 },
    ],
    paymentOptions: [
      'Free cancellation',
      'Pay at the counter',
      'Breakfast included',
    ],
    roomFeatures: [
      'Entire apartment',
      'Private kitchen',
      'Free Wi-Fi',
      'Balcony',
      'Dishwasher',
      'Flat-screen TV',
    ],
  },
  {
    roomType: 'Superior Apartment with Balcony (4 adults)',
    maxNumPeople: 4,
    pricePerNight: 250,
    amountRoomsLeft: 3,

    beds: [
      { type: 'large double', num: 2 },
      { type: 'sofa bed', num: 1 },
    ],
    paymentOptions: [
      'Free cancellation',
      'Pay at the counter',
      'Breakfast included',
    ],
    roomFeatures: [
      'Entire apartment',
      'Private kitchen',
      'Free Wi-Fi',
      'Balcony',
      'Soundproofing',
      'Flat-screen TV',
      'Microwave',
    ],
  },
  {
    roomType: 'One-Bedroom Apartment with Balcony (2 adults)',
    maxNumPeople: 2,
    amountRoomsLeft: 3,
    pricePerNight: 100,
    beds: [
      { type: 'large double', num: 1 },
      { type: 'sofa bed', num: 1 },
    ],
    paymentOptions: [
      'Free cancellation',
      'Pay at the counter',
      'Breakfast included',
    ],
    roomFeatures: [
      'Entire apartment',
      'Private kitchen',
      'Free Wi-Fi',
      'Balcony',
      'Dishwasher',
      'Flat-screen TV',
    ],
  },
  {
    roomType: 'One-Bedroom Apartment with Balcony (2 adults)',
    maxNumPeople: 2,
    amountRoomsLeft: 3,
    pricePerNight: 100,
    beds: [
      { type: 'large double', num: 1 },
      { type: 'sofa bed', num: 1 },
    ],
    paymentOptions: [
      'Free cancellation',
      'Pay at the counter',
      'Breakfast included',
    ],
    roomFeatures: [
      'Entire apartment',
      'Private kitchen',
      'Free Wi-Fi',
      'Balcony',
      'Dishwasher',
      'Flat-screen TV',
    ],
  },
  {
    roomType: 'One-Bedroom Apartment with Balcony (2 adults)',
    maxNumPeople: 2,
    amountRoomsLeft: 3,
    pricePerNight: 100,
    beds: [
      { type: 'large double', num: 1 },
      { type: 'sofa bed', num: 1 },
    ],
    paymentOptions: [
      'Free cancellation',
      'Pay at the counter',
      'Breakfast included',
    ],
    roomFeatures: [
      'Entire apartment',
      'Private kitchen',
      'Free Wi-Fi',
      'Balcony',
      'Dishwasher',
      'Flat-screen TV',
    ],
  },
  {
    roomType: 'One-Bedroom Apartment with Balcony (2 adults)',
    maxNumPeople: 2,
    amountRoomsLeft: 3,
    pricePerNight: 100,
    beds: [
      { type: 'large double', num: 1 },
      { type: 'sofa bed', num: 1 },
    ],
    paymentOptions: [
      'Free cancellation',
      'Pay at the counter',
      'Breakfast included',
    ],
    roomFeatures: [
      'Entire apartment',
      'Private kitchen',
      'Free Wi-Fi',
      'Balcony',
      'Dishwasher',
      'Flat-screen TV',
    ],
  },
  {
    roomType: 'One-Bedroom Apartment with Balcony (2 adults)',
    maxNumPeople: 2,
    amountRoomsLeft: 3,
    pricePerNight: 100,
    beds: [
      { type: 'large double', num: 1 },
      { type: 'sofa bed', num: 1 },
    ],
    paymentOptions: [
      'Free cancellation',
      'Pay at the counter',
      'Breakfast included',
    ],
    roomFeatures: [
      'Entire apartment',
      'Private kitchen',
      'Free Wi-Fi',
      'Balcony',
      'Dishwasher',
      'Flat-screen TV',
    ],
  },
];

function AvailabilityTable() {
  return (
    <div className={styles.availabilityContainer}>
      <h1>Availability</h1>

      <table className={styles.availabilityTable}>
        <tr>
          <th>Apartment type</th>
          <th>Sleeps</th>
          <th className={styles.priceHeader}>Price for 4 nights</th>
          <th>Your choices</th>
          <th>Select an apartment</th>

          <th></th>
        </tr>

        {availableRooms.map((item, i) => (
          <tr key={i}>
            <RoomRow room={item}></RoomRow>
            {i === 0 && (
              <td rowSpan={availableRooms.length}>
                <ReserveColumn></ReserveColumn>
              </td>
            )}
          </tr>
        ))}
      </table>
    </div>
  );
}

function ReserveColumn() {
  return (
    <div className={styles.reserveColumn}>
      <ReserveButton>
        <p>I&apos;ll reserve</p>
      </ReserveButton>
      <ul>
        <li>Confirmation is immediate</li>
        <li>No booking or credit card fees!</li>
      </ul>
    </div>
  );
}

function RoomRow({ room }) {
  return (
    <>
      <td>
        <RoomDescription room={room}></RoomDescription>
      </td>
      <td>
        <div className={styles.numPeople}>
          {Array.from(Array(room.maxNumPeople).keys()).map((i) => (
            <span key={i}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
              >
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
              </svg>
            </span>
          ))}
        </div>
      </td>
      <td className={styles.price}>
        <h2>
          <b>{`€ ${room.pricePerNight}`}</b>
        </h2>
        <p>Includex taxes and charges</p>
      </td>
      <td className={styles.paymentOptions}>
        {room.paymentOptions.map((option, i) => (
          <div key={i} className={styles.paymentOption}>
            <span>
              <svg
                viewBox="0 0 128 128"
                role="presentation"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M56.33 102a6 6 0 0 1-4.24-1.75L19.27 67.54A6.014 6.014 0 1 1 27.74 59l27.94 27.88 44-58.49a6 6 0 1 1 9.58 7.22l-48.17 64a5.998 5.998 0 0 1-4.34 2.39z"></path>
              </svg>
            </span>
            <p>{option}</p>
          </div>
        ))}
      </td>
      <td>
        <select name="numRooms" id="numRooms">
          {Array.from(Array(room.amountRoomsLeft).keys()).map((i) => (
            <option key={i} value="0">
              <>
                {i}&nbsp; &nbsp; &nbsp;&nbsp;
                {`(€ ${i * room.pricePerNight})`}
              </>
            </option>
          ))}
        </select>
      </td>
    </>
  );
}
function RoomDescription({ room }) {
  return (
    <div className={styles.roomDescription}>
      <h3>{room.roomType} </h3>

      <div className={styles.bedInfo}>
        {room.beds.map((bed, i) => (
          <p key={i}>
            {bed.num} {bed.type}
          </p>
        ))}
      </div>
      <div className={styles.roomFeatures}>
        {room.roomFeatures.map((feature, i) => (
          <div key={i} className={styles.singleRoomFeature}>
            <span>{featureMap[feature] || ''}</span>
            <p>{feature}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AvailabilityTable;
