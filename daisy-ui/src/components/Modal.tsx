const Modal = () => {
  return (
    <>
      <label htmlFor="my-modal" className="btn modal-button">
        open modal
      </label>
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <label
        htmlFor="my-modal"
        className="modal modal-bottom sm:modal-middle cursor-pointer"
      >
        <div className="modal-box relative">
          <h3 className="font-bold text-lg">Confirmation</h3>
          <p className="py-4">Are you sure you want to delete this file?</p>
          <div className="flex justify-end space-x-2">
            <div className="modal-action">
              <label htmlFor="my-modal" className="btn btn-outline">
                No. Close this popup.
              </label>
            </div>
            <div className="modal-action">
              <label htmlFor="my-modal" className="btn btn-primary">
                Yes. Delete the file.
              </label>
            </div>
          </div>
        </div>
      </label>
    </>
  );
};

export default Modal;
