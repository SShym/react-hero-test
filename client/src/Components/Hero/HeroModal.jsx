import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';

const HeroModal = ({ open, images, handleClose }) => (
  <Dialog open={open} onClose={handleClose}>
    <DialogTitle className="flex justify-between items-center text-gray-600">
      <p>Hero photos</p>
      <CloseIcon className="cursor-pointer" onClick={handleClose} />
    </DialogTitle>
    <DialogContent>
      {images?.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index + 1}`} className="h-full w-full object-cover mb-2" />
      ))}
    </DialogContent>
  </Dialog>
);

export default HeroModal;
