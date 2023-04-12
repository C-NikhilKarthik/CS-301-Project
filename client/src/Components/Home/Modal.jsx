
function Modal({ children,isOpen,handleClose }) {

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="absolute h-screen w-screen p-2 sm:py-36 bg-[#0f172acc] backdrop-filter backdrop-blur-md inset-0 z-50 flex items-center justify-center outline-none focus:outline-none"
          onClick={handleOverlayClick}
        >
          <div className="relative w-auto h-full ">
            <div className="relative flex flex-col h-full overflow-hidden w-full bg-slate-400 dark:bg-slate-900 border-0 shadow-lg rounded-lg outline-none focus:outline-none">
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal