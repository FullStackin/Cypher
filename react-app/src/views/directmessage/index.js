import React from 'react';
import useOutsideClick from '../../hooks/useOutsideClick';
import { useParams } from 'react-router-dom';
import SendMessage from '../../components/sendmessage'
import DirectMessageRecipient from './directmessagerecipient';
import DirectMessageDetails from './directmessagedetails';
import MessageFeed from '../../components/messagefeed';
import Modal from '../../components/modal';
import '../views.css';
import './directmessage.css';

const messages = [
    {
        sender: 'Sender 1',
        date: '01/01/2023',
        time: '1:00',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        sender: 'Sender 2',
        date: '01/01/2023',
        time: '3:00',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        sender: 'Sender 3',
        date: '01/02/2023',
        time: '12:00',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        sender: 'Sender 4',
        date: '01/03/2023',
        time: '11:00',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        sender: 'Sender 5',
        date: '01/03/2023',
        time: '15:00',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
  ]

const fakeUsers = [
    {
        id: 1,
        name: 'Omar El Sahalah'
    },
    {
        id: 2,
        name: 'Roman Barabalat'
    },
    {
        id: 3,
        name: 'Jonathan Carter'
    },
    {
        id: 4,
        name: 'Chris Eke'
    }
]

function DirectMessage() {
    const { userId } = useParams();
    const { ref, isVisible, setIsVisible } = useOutsideClick();
    const recipient = fakeUsers.find(user => user.id == userId)

    return (
        <main className='views--wrapper'>
                <header className='views--header--wrapper'>
                    <div className='views--header'>
                        <DirectMessageRecipient
                            setIsVisible={setIsVisible}
                            data={recipient}
                        />
                    </div>
                </header>
                <MessageFeed messages={messages}/>
                <SendMessage data={recipient}/>
                {
                    isVisible ?
                    <Modal>
                        <DirectMessageDetails
                            setIsVisible={setIsVisible}
                            data={recipient}
                            ref={ref}
                        />
                    </Modal> :
                    null
                }
        </main>
    )
}

export default DirectMessage