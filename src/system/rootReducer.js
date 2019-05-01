import { combineReducers } from 'redux'
import gallery from '../components/pages/gallery/reducer'
import header from '../components/header/reducer'

export default combineReducers ({
    gallery,
    header   
})