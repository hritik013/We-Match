import PropTypes from 'prop-types'
import { Rating, Star } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useState } from 'react';
const ReviewCard = ({ review }) => {
    const { username, user_image, review_rating, review_text } = review
    const [rating, setRating] = useState(0)
    const myStyles = {
        itemShapes: Star,
        activeFillColor: '#ffb700',
        inactiveFillColor: '#fbf1a9'
    }

    return (
        <div className="p-4 w-80 space-y-4 text-center shadow-xl shadow-rose-100 rounded-2xl">
            <div className="flex justify-center">
                <img src={user_image} className="rounded-full  w-48" alt="" />
            </div>
            <div >
                <div className='flex justify-center'>
                    <Rating style={{ maxWidth: 150 }} value={review_rating} onChange={setRating} itemStyles={myStyles} readOnly />
                </div>
                <h1 className="text-2xl font-semibold font-poppins ">{username}</h1>
                <p className="font-special "> {review_text} </p>

            </div>
        </div>
    );
};

export default ReviewCard;
ReviewCard.propTypes = {
    review: PropTypes.object
}