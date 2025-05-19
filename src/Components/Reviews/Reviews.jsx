import { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import { useNavigate } from "react-router-dom";


const Reviews = () => {
    const [reviews, setReview] = useState(null)
    useEffect(() => {
        fetch('/review.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    // console.log('reviews', reviews);
    const navigate = useNavigate()
    return (
        <div className="my-6">
            <h1 className="text-5xl font-special font-bold text-center">Messages from Our Clients </h1>
            <div className="flex flex-col items-center" data-aos="zoom-in-up" data-aos-duration="800" >
                <div className="grid grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-3 my-6 md:my-8 lg:my-12">
                    {
                        reviews?.slice(0, 3).map((review) => <ReviewCard key={review.review_id} review={review}></ReviewCard>
                        )
                    }

                </div>
                <div className="flex justify-center normal-case my-4">
                    <button
                        onClick={() => navigate('/reviews')}
                        className="btn btn-outline btn-error rounded-full normal-case px-8 ">Show All </button>
                </div>
            </div>
        </div>
    );
};

export default Reviews;