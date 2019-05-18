const initialState = {
    photos: [
        {id: 1, name: 'Image-1'},
        {id: 2, name: 'Image-2'},
        {id: 3, name: 'Image-3'},
        {id: 4, name: 'Image-4'}
    ],
}

export default function (state = initialState, action) {
    console.log("GALERY_REDUCER", action.image)
    switch (action.type) {
        case "ADD_IMG":
            return {
                ...state,
                photos: [...state.photos, action.image]
            }
        default: return state
    }
    
}