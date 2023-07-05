import React from "react";
import { IoClose } from "react-icons/io5";
import Button from "../buttons/Button";
import { StyledPopUp } from "../../styles/components/models/popup.styled";

const Popup = ({
  header,
  body,
  actionLabel,
  onClose,
  footer,
  onClick,
  onSubmit,
  onFormSubmit,
  isLoading,
  disabled,
  isWhite,
  hideBtn,
}) => {
  function handleClose() {
    if (isLoading) return null;
    onClose();
  }
  return (
    <StyledPopUp className="fixed w-1/3 z-50">
      <div
        className={`${
          isWhite ? "bg-white" : "bg-black"
        } w-full p-4 rounded-lg gap-3 flex flex-col`}
      >
        <div className="flex justify-between">
          <h2 className="font-sofia text-2xl font-semibold text-white">
            {header}
          </h2>
          <IoClose
            size={30}
            className="cursor-pointer p-1 bg-neutral-400 rounded-full"
            color="#fff"
            onClick={handleClose}
          />
        </div>
        <div className="flex flex-col justify-center items-center">{body}</div>
        <div className={`flex flex-col gap-3 p-3 ${hideBtn ? "hidden" : ""}`}>
          <Button
            secondary={isWhite}
            isCurrentBg={!isWhite}
            text={actionLabel}
            fontBold
            onClick={onFormSubmit}
            onSubmit={onSubmit}
            isLoading={isLoading}
            disabled={disabled}
          />
          <p onClick={onClick}>{footer}</p>
        </div>
      </div>
    </StyledPopUp>
  );
};

export default Popup;
