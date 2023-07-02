import React from 'react'
import Message from '../message'
import TimeStamp from '../message/timestamp'
import { format, isSameDay, addDays } from 'date-fns';
import './messagefeed.css';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'

function MessageFeed({messages, setThread}) {
  const start = new Date(messages[0].date);
  const end = new Date(messages[messages.length - 1].date)
  const dates = [];

  const { pathname } = useLocation()
  const recipientId = pathname.split('/')[4]

  const partner = useSelector(state => state.messages.partners[recipientId].partner)
  console.log(partner);
  for (let date = start; date <= end; date.setDate(date.getDate() + 1)) {
    dates.push(format(date, 'P'))
  }

  const areMessagesPresent = (messages, specificDate) => {
    return messages.some(message => {
      return isSameDay(new Date(message.date), new Date(specificDate))
    })
  }

  return (
    <section id='message_feed--wrapper'>
        <div className='message_feed--introduction'>
            <div className='message_feed--introduction--recipient'>
                <div className='message_feed--introduction--image'></div>
                <div className='message_feed--introduction--information'>
                    <p>{partner}</p>
                    <p>Status</p>
                </div>
            </div>
            <p className='message_feed--introduction--greeting' >This conversation is just between @{partner} and you. Check out their profile to learn more about them. <span>View Profile</span></p>
        </div>
        {
          dates.map(date => {
            return (
              <>
              {
                areMessagesPresent(messages, date) ?
                <TimeStamp label={date}>
                  {
                    messages.filter(message => isSameDay(new Date(message.date), new Date(date))).map(message => {
                      return (
                        <Message setThread={setThread} data={message}/>
                      )
                    })
                  }
                </TimeStamp>:
                null
              }
              </>
            )
          })
        }
    </section>
  )
}

export default MessageFeed
