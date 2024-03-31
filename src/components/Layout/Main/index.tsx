import React from "react";

interface Props {
  children: React.ReactNode;
  theme: boolean;
}

const Layout: React.FC<Props> = ({ children, theme }) => {
  return (
    <React.Fragment>
      <div className={`h-auto ${theme ? "bg-[#F7F7F8]" : "bg-[#292b32]"}`}>
        {children}
      </div>
    </React.Fragment>
  );
};

export default Layout;
