import React, { useState } from "react";
import { Button, HeaderOne, Libography } from "../../libs";
import {
  MdOutlineWifiTetheringErrorRounded,
  MdSignalWifiOff,
} from "react-icons/md";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Error = () => {
  const [retrying, setRetrying] = useState(false);

  function retryErr() {
    setRetrying(true);
    setTimeout(() => {
      setRetrying(false);
      window.location.reload();
    }, 3000);
  }

  return (
    <div className="flex flex-col z-0 relative gap-3 justify-center items-center">
      {retrying ? (
        <AiOutlineLoading3Quarters className="text-7xl tryloader" />
      ) : (
        <MdSignalWifiOff className="text-7xl text-red-600" />
      )}
      <HeaderOne
        className="text-red-500 text-2xl text-center font-semibold"
        text="Network Error"
      />
      <Libography
        fontSemiBold
        fontSofia
        text="Connect to the internet and try again"
        className="text-neutral-500"
      />
      <Button
        isCurrentBg
        text="Retry"
        className="w-28"
        isLoading={retrying}
        onClick={retryErr}
      />
    </div>
  );
};

export default Error;
