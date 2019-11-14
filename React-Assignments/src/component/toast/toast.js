import React from "react";

import "./toast.scss";

const ToastMessage = (props) => {
  return <div className="toastContainer">{props.msg}</div>;
};

export default ToastMessage;
