const ADD_LIST = 'ADD-LIST'
const UPDATE_TEXT = 'UPDATE-TEXT'
const DELETE_LIST = 'DELETE-LIST'
const ADD_DO = 'ADD-DO'
const UPDATE_DO_TEXT = 'UPDATE-DO-TEXT'
const UPDATE_MARK = 'UPDATE-MARK'
const DELETE_DO = 'DELETE-DO'

let initialState = {
    lists: [
        {
            id: 1,
            name: 'Films',
            paragraph: [
                {
                    id: 1,
                    name: 'Kingsman',
                    mark: false
                },
                {
                    id: 2,
                    name: 'Человек-Паук',
                    mark: false
                }
            ]
        },
        {
            id: 2,
            name: 'Books',
            paragraph: [
                {
                    id: 1,
                    name: 'Шерлок Холмс',
                    mark: false
                },
                {
                    id: 2,
                    name: 'Стив Джобс',
                    mark: false
                }
            ]
        }
    ],

    newText: '',

    newDoText: ''
}

let findIdOfList = (state, id) => {
    let listId
    for(let i = 0; i < state.lists.length; i++) {
        if(state.lists[i].id === id)
            listId = i
    }
    return listId
}

let findIdOfDo = (state, listId, id) => {
    let doId
    for(let i = 0; i < state.lists[listId-1].paragraph.length; i++) {
        if(state.lists[listId-1].paragraph[i].id === id)
            doId = i
    }
    return doId
}

const checkReducer = (state = initialState, action) => {
    let copyState
    let id
    let listId

    switch(action.type) {
        case ADD_LIST:
            if (state.newText === '') {
                alert('Please write something!')
                return state
            }
            return {
                ...state,
                newText: '',
                lists: [...state.lists, {id: state.lists.length + 1, name: state.newText, paragraph: []}]
            }

        case UPDATE_TEXT:
            return {
                ...state,
                newText: action.text
            }

        case DELETE_LIST:
            copyState = {
                ...state,
                lists: [...state.lists]
            }
            id = findIdOfList(copyState, action.id)
            copyState.lists.splice(id, 1)
            return copyState

        case UPDATE_DO_TEXT:
            return {
                ...state,
                newDoText: action.newText
            }

        case ADD_DO:
            if (state.newDoText === '') {
                alert('Please write something!')
                return state
            }
            copyState = {
                ...state,
                newDoText: ''
            }
            id = findIdOfList(copyState, action.listId)
            copyState.lists[id].paragraph.push({id: state.lists[id].paragraph.length+1, name: state.newDoText, mark:false})
            return copyState

        case DELETE_DO:
            copyState = {
                ...state
            }
            listId = findIdOfList(copyState,action.listId)
            id = findIdOfDo(copyState, action.listId, action.doId)
            copyState.lists[listId].paragraph.splice(id, 1)
            return copyState

        case UPDATE_MARK:
            copyState = {
                ...state
            }
            listId = findIdOfList(copyState,action.listId)
            id = findIdOfDo(copyState, action.listId, action.doId)
            copyState.lists[listId].paragraph[id].mark = action.mark
            return copyState
    }

    return state
}

export const addListActionCreator = () => {
    return {
        type: ADD_LIST
    }
}

export const updateTextActionCreator = (text) => ({
    type: UPDATE_TEXT,
    text: text
})

export const deleteListActionCreator = (id) => ({
    type: DELETE_LIST,
    id: id
})

export const addDoActionCreator = (listId) => ({
    type: ADD_DO,
    listId: listId
})

export const updateDoTextActionCreator = (text) => ({
    type: UPDATE_DO_TEXT,
    newText: text
})

export const deleteDoActionCreator = (listId, doId) => ({
    type: DELETE_DO,
    listId: listId,
    doId: doId
})

export const updateMarkActionCreator = (listId, doId, mark) => ({
    type: UPDATE_MARK,
    listId: listId,
    doId: doId,
    mark: mark
})



export default checkReducer