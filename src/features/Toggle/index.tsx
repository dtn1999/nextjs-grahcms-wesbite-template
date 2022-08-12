import React from "react";
import cn from "classnames";
import { Switch } from "@headlessui/react";
interface Props {}
const LanguageToggle: React.FC<Props> = React.memo(({}) => {
  const [enabled, setEnabled] = React.useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${
        enabled ? "bg-blue-600" : "bg-gray-200"
      } relative inline-flex h-6 w-11 items-center rounded-full`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block h-4 w-4 rounded-full bg-white`}
      />
    </Switch>
  );
});
export default LanguageToggle;
