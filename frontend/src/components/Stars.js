import React from 'react';

const Stars = ({ rating }) => {
  // const base = Math.floor(rating);
  // const decimal = rating % 1;
  // const empty = Math.floor(5 - rating);
  return (
    <div className='product-ratings'>
      <span>
        <i
          className={
            rating > 1
              ? 'fas fa-star'
              : rating >= 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating > 2
              ? 'fas fa-star'
              : rating >= 1.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating > 3
              ? 'fas fa-star'
              : rating >= 2.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating > 4
              ? 'fas fa-star'
              : rating >= 3.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>
      <span>
        <i
          className={
            rating > 5
              ? 'fas fa-star'
              : rating >= 4.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          }
        ></i>
      </span>

      {/* {Array(base)
        .fill('')
        .map(() => (
          <span>
            <i className={'fas fa-star'}></i>
          </span>
        ))}
      <span>
        <i className={decimal ? 'fas fa-star-half-alt' : null}></i>
      </span>
      {Array(empty)
        .fill('')
        .map(() => (
          <span>
            <i className={'far fa-star'}></i>
          </span>
        ))} */}
    </div>
  );
};

export default Stars;
