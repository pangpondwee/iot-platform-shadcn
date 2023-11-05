"use client";
import React from "react";
import {
  QueryClient,
  QueryClientProvider as ReactQueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

type QueryClientProviderProps = {
  children: React.ReactNode;
};

const QueryClientProvider = ({ children }: QueryClientProviderProps) => (
  <ReactQueryClientProvider client={queryClient}>
    {children}
    <ReactQueryDevtools initialIsOpen={false} />
  </ReactQueryClientProvider>
);

export default QueryClientProvider;
