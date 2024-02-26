import React, { useState } from 'react';

import CarsListItem from './CarListItem';
import { List } from './styled/List.styled';
import { useSelector } from 'react-redux';
import { selectLoading } from '../redux/selectors';
import { Loader } from './Loader';
import { LoadMoreButton } from './styled/LoadMoreButton.styled';
import { ModalWindow } from './ModalWindow';
import { DeleteModal } from './DeleteModal';

const CarsList = ({ cars, toggleFavorite, page }) => {
  const [isModal, setIsModal] = useState(false);
  const [modalData, setModalData] = useState(null);

  const [isDeleteModal, setIsDeleteModal] = useState(false);
  const [IdToDelete, setIdToDelete] = useState(null);
  const [count, setCount] = useState(12);

  const isLoading = useSelector(selectLoading);
  const total = cars.length;
  const lastPage = total <= count;

  const handleLoadMore = () => {
    setCount(prev => prev + 12);
  };

  // modal with detailes
  const handleModalOpen = data => {
    setIsModal(true);
    setModalData(data);
  };

  const handleModalClose = e => {
    setIsModal(false);
    setModalData(null);
  };

  // modal to confirm delete
  const handleDelModalOpen = id => {
    setIsDeleteModal(true);
    setIdToDelete(id);
  };

  const confirmDelete = () => {
    toggleFavorite(IdToDelete);
    console.log(toggleFavorite)
    setIsDeleteModal(false);
    setIdToDelete(null);
  };

  const leaveItHere = e => {
    setIsDeleteModal(false);
    setIdToDelete(null);
  }

  return (
    <>
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
                handleDelModalOpen={handleDelModalOpen}
                key={one.id}
                page={page}
              />
            ))}
      </List>

      {!lastPage ? (
        <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>
      ) : null}

      {isModal && (
        <ModalWindow modalData={modalData} onClose={handleModalClose} />
      )}

      {isDeleteModal && (
        <DeleteModal
          toggleFavorite={toggleFavorite}
          IdToDelete={IdToDelete}
          confirmDelete={confirmDelete}
          leaveItHere={leaveItHere}
        />
      )}
    </>
  );
};

export default CarsList;
