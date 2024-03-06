import ReactDOM from "react-dom";
import { Button } from '../pages/styled/main.styled';
import { ButtWrapper, DeleteModalWindow } from './styled/DeleteModal.styled';
import { Backdrop } from './styled/Modal.styled';

export const DeleteModal = ({
  leaveItHere,
  confirmDelete,
  IdToDelete,
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

  return ReactDOM.createPortal(
    <Backdrop onClick={handleClose} data-type="backdrop">
      <DeleteModalWindow>
        <p>
          Are you sure you want to delete from favorites this excellent car?
        </p>
        <ButtWrapper>

        <Button onClick={() => confirmDelete(IdToDelete)} width={126} del={'del'}>
          Delete
        </Button>
        <Button onClick={handleClose} data-type="close-modal" width={126}>
          Leave it here
        </Button>

        </ButtWrapper>


      </DeleteModalWindow>
    </Backdrop>,
    document.getElementById('delmodal')
  );
  
;
};
