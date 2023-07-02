// TYPES
const GET_PARTNERS = '/directmessages/GET_PARTNERS'
const GET_DIRECT_MESSAGES_WITH_PARTNER = '/directmessages/GET_DIRECT_MESSAGES_WITH_PARTNER'

// ACTIONS
const actionGetPartners = (partners) => ({
    type: GET_PARTNERS,
    payload: partners
})

const actionGetDirectMessagesWithPartner = (messages) => ({
    type: GET_DIRECT_MESSAGES_WITH_PARTNER,
    payload: messages
})

// THUNK
export const thunkGetPartners = () => async dispatch => {
    const res = await fetch("/api/messages/", {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
    if (res.ok) {
        const data = await res.json()
        if (data.errors) {
            return data.errors
        }
        console.log(data)
        dispatch(actionGetPartners(data))
    }
}

export const thunkGetDirectMessages = (id) => async dispatch => {
    const res = await fetch(`/api/messages/partner/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    })
    if (res.ok) {
        const data = await res.json()
        if (data.errors) {
            return data.errors
        }
        console.log(data)
        dispatch(actionGetDirectMessagesWithPartner(data))
    }
}

// REDUX
const initialState = { partners: {}, directMessages: {}}

const messages = (state = initialState, action) => {
    switch(action.type) {
        case GET_PARTNERS: {
            const newState = { ...state, partners: {} }
            action.payload.forEach(message => newState.partners[message.id] = message)
            return newState
        }
        case GET_DIRECT_MESSAGES_WITH_PARTNER: {
            const newState = { ...state, directMessages: {}}
            action.payload.forEach(message => newState.directMessages[message.id] = message)
            return newState
        }
        default:
            return state
    }
}


export default messages
