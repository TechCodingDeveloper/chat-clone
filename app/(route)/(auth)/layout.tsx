import React from "react";

type Props = {
  children: React.ReactNode;
};

function AuthLayout({ children }: Props) {
  return <div className="bg-red-600">{children}</div>;
}

export default AuthLayout;
