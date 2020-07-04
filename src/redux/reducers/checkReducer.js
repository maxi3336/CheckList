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

const checkReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_LIST:
            if (state.newText === '') {
                alert('Please write something!')
                return state
            }

            return {
                ...state,
                newText: '',
                lists: [...state.lists, {id: Math.round(Math.random()*100), name: state.newText, paragraph: []}]
            }

        case UPDATE_TEXT:
            return {
                ...state,
                newText: action.text
            }

        case DELETE_LIST:
            return {
                ...state,
                lists: state.lists.filter(list => (list.id !== action.id))
            }

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
            return  {
                ...state,
                lists: state.lists.map(list => {
                    if(list.id === action.listId){
                        list.paragraph.push({id: Math.round(Math.random()*100), name: state.newDoText, mark: false})
                    }
                    return list
                }),
                newDoText: ''
            }

        case DELETE_DO:
            return  {
                ...state,
                lists: state.lists.map(list => {
                    if(list.id === action.listId) {
                        debugger
                        list.paragraph = list.paragraph.filter(doItem => (doItem.id !== action.doId))
                    }
                    return list
                })
            }

        case UPDATE_MARK:
            return {
                ...state,
                lists: state.lists.map(list => {
                    if(list.id === action.listId) {
                        list.paragraph.map(doItem => {
                            if(doItem.id === action.doId) {
                                doItem.mark = action.mark
                            }
                            return doItem
                        })
                    }
                    return list
                })
            }
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