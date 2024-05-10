'use client'

import { Grid } from "react-loader-spinner";

const Loading = () => {
  return (
      <div className="flex w-screen h-[85dvh] justify-center items-center">
       <Grid color="white" />   
    </div>
  )
}

export default Loading;