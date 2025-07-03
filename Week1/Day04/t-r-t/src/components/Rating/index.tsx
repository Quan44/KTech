import React from 'react';
import { FaStar } from 'react-icons/fa6';

const ratingLabels = [
  'Rất tệ',
  'Tệ',
  'Bình thường',
  'Tốt',
  'Rất tốt',
];

const ratingColors = [
  'bg-red-500',
  'bg-orange-500',
  'bg-green-400',
  'bg-blue-500',
  'bg-emerald-500',
];

export default function Rating({ value = 0 }: { value?: number }) {
  const [rating, setRating] = React.useState(value);

  return (
    <>
      {/* Rating from 1 to 5 start */}
      <div className="flex items-center bg-amber-50 gap-3 p-5 rounded-md">
        <span className="text-sm text-gray-700">Chọn đánh giá của bạn</span>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={`mx-0.5 cursor-pointer text-xl transition-all duration-150 
              ${rating >= star ? 'text-orange-400' : 'text-gray-700'}`}
              onClick={() => setRating(star)}
              data-testid={`star-${star}`}
            />
          ))}
        </div>
        {rating > 0 && (
          <span
            className={`ml-2 px-3 py-1 rounded font-semibold text-white text-sm italic ${ratingColors[rating - 1]}`}
          >
            {ratingLabels[rating - 1]}
          </span>
        )}
      </div>
    </>
  );
}
