import { Button } from '../pages/styled/main.styled';
import { DeleteModalWindow } from './styled/DeleteModal.styled';
import { Backdrop } from './styled/Modal.styled';

export const DeleteModal = ({
  leaveItHere,
  confirmDelete,
  IdToDelete,
  toggleFavorite,
}) => {
  document.body.style.overflow = 'hidden';

  const handleClose = e => {
    if (
      e.target.dataset.type === 'backdrop' ||
      e.target.dataset.type === 'close-modal'
    ) {
      document.body.style.overflow = 'scroll';
      leaveItHere();
    }
  };

  // const handleDelete = async id => {
  //   document.body.style.overflow = 'scroll';
  //   console.log(typeof toggleFavorite);
  //   // confirmDelete(id);
  //   await toggleFavorite(id);
  //   leaveItHere();
  // };

  return (
    <Backdrop onClick={handleClose} data-type="backdrop">
      <DeleteModalWindow>
        <p>Are you sure you want to delete from favorites this exellent car?</p>
        <Button onClick={confirmDelete}>Delete</Button>
        <Button onClick={handleClose} data-type="close-modal">
          Leave it here
        </Button>
      </DeleteModalWindow>
    </Backdrop>
  );
};
