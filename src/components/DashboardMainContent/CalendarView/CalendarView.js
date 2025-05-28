import { calendarAppointments } from '../../../data/appointments';
import CardWrapper from '../../CardWrapper';

function CalendarView() {
  // Your content
  <CardWrapper title="Upcoming Calendar">
  {calendarAppointments.map((item, i) => (
    <div key={i} className="calendar-item">
      <p><strong>{item.time}</strong> {item.type}</p>
      <p>{item.doctor}</p>
    </div>
  ))}
</CardWrapper>
}
export default CalendarView;


