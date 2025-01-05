"use client";

import "amazon-connect-streams";
import { useRef, useEffect } from "react";

const CCP = ({}) => {
  const ccpContainerEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ccpContainerEl.current) {
      connect.core.initCCP(ccpContainerEl.current, {
        ccpUrl: `https://${process.env.NEXT_PUBLIC_AMAZON_CONNECT_INSTANCE_NAME}.my.connect.aws/ccp-v2`,
        loginUrl: `https://${process.env.NEXT_PUBLIC_AMAZON_CONNECT_INSTANCE_NAME}.my.connect.aws/ccp-v2/login`,
        loginPopup: true,
        loginPopupAutoClose: true,
      });
    }
    return () => {
      connect.core.terminate();
      ccpContainerEl.current = null;
    };
  }, []);

  return (
    <div id="ccp-container" ref={ccpContainerEl} className="h-full h-full" />
  );
};

export default CCP;
