import React from "react";

// common props 
export interface BaseProps {
    className?: string | undefined,
    children?: React.ReactNode
}

export interface PageProps<T = any> {
    globalData: any;
    pageData: T
  }
  