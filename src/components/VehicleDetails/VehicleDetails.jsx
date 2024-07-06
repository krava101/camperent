import { useSelector } from 'react-redux';
import { selectCurrentAdvert } from '../../redux/currentAdvert/selectors';
import { useState } from 'react';
import scss from './VehicleDetails.module.scss';

const insertSpace = value =>
  `${value.slice(0, value.length - 1)} ${value.split('').pop()}`;

function VehicleDetails() {
  const advert = useSelector(selectCurrentAdvert);
  const [vehicle] = useState(advert);
  return (
    <div className={scss.details}>
      <h3>Vehicle details</h3>
      <hr />
      <ul>
        <li>
          <p>Form</p>
          <span>{vehicle.form}</span>
        </li>
        <li>
          <p>Length</p>
          <span>{insertSpace(vehicle.length)}</span>
        </li>
        <li>
          <p>Width</p>
          <span>{insertSpace(vehicle.width)}</span>
        </li>
        <li>
          <p>Height</p>
          <span>{insertSpace(vehicle.height)}</span>
        </li>
        <li>
          <p>Tank</p>
          <span>{insertSpace(vehicle.tank)}</span>
        </li>
        <li>
          <p>Consumption</p>
          <span>{vehicle.consumption}</span>
        </li>
      </ul>
    </div>
  );
}

export default VehicleDetails;
