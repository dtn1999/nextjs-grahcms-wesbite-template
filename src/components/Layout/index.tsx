import React from "react";
import cn from "classnames";
import ScrollToTop from "react-scroll-to-top";
import { motion } from "framer-motion";
import { BaseProps } from "src/types/components";
import { default as Footer } from "./Footer";
import { default as Navigation } from "./NavBar";
interface Props extends BaseProps {
  seo?: any;
  footer: any;
  navigation: any;
}

const Layout: React.FC<Props> = React.memo(function layout({
  children,
  ...props
}) {
  const { className, seo, footer, navigation } = props;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative h-full"
    >
      <ScrollToTop
        smooth
        color="#33975D"
        style={{ zIndex: 1000 }}
        className="right-[4rem] flex items-center justify-center "
      />
      <Navigation {...navigation} />
      {children}
      <Footer {...footer} />
    </motion.div>
  );
});

export default Layout;
