import React, { useState } from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'

function CommentsCard({ owner, text, yourcomment }) {
    const [showMenu, setShowMenu] = useState(false);
    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    };
    return (
        <div className="bg-gray-100 dark:bg-slate-800 p-4 rounded-lg">
            <div className="text-lg font-medium mb-2 flex justify-between">
                <div>{owner}</div>
                {yourcomment ? (
                    <div className="relative">
                        <FiMoreHorizontal
                            onClick={handleMenuToggle}
                            className="cursor-pointer"
                        />
                        {showMenu && (
                            <div className="absolute z-50 right-0 mt-2 py-2 w-48 bg-white dark:bg-slate-600 rounded-md shadow-lg">
                                <button
                                    type="submit"
                                    href=""
                                    className="block px-4 py-2 cursor-pointer text-red-600 dark:hover:bg-slate-500  hover:bg-gray-100"
                                // onClick={handelDelete}
                                >
                                    Delete Blog
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <FiMoreHorizontal className="cursor-pointer" />
                )}
            </div>
            <p className="text-gray-600 mb-4">{text}</p>
        </div>)
}

export default CommentsCard