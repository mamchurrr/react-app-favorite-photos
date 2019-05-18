import React from 'react';
import { connect } from 'react-redux'
import { addImgAction } from './actions'

const Gallery = ({photos, addImg}) => {
    const list = photos.map(({id, name}) => <li key={id}> {name} </li>)
    const add = () => {
        const id = photos[photos.length-1]['id'] + 1
        const image = { id, name: `image-${id}` }
        addImg(image)
    }
    return (
        <div id="gallery" className="page">
            <div className="page__wrap">
                <h1>Gallery</h1>
                <ul>
                    {list}
                </ul>
                <input type='button' onClick={add} value="add image" />
            </div>
        </div>
    )
}

const mapStateToProps = ({ gallery: { photos } }) => ({
    photos
})
const mapDispatchToProps = {
    addImg: addImgAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery)