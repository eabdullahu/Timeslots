import { Fragment, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Company as CompanyInterface } from '../types/Company'
import Timeslot from 'types/Timeslot';
import { selectTimeSlotAct, removeTimeSlotAct } from 'redux/app/actions';
import { RootReducer } from 'redux/reducers';

export default function Company(props: CompanyInterface) {
  const dispatch = useDispatch();
  const { companies, selectedTimeSlots } = useSelector((state: RootReducer) => state.ts);
  const selectTimeSlotDispatch = useCallback((key: number, value: number) => dispatch(selectTimeSlotAct(key, value)), [dispatch])
  const removeTimeSlotDispatch = useCallback((key: number) => dispatch(removeTimeSlotAct(key)), [dispatch])

  const toTime = (date: string) => {
    const time = new Date(date).toLocaleTimeString('en', { timeStyle: 'short', hour12: false, timeZone: 'UTC' });
    return time;
  }

  const toggleSelect = (key: number, value: number, isSelected: boolean) => {
    if(isSelected) removeTimeSlot()
    else selectTimeSlotDispatch(key, value);
  }

  const removeTimeSlot = () => {
    removeTimeSlotDispatch(props.index)
  }

  const isSelected = (index: number) => {
    return selectedTimeSlots[props.index] && selectedTimeSlots[props.index] === index
  }
  
  const isDisabled = (timeslot: Timeslot) => {
    for(let f in selectedTimeSlots) { 
      if(parseInt(f) === props.index) continue;
      if(timeslot.start_time === companies[f].time_slots[selectedTimeSlots[f]]['start_time']) {
        return true;
      }
    }
  }

  const getDayName = (timeslot: Timeslot) => {
    const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = new Date(timeslot.start_time).getDay();
    return DAYS[day];
  }

  var lastDay = '';
  return (
    <div className='item'>
      <div className='header'>
        <div className='info'>
          <h4 className='title'>{ props.name }</h4>
          <p className='sub-title'>{ props.type }</p>
        </div>
        { selectedTimeSlots[props.index] && (
          <span className='selected' onClick={ removeTimeSlot }>
            {`${toTime(props.time_slots[selectedTimeSlots[props.index]]['start_time'])} - ${toTime(props.time_slots[selectedTimeSlots[props.index]]['end_time'])}`}
          </span>
        )}
      </div>
      <div className='timeslots'>
        { props.time_slots.map((item: Timeslot, index: number) => {
          const dayName = getDayName(item);
          const sameDay = dayName === lastDay;
          lastDay = dayName;
          return (
            <Fragment key={index}>
              { !sameDay && <p className='dayName'>{ dayName }</p>}
              <button 
                className={`timeslot ${ isSelected(index) && 'selected'} ${ isDisabled(item) && 'disabled'}`}
                onClick={ () => toggleSelect(props.index, index, isSelected(index))
                }
              >{`${toTime(item.start_time)} - ${toTime(item.end_time)}`}</button>
            </Fragment>
          )
          
        })}
      </div>
    </div>
  )
}