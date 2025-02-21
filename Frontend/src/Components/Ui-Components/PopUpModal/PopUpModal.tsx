import React, { useState } from "react";
import "./PopUpModal.css";
import { IPopUpModal } from "../../../Helpers/Interfaces"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
// import { ImageComponent } from "../ImageComponent/ImageComponent";

export default function PopUpModal(props: IPopUpModal) {
  const [open, setOpen] = useState(true);
  const {
    header,
    message,
    image,
    btnText,
    secondBtnText,
    btnColor = "primary",
    secondBtnColor = "error",
    btnAction,
    secondBtnAction,
    description,
  } = props;

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} className="pop-up-modal">
        <DialogTitle children={header} className="pop-up-title" />
        <DialogContent className="pop-up-content">
         {message}
          <p className="pop-up-description">{description}</p>
          {/* {!image ? null : (
            <ImageComponent src={image} width={200} height={100} />
          )} */}
        </DialogContent>
        <DialogActions className="pop-up-btn">
          <Button
            variant="contained"
            color={btnColor}
            onClick={btnAction ? btnAction : handleClose}
          >
            {btnText}
          </Button>
          {secondBtnText ? (
            <Button
              variant="contained"
              color={secondBtnColor}
              onClick={secondBtnAction}
            >
              {secondBtnText}
            </Button>
          ) : null}
        </DialogActions>
      </Dialog>
    </>
  );
}
