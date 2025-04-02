import React from "react";
  export const Card = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return <div className={`p-4 rounded-lg shadow-md ${className || ""}`}>{children}</div>;
  };
export const CardContent = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-2">{children}</div>;
};
