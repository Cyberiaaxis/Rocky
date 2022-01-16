import React, { Component, createRef, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

const Modal = (props) => {
    // console.log(props);
    // console.log(props);
    const [show, setShow] = useState(false);

    const wrapperRef = createRef();

    const closeClick = (event) => {
        const elementTarget = event.target.dataset.ref;
        console.log(elementTarget);
        setShow({
            [elementTarget]: { show: false },
        });
    };

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
    }, []);

    const handleClickOutside = (event) => {
        //    event.preventDefault();
            console.log("handleClickOutside = (event)");
            console.log(event);
        if (!event.target.dataset.target && !event.target.dataset.toggle) return false;

        const elementTarget = event.target.dataset.target.substring(1);
        // console.log(event.target.dataset.target.substring(1));
        // console.log(elementTarget);
        const domNode = document.getElementById(elementTarget);

        if (!domNode) {
            setShow({ [elementTarget]: { show: true } });

            return false;
        } else {
            setShow({ [elementTarget]: { show: true } });
        }
    };

    let showClass,
        elementTarget = show[props.id];

    if (show[props.id] != undefined) {
        elementTarget = show[props.id];
        showClass = elementTarget.show ? "modal flipX open" : "modal flipX";
    } else {
        showClass = "modal flipX";
    }

    const renderClass = { id: props.id, className: showClass };
    console.log("props.body");
    console.log(props);
    return (
        <div {...renderClass} ref={wrapperRef}>
            <div className="modal-backdrop"></div>
            <div className="modal-content">
                <div className="modal-header">
                    {props.id}
                    <button className="close" onClick={closeClick} data-ref={props.id}>
                        &times;
                    </button>
                </div>
                <hr></hr>
                <div className="modal-body">{props.body}</div>
                <div className="modal-footer"></div>
            </div>
        </div>
    );
};

// console.log(Modal.propTypes);
Modal.propTypes = {
    id: PropTypes.string.isRequired,
    body: PropTypes.element.isRequired,
    key: PropTypes.string,
};

export default Modal;
