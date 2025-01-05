"use client";

import { useRef, useEffect, useState } from "react";

const CCP = ({}) => {
  const ccpContainerEl = useRef<HTMLDivElement>(null);
  const [queue, setQueue] = useState<string | null>(null);

  useEffect(() => {
    require("amazon-connect-streams");
    if (ccpContainerEl.current) {
      connect.core.initCCP(ccpContainerEl.current, {
        ccpUrl: `https://${process.env.NEXT_PUBLIC_AMAZON_CONNECT_INSTANCE_NAME}.my.connect.aws/ccp-v2`,
        loginUrl: `https://${process.env.NEXT_PUBLIC_AMAZON_CONNECT_INSTANCE_NAME}.my.connect.aws/ccp-v2/login`,
        loginPopup: true,
        loginPopupAutoClose: true,
        softphone: {
          allowFramedSoftphone: true,
        },
      });
      connect.agent(async (agent: any) => {
        const agentConf = agent.getConfiguration();
        console.log(agentConf);
        agent.onStateChange((state: any) => {
          console.log(state);
        });
        agent.onError((error: any) => {
          console.log(error);
        });
      });
      connect.contact(async (contact: any) => {
        contact.onConnected(() => {
          console.log("connected");
          const queue = contact.getQueue();
          setQueue(queue.name);
        });
        contact.onEnded(() => {
          console.log("ended");
          setQueue(null);
        });
      });
    }
    return () => {
      connect.core.terminate();
      ccpContainerEl.current = null;
    };
  }, []);

  useEffect(() => {
    console.log(queue);
  }, [queue]);

  return (
    <>
      <div className="h-2rem text-center text-2xl text-gray-750">
        Queue: {queue || "非通話状態です"}
      </div>
      <div
        id="ccp-container"
        ref={ccpContainerEl}
        className="h-[calc(100vh-2rem)] w-full"
      />
    </>
  );
};

export default CCP;
