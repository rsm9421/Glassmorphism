import React, { useState, useEffect } from "react";
function App() {
  const [color, setColor] = useState("rgba(255,255,255,0.1)");
  const [corner, setCorner] = useState("10");
  const [opacity, setOpacity] = useState("0.53");
  const [blur, setBlur] = useState("44");
  const [outline, setOutline] = useState("55");

  const divStyle = {
    background:` ${color}`,
    backdropFilter: `blur(${blur / 10}px)`,
    borderRadius: `${corner}px`,
    border: `1px solid rgba(255, 255, 255, ${outline/100})`,
  };

  useEffect(() => {
    let x = document.querySelector(".color").value;
    setColor(hexToRgba(x, 0.5));
  }, [opacity]);

  function hexToRgba(hex, alpha) {
    hex = hex.replace("#", "");

    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);

    if (typeof alpha === "undefined") {
      alpha = 1;
    } else {
      alpha = parseFloat(alpha);
      if (isNaN(alpha) || alpha < 0 || alpha > 1) {
        alpha = 1;
      }
    }

    var rgba = `rgba(${r},${g},${b},${opacity})`;

    return rgba;
  }

  const handleColorChange = (e) => {
    console.log(hexToRgba(e.target.value, 0.5));
    setColor(hexToRgba(e.target.value, 0.5));
  };

  const handleBlurChange = (e) => {
    setBlur(e.target.value);
  };

  const handleCornerChange = (e) => {
    setCorner(e.target.value);
  };
  const handleOutlineChange = (e) => {
    setOutline(e.target.value);
  };

  const handleOpacityChange = (e) => {
    setOpacity(e.target.value / 100);
  };

  function copyToClipboard() {
    let y=document.getElementById("t").innerText;
    navigator.clipboard.writeText(y) 
  }
  
  return (
    <>
    <div>
      <div className="w-full py-5 gap-5 h-screen flex flex-col-reverse md:flex-row justify-evenly md:bg-[url(https://img.freepik.com/free-photo/gray-sofa-brown-living-room-with-copy-space_43614-954.jpg?t=st=1711820664~exp=1711824264~hmac=fd451f409e816f37d3a1529d5fd1533d0e8758b95a1988cb2eb5a88d11ad57ce&w=900)] items-center bg-cover bg-[url(https://img.freepik.com/free-photo/interior-home-decor-with-photo-frames_23-2149514008.jpg?t=st=1711820783~exp=1711824383~hmac=a12539fbb5526f26bbfd907ca2a8f1f81df6f45d15827c9e836819040ea95dc3&w=360)] bg-center ">
        <div className="w-80 lg:w-96 py-4 px-6 bg-white bg-opacity-50  rounded-xl ">
          <h1>TRANSPARENCY</h1>
          <input
            type="range"
            min={0}
            max={100}
            value={opacity * 100}
            onChange={handleOpacityChange}
            className="w-full border-0 p-0 appearance-none rounded-md h-[6px] [&::-webkit-slider-thumb]:bg-white"
          />
          <h1>BLUR</h1>
          <input
            type="range"
            min={0}
            max={200}
            value={blur}
            onChange={handleBlurChange}
            className="w-full appearance-none rounded-md h-[6px] [&::-webkit-slider-thumb]:bg-white"
          />
          <h1>OUTLINE</h1>
          <input
            type="range"
            min={0}
            max={100}
            value={outline}
            onChange={handleOutlineChange}
            className="w-full appearance-none rounded-md h-[6px] [&::-webkit-slider-thumb]:bg-white"
          />
          <h1>CORNER</h1>
          <input
            type="range"
            min={1}
            max={100}
            value={corner}
            onChange={handleCornerChange}
            className="w-full appearance-none rounded-md h-[6px] [&::-webkit-slider-thumb]:bg-white"
          />
          <h1>COLOR</h1>
          <input
          defaultValue={"#FFFFFF"}
            type="color"
            onChange={handleColorChange}
            className="w-full h-[6px] rounded-md color"
          />
          <h1>CSS</h1>
        
            <pre id="t" className="text-[12px] lg:text-[15px] font-semibold text-gray-800 mb-3">
              background:{color} <br />
              backdrop-filter:blur({blur / 10}px),<br />
              border-radius: {corner}px <br />
              border: 1px solid rgba(255, 255, 255, {outline/100})
              </pre>
          <button onClick={copyToClipboard} className="w-full hover:bg-pink-600 bg-pink-500 text-white rounded-md py-2  font-bold">COPY CSS</button>
        </div>
  
         
          
        <div style={divStyle} className="overflow-hidden z-20 w-80 lg:w-96 h-60 ">
        
        </div>
        
        </div>
</div>
    </>
  );
}

export default App;
