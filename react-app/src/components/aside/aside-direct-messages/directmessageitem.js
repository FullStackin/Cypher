import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux'
import './directmessageitem.css'
import { FaTimes } from 'react-icons/fa'

function DirectMessageItem({directPartner}) {
  const history = useHistory();
  const team = useSelector(state => state.teams.singleTeam)
  console.log(team)

  return (
    <div onClick={() => history.push(`/team/${team.id}/direct-messages/${directPartner.id}`)} className='direct_message_item--wrapper'>
        <div className='direct_message_item--profile_image'>
        </div>
        <span className='direct_message_item--label'>{directPartner.partner}</span>
        <FaTimes className='direct_message_item--close'/>
    </div>
  )
}

export default DirectMessageItem
