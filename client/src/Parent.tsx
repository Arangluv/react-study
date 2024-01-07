import React, { useState, useEffect, Suspense } from "react";
import { useGetDataQuery } from "./hooks/dataHook";

export default function Parent() {
  const { data, isLoading, isError, error } = useGetDataQuery();
  console.log("data");
  console.log(data);
  console.log("isError");
  console.log(isError);
  console.log("error");
  console.log(error);
  return <div>{"asd"}</div>;
}
