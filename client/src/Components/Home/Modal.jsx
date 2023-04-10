
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
          className="absolute h-screen w-screen bg-slate-900/10 backdrop-filter backdrop-blur-md inset-0 z-50 flex items-center justify-center outline-none focus:outline-none"
          onClick={handleOverlayClick}
        >
          <div className="relative w-auto max-w-md ">
            <div className="relative flex flex-col w-full bg-slate-400 dark:bg-slate-900 border-0 shadow-lg rounded-lg outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid rounded-t">
                <h3 className="text-3xl dark:text-slate-100 text-slate-700 font-semibold">
                  Modal Header
                </h3>
                <button
                  className="p-1 ml-auto bg-transparent text-slate-700 dark:text-slate-200 border-0 dark:hover:text-slate-300 hover:text-slate-600 outline-none focus:outline-none"
                  onClick={handleClose}
                >
                  <span className="text-3xl text-slate-700 dark:text-slate-200">×</span>
                </button>
              </div>
              <div className="relative text-slate-700 dark:text-slate-200 p-6 flex-auto">
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