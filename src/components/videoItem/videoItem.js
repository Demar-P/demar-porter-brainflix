import './videoItem.scss'
import { NavLink } from 'react-router-dom';

function videoItem({ title, id, image, channel }) {

    return (
        <>
            <hr />
            <NavLink to={`/video/${id}`} className="new-video">
                <div className="new-video__img">
                    <img className="next-video__img--item" src={image} alt="" />
                </div>
                <div className="next-video__text">
                    <p className='next-video__title'>{title}</p>
                    <p className='next-video__channel'>{channel}</p>
                </div>
            </NavLink>
        </>
    )
}



export default videoItem;