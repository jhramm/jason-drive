import React from "react";
import Modal from "react-modal";

export default function PupilModal({ isOpen, onClose, children }) {
 return (
   <Modal
     isOpen={isOpen}
     onRequestClose={onClose}
     style={{
       overlay: {
         backgroundColor: "rgba(0, 0, 0, 0.5)",
         zIndex: 1000,
       },
       content: {
         width: "50%",
         margin: "auto",
         border: "none",
         background: "#4c4c4c",
         color: "white",
         borderRadius: "8px",
         padding: "20px",
         zIndex: 1001,
       },
     }}
   >
     {children}
   </Modal>
 );
};
