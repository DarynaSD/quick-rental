import React from 'react';
import { Empty } from './styled/Empty.styled';

const EmptyFavorites = () => {
  return (
    <Empty>
      It appears that you haven't added any cars to your favorites yet. To get
      started, you can add cars that you like to your favorites for easier
      access in the future.
    </Empty>
  );
};

export default EmptyFavorites;
