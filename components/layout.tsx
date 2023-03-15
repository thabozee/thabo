import React from "react";

const Layout = (props: any) => {
  return (
    <div className="">
      <div className="">
        {props.children}
        
        </div>
    </div>
  );
};

export default Layout;
