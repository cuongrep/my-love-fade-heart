import { navigate } from "gatsby"
import React, { useEffect } from "react"

export default function Home() {
  const iframeStyle = {
    "height": "calc(100vh - 4px)",
    "width": "calc(100vw - 4px)",
    "overflow": "hidden",
    "box-sizing": "border-box",
  }
  
  useEffect(() => {
    navigate('/fadeHeart.html');
  }, [])

  return (
    <></>
    // <>
    //   {navigate()}
    // </>
    // <div
    //   style={{
    //     display: "flex",
    //     alignContent: "center"
    //   }}>
    //   <iframe src="/fadeHeart.html" title="Fade Heart" allowfullscreen></iframe>
    // </div>
  )
}
