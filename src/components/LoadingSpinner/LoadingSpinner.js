import React from 'react';

export const LoadingSpinner = () => {
  return (
    <div class="spinner">
      <svg>
        <use href="${icons}#icon-loader"></use>
      </svg>
    </div>
  );
};
