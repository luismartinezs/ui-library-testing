import { useState } from "react";

import { Button, Modal } from "flowbite-react";

const BaseModal = () => {
  const [show, setShow] = useState(false);

  const onClose = () => {
    setShow(false);
  };

  return (
    <>
      <div className="mt-4">
        <Button onClick={() => setShow(true)}>Open modal</Button>
      </div>
      <Modal show={show} onClose={onClose}>
        <Modal.Header>Confirmation</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this file?
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={onClose}>No. Close this popup</Button>
          <Button color="gray" onClick={onClose}>
            Yes. Delete the file
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BaseModal;
