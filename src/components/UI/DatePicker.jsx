import * as React from 'react'
import Box from '@mui/material/Box'
import {
   DateCalendar,
   DatePicker,
   PickersDay,
   TimePicker,
} from '@mui/x-date-pickers'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import styled from '@emotion/styled'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'

function RangeDay(props) {
   const { day, outsideCurrentMonth, selectedStart, selectedEnd, ...other } =
      props

   const isBetweesn =
      selectedStart &&
      selectedEnd &&
      day.isAfter(selectedStart, 'day') &&
      day.isBefore(selectedEnd, 'day')

   const isFirst = selectedStart && day.isSame(selectedStart, 'day')
   const isLast = selectedEnd && day.isSame(selectedEnd, 'day')

   return (
      <StyledPickersDay
         {...other}
         day={day}
         outsideCurrentMonth={outsideCurrentMonth}
         selected={isFirst || isLast || isBetweesn}
      />
   )
}

export default function CustomDateRangeCalendar(props) {
   const { onChange } = props; 
   const [start, setStart] = React.useState(dayjs())
   const [end, setEnd] = React.useState(null)
   const [time, setTime] = React.useState(dayjs())

   const [value, setValue] = React.useState(dayjs('2022-04-17T15:30'))



   const emit = (s, e, t = time) => {
      onChange?.({
         start: s,
         end: e,
         time: t,
      })
   }
 
   const handleSelect = (newDate) => {
      if (!start || (start && end)) {
         setStart(newDate)
         setEnd(null)
         emit(newDate, null)
      } else if (newDate.isBefore(start, 'day')) {
         setEnd(start)
         setStart(newDate)
         emit(newDate, start)
      } else {
         setEnd(newDate)
         emit(start, newDate)
      }
   }

   

   return (
      <Box>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
         <StyledBox>
            <DateCalendar
               value={start}
               onChange={handleSelect}
               slots={{
                  day: (dayProps) => (
                     <RangeDay
                        {...dayProps}
                        selectedStart={start}
                        selectedEnd={end}
                     />
                  ),
               }}
            />

            <StyledDatePicker
               label="Start date"
               value={start}
               onChange={(newValue) => {
                  setStart(newValue)
                  emit(newValue, end)
               }}
            />

            <StyledBoxTime>
               <StyledDatePicker
                  label="Due date"
                  value={end}
                  minDate={start}
                  onChange={(newValue) => {
                     setEnd(newValue)
                     emit(start, newValue)
                  }}
               />

               <StyledTimePicker
                  value={time}
                  onChange={(newValue) => {
                     setTime(newValue)
                     emit(start, end, newValue)
                  }}
               />
            </StyledBoxTime>
         </StyledBox>
      </LocalizationProvider>
         
      </Box>
   )
}

const StyledPickersDay = styled(PickersDay)(
   ({ isBetween, isFirst, isLast }) => ({
      ...(isBetween && {
         backgroundColor: 'rgba(10, 114, 219, 0.3)',
         borderRadius: '50%',
      }),
      ...(isFirst && {
         borderTopLeftRadius: '50%',
         borderBottomLeftRadius: '50%',
      }),
      ...(isLast && {
         borderTopRightRadius: '10%',
         borderBottomRightRadius: '50%',
      }),
   })
)

const StyledDatePicker = styled(DatePicker)(({}) => ({
   maxWidth: '150px',
   padding: '10px',
   borderRadius: '50%',
}))

const StyledTimePicker = styled(TimePicker)(({}) => ({
   maxWidth: '150px',
}))

const StyledBox = styled(Box)(({}) => ({
   display: 'flex',
   flexDirection: 'column',
   gap: '2px',
}))

const StyledBoxTime = styled(Box)(({}) => ({
   display: 'flex',
   gap: '2px',
}))
