import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
<div className="w-full h-screen p-4 duration-200"
style={{backgroundColor: color}}> 
<div className="fixed flex flex-wrap  bottom-12 justify-center inset-x-0 px-2  ">
<div className="fixed flex flex-wrap gap-3 shadow-lg bg-white rounded-3xl px-3 py-2 ">
  <button className="outline-none px-4 text-white py-1 rounded-full"
  onClick={()=> setColor("red")}
  style={{backgroundColor:"red"}}>Red</button>
  <button className="outline-none px-4 text-white py-1 rounded-full"
   onClick={()=> setColor("Green")}
  style={{backgroundColor:"Green"}}>Green</button>
  <button className="outline-none px-4 text-white py-1 rounded-full"
   onClick={()=> setColor("blue")}
  style={{backgroundColor:"blue"}}>Blue</button>
  <button className="outline-none px-4 text-white py-1 rounded-full"
   onClick={()=> setColor("yellow")}
  style={{backgroundColor:"yellow"}}>Yellow</button>
  <button className="outline-none px-4 text-white py-1 rounded-full"
   onClick={()=> setColor("cyan")}
  style={{backgroundColor:"cyan"}}>Cyan</button>
  <button className="outline-none px-4 text-white py-1 rounded-full"
   onClick={()=> setColor("pink")}
  style={{backgroundColor:"pink"}}>Pink</button>
  <button className="outline-none px-4 text-white py-1 rounded-full"
   onClick={()=> setColor("teal")}
  style={{backgroundColor:"teal"}}>Teal</button>
  <button className="outline-none px-4 text-white py-1 rounded-full"
   onClick={()=> setColor("orange")}
  style={{backgroundColor:"orange"}}>Orange</button>
  <button className="outline-none px-4 text-white py-1 rounded-full"
   onClick={()=> setColor("black")}
  style={{backgroundColor:"black"}}>Black</button>
  <button className="outline-none px-4 text-white py-1 rounded-full"
   onClick={()=> setColor("indigo")}
  style={{backgroundColor:"indigo"}}>Indigo</button>
  <button className="outline-none px-4 text-white py-1 rounded-full"
   onClick={()=> setColor("purple")}
  style={{backgroundColor:"purple"}}>Purple</button>
  <button className="outline-none px-4 text-white py-1 rounded-full"
   onClick={()=> setColor("lime")}
  style={{backgroundColor:"Lime"}}>Lime</button>
  <button className="outline-none px-4 text-white py-1 rounded-full"
   onClick={()=> setColor("gray")}
  style={{backgroundColor:"Gray"}}>Gray</button>
  <button className="outline-none px-4 text-white py-1 rounded-full"
   onClick={()=> setColor("fuchsia")}
  style={{backgroundColor:"fuchsia"}}>Fuchsia</button>
  </div>
</div>
  
</div>
  )
}

export default App
