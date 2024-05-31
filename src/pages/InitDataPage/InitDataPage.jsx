import { useMemo } from "react";
import { useInitData, useLaunchParams } from "@tma.js/sdk-react";

export function InitDataPage() {
  const initDataRaw = useLaunchParams().initDataRaw;
  const initData = useInitData();

  console.log(initData.initData.user.id);

  return <div>page</div>;
}
