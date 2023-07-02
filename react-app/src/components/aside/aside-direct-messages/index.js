import React, { useState } from 'react'
import { FaCaretRight, FaCaretDown, FaPlus  } from 'react-icons/fa'
import DirectMessageItem from './directmessageitem'
import DirectMessageLabel from './directmessagelabel'
import { useSelector } from 'react-redux'

function AsideDirectMessages() {
    const [ expanded, setExpanded ] = useState(true)
    const directMessages = useSelector(state => state.messages.directMessages);
    const normalizedDirectMessages = Object.values(directMessages)

    return (
        <div className='aside_dropdown--wrapper'>
            <header className='aside_dropdown--header'>
                <div className='aside_dropdown--arrow_wrapper' onClick={() => setExpanded(!expanded)}>
                    {
                        expanded ?
                        <FaCaretDown className='aside_dropdown--arrow'/> :
                        <FaCaretRight className='aside_dropdown--arrow'/>
                    }
                </div>
                <DirectMessageLabel/>
            </header>
            {
            expanded ?
            <ul className='aside-dropdown--list'>
                {normalizedDirectMessages.map((directMessage) => {
                    return (
                       <li key={directMessage.id}>
                        <DirectMessageItem directMessage={directMessage}/>
                       </li>
                    )
                })}
                <li>
                    <div className='aside_dropdown--add_wrapper'>
                        <div className='aside_dropdown--add_item'>
                            <FaPlus className='aside_dropdown--add_icon'/>
                        </div>
                        <span>Add coworkers</span>
                    </div>
                </li>
            </ul>
            :
            null
            }
        </div>
    )
}

export default AsideDirectMessages