import scss from './FiltersLocation.module.scss';
import icons from '../../assets/sprite.svg';

function FiltersLocation({ onChange }) {
  const handleChange = event => {
    onChange(event.target.value);
  };

  return (
    <label className={scss.location}>
      Location
      <input
        type="text"
        name="location"
        placeholder="Type location"
        onChange={handleChange}
      />
      <svg>
        <use href={`${icons}#icon-pin`}></use>
      </svg>
    </label>
  );
}

export default FiltersLocation;
