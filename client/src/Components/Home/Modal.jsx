
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
          className="absolute h-screen w-screen bg-slate-900/10 backdrop-filter backdrop-blur-md inset-0 z-[5] flex items-center justify-center outline-none focus:outline-none"
          onClick={handleOverlayClick}
        >
          <div className="relative w-auto max-w-md ">
            <div className="relative flex flex-col w-full bg-white border-0 shadow-lg rounded-lg outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid rounded-t">
                <h3 className="text-3xl font-semibold">
                  Modal Header
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 hover:opacity-100 outline-none focus:outline-none"
                  onClick={handleClose}
                >
                  <span className="text-3xl">×</span>
                </button>
              </div>
              <div className="relative p-6 flex-auto">
                {children}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal