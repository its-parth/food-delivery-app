import React, { useRef, useState } from "react";
import MenuDish from "./MenuDish";


const Accordion = ({title, itemCards, titleClass="font-normal text-base"}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [openIndexes, setOpenIndexes] = useState([]);
    const contentRef = useRef(); // holds DOM nodes for content panels
    const toggleAccordion = () => {
        // close currently open
        console.log(contentRef);
        if (isOpen) {
            if (contentRef) contentRef.current.style.maxHeight = "0px";
            setIsOpen(false);
        } else {
            contentRef.current.style.maxHeight = contentRef.current.scrollHeight + "px";
            setIsOpen(true);
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-6 divide-y">
            <div className={"border-b border-slate-200 "+titleClass}>
                    <button
                        type="button"
                        onClick={() => toggleAccordion()}
                        aria-expanded={isOpen}
                        aria-controls='content'
                        className="w-full flex justify-between items-center py-5 text-slate-800 focus:outline-none"
                    >
                        <span className="text-left">{title}</span>

                        {/* Icon: single SVG rotated when open */}
                        <svg
                            className={`w-4 h-4 transform transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                                }`}
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>

                    <div
                        id='content'
                        ref={contentRef}
                        className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
                        aria-hidden={!isOpen}
                    >
                        {
                            itemCards.map((item, index) => {
                                return <MenuDish key={index} dish = {item} />
                            })
                        }
                    </div>
                </div>
        </div>
    );
};

export default Accordion;
