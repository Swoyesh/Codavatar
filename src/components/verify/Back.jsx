import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Back = () => {
  return (
    <div className="flex items-center">
      <div>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="mr-2 w-[11.67] h-[10] text-[#E0E0E0]"
        />
      </div>
      <div className="text-[14px] text-[#E0E0E0] w-33 h-21">
        <Link to = '/SendOTP'><button>Back</button></Link>
      </div>
    </div>
  );
};

export default Back;
