import React from 'react'

const About = () => {
  return (
    <div className="bg-no-repeat min-h-screen bg-[url('/Home/shades.png')] bg-[length:100vw_100vh] justify-start  p-9" >
      <div className="flex ml-[21%] mt-10 " >
        <h4 className='font-mono text-4xl font-bold text-white' >Why <span className='text-[#E4B40D]' >MoonEX</span>?</h4>
      </div>
      <div className=" flex items-center justify-center py-10  backdrop-blur-sm ">
      <table className="w-full max-w-4xl border-collapse bg-[#102333]  bg-[url('/Home/shades.png')] rounded-lg ">
        <thead>
          <tr className="">
            <th className="justify-items-center border-b-2 text-2xl border-r-2 border-gray-500 p-6 text-left"><span className='font-mono text-[#E4B40D]'>Comparison</span></th>
            <th className="justify-items-center border-b-2 border-r-2 border-gray-500  p-4 text-left">
            <img src="/About/aboutmiddle.png" alt="" />
            </th>
            <th className="justify-items-center border-b-2 p-4 border-gray-500  text-left"><img src="/About/uniswap.png" alt="" /></th>
          </tr>
        </thead>
        <tbody>
          {[...Array(6)].map((_, rowIndex) => (
            <tr key={rowIndex} className="">
              <td className={`justify-items-center border-r-2 border-gray-500  ${rowIndex < 5 ? 'border-b-2' : ''} p-3 text-gray-400`}>
  {rowIndex + 1}.  Point no One
</td>
              <td className={` justify-items-center border-r-2  border-gray-500  ${rowIndex < 5 ? 'border-b-2' : ''} p-3  text-gray-400`}>
  <img src="/About/tick.png" alt="" />
</td>
              <td className={`justify-items-center border-gray-500  ${rowIndex < 5 ? 'border-b-2' : ''} p-3 text-gray-400`}>
              <img src="/About/wrong.png" alt="" />
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default About