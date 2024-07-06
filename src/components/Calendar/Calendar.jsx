import { addDays } from 'date-fns';
import DatePicker, { registerLocale } from 'react-datepicker';
import CustomInput from '../CustomInput/CustomInput';
import { enUS } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
import './custom-react-datepicker.scss';

const customLocaleDays = {
  ...enUS,
  localize: {
    ...enUS.localize,
    day: d => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d],
  },
  options: {
    ...enUS.localize,
    weekStartsOn: 1,
  },
};

registerLocale('customDays', customLocaleDays);

function Calendar({ selected, onChange }) {
  return (
    <DatePicker
      selected={selected}
      onChange={date => onChange(date)}
      dateFormat="MMMM dd Y, E"
      locale={'customDays'}
      minDate={addDays(new Date(), 0)}
      customInput={<CustomInput />}
      popperContainer={({ children }) => children}
    />
  );
}

export default Calendar;
