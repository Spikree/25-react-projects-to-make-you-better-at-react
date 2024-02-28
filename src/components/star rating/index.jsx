import "./styles"

function StarRating({noOfStars = 5}) {
    return <>
        <div className="star-rating">
            {
                [...Array(noOfStars).map((_,index))]
            }
        </div>
    </>
}

export default StarRating;