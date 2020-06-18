const ADD_LIST = 'ADD-LIST'
const UPDATE_TEXT = 'UPDATE-TEXT'
const DELETE_LIST = 'DELETE-LIST'

let initialState = {
    lists: [
        {
            id: 1,
            name: 'Films',
            paragraph: [
                {
                    name: 'Adventure',
                    id: 1,
                    subparagraph: [
                        {
                            id: 1,
                            name: 'Мстители',
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
                    name: 'Horror',
                    id: 2,
                    subparagraph: [
                        {
                            id: 1,
                            name: 'Заклятье',
                            mark: true
                        },
                        {
                            id: 2,
                            name: 'Проклятье Анабель',
                            mark: false
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            name: 'Books',
            paragraph: [
                {
                    name: 'Adventure',
                    id: 1,
                    subparagraph: [
                        {
                            id: 1,
                            name: 'Мстители',
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
                    name: 'Horror',
                    id: 2,
                    subparagraph: [
                        {
                            id: 1,
                            name: 'Заклятье',
                            mark: true
                        },
                        {
                            id: 2,
                            name: 'Проклятье Анабель',
                            mark: false
                        }
                    ]
                }
            ]
        }
    ],

    newText: ''
}

let findIdOfList = (state, id) => {
    let listId
    for(let i = 0; i < state.lists.length; i++) {
        if(state.lists[i].id === id)
            listId = i
    }
    return listId
}

const checkReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_LIST:
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
            let copyState = {
                ...state,
                lists: [...state.lists]
            }
            let id = findIdOfList(copyState, action.id)
            copyState.lists.splice(id, 1)
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


export default checkReducer