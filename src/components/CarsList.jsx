import React, { useState } from 'react';

import CarsListItem from './CarListItem';
import { List } from './styled/List.styled';
import { useSelector } from 'react-redux';
import { selectLoading } from '../redux/selectors';
import { Loader } from './Loader';
import { LoadMoreButton } from './styled/LoadMoreButton.styled';
import { ModalWindow } from './ModalWindow';

const CarsList = ({ cars, toggleFavorite }) => {
  const [isModal, setIsModal] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [count, setCount] = useState(12);

  const isLoading = useSelector(selectLoading);
  const total = cars.length;
  const lastPage = total <= count;

  const handleLoadMore = () => {
    setCount(prev => prev + 12);
  };

  const handleModalOpen = data => {
    setIsModal(true);
    setModalData(data);
  };

  const handleModalClose = e => {
    setIsModal(false);
    setModalData(null);
  };

  return (
    <List>
      {isLoading && <Loader />}
      {cars &&
        cars
          .slice(0, count)
          .map(one => (
            <CarsListItem
              item={one}
              toggleFavorite={toggleFavorite}
              handleModalOpen={handleModalOpen}
              key={one.id}
            />
          ))}

      {!lastPage ? (
        <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>
      ) : null}

      {isModal && (
        <ModalWindow modalData={modalData} onClose={handleModalClose} />
      )}
    </List>
  );
};

export default CarsList;
