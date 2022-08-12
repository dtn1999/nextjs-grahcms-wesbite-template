import React from "react";
import cn from "classnames";
import { BaseProps, SocialHandle } from "@app/types";
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

interface Props extends BaseProps {
  orientation?: "horizontal" | "vertical";
  socials: SocialHandle[];
}

const SocialsHandles: React.FC<Props> = React.memo(
  ({ orientation, socials }) => {
    const iconSocialMap = React.useMemo(() => {
      let res: any = {};

      socials.map((social) => {
        switch (social.name) {
          case "facebook":
            res["facebook"] = <FaFacebookF />;
            break;
          case "twitter":
            res["twitter"] = <FaTwitter />;
            break;

          case "instagram":
            res["instagram"] = <FaInstagram />;
            break;

          case "tiktok":
            res["tiktok"] = <FaTiktok />;
        }
      });
      return res;
    }, [socials]);

    return (
      <div
        className="flex w-full items-center justify-center text-white"
        style={{
          writingMode: orientation === "vertical" ? "vertical-rl" : undefined,
        }}
      >
        {socials.map((item, index) => (
          <div key={index} className=" flex items-center">
            <a
              href={item.url}
              className="my-4 flex cursor-pointer items-center justify-center hover:text-primary"
            >
              <span
                className={cn({
                  flex: true,
                  "rotate-180": orientation === "vertical",
                })}
              >
                {item.name}
              </span>
              <span
                className={cn({
                  "mt-2": true,
                  "-rotate-90": orientation === "vertical",
                })}
              >
                {iconSocialMap[item.name]}
              </span>
            </a>
            {index !== socials.length - 1 && (
              <span className="h-2 w-2 rounded-full bg-primary" />
            )}
          </div>
        ))}
      </div>
    );
  }
);
export default SocialsHandles;
