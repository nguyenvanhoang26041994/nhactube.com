import React from 'react';

const MusicCardSkeleton = () => {
  return (
    <div className="flex flex-col" style={{ maxWidth: '14.5rem' }}>
      <div className="ui-skeleton" style={{ height: '7.34375rem' }} />
      <div className="w-full flex flex-col justify-center" style={{ height: '4rem' }}>
        <div size="base" className="ui-skeleton mb-2" style={{ width: '40%' }}>NhacTube.Com</div>
        <div size="sm" className="ui-skeleton" style={{ width: '60%' }}>Nghe nhạc</div>
      </div>
    </div>
  );
};

export default MusicCardSkeleton;
