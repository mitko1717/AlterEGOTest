import { Box, Modal } from "@mui/material";
import { FC } from "react";
import Button from "@mui/material/Button/";
import { IModalProps } from "../models/interfaces";
import LoginScreen from "./Login";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const ModalForm: FC<IModalProps> = ({ isModalOpen, setIsModalOpen }) => {
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal
        hideBackdrop
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 500, height: 600 }}>
          <span className="absolute top-2 right-2">
            <Button variant="contained" onClick={handleClose}>
              <span className="text-2xl font-bold text-gray-400">CLOSE</span>
            </Button>
          </span>
          <LoginScreen />
        </Box>
      </Modal>
    </>
  );
};

export default ModalForm;
