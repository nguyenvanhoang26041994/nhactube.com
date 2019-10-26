import React from 'react';

const CardSkeleton = () => {
  return (
    <div className="flex flex-col justify-between" style={{ maxWidth: '12rem', height: '12rem', width: '100%' }}>
      <div className="ui-skeleton" style={{ height: '8rem' }} />
      <div className="w-full flex ui-skeleton" style={{ width: '100%', height: '3.7rem' }} />
    </div>
  );
};

export default CardSkeleton;
