const Modal = () => {
  return (
    <div id="backdrop">
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="dialog_label"
        aria-describedby="dialog_desc"
      >
        <h2 id="dialog_label">Confirmation</h2>
        <div id="dialog_desc">
          <p>Are you sure you want to delete this file?</p>
        </div>
        <button type="button">No. Close this popup.</button>
        <button type="button">Yes. Delete the file.</button>
      </div>
    </div>
  );
};

export default Modal;
