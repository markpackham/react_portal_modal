import React, { useState } from "react";
import Modal from "./Modal";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "red",
  padding: "10px",
};

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <h1>
        Using Portal with Modal learned from
        https://www.youtube.com/watch?v=LyLa7dU5tp8
      </h1>
      <div
        style={BUTTON_WRAPPER_STYLES}
        onClick={() => console.log("clicked inside portal container")}
      >
        <button onClick={() => setIsOpen(true)}>Open Modal</button>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          Fancy Modal
        </Modal>
      </div>

      <div style={OTHER_CONTENT_STYLES}>Other Content</div>
    </>
  );
}
