import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp as faThumbsUpSolid } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp as faThumbsUpRegular } from '@fortawesome/free-regular-svg-icons'

function LikeButton() {
  const [like, setLike] = React.useState(false);

  return (
    <div className="flex items-center gap-3 p-4 bg-white rounded shadow w-fit">
      <button
        className={`text-2xl transition-colors duration-200 
          ${like ? 'text-blue-600' : 'text-gray-400 hover:text-blue-500'}`}
        onClick={() => setLike(!like)}
      >
        <FontAwesomeIcon icon={like ? faThumbsUpSolid : faThumbsUpRegular} />
      </button>
      <span className="text-sm text-gray-700">
        {like ? 'Thank you !' : 'Click like if this post is useful to you !'}
      </span>
    </div>
  )
}

export default LikeButton