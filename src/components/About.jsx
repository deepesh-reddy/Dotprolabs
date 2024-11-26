import React from 'react'

const About = () => {
  return (
    <div className="bg-no-repeat min-h-screen bg-[url('/Home/shades.png')] bg-[length:100vw_100vh] justify-start p-4 md:p-9">
      <div className="flex ml-[0%] md:ml-[21%] mt-6 md:mt-10">
        <h4 className='font-mono text-2xl md:text-4xl font-bold text-white'>
          Why <span className='text-[#E4B40D]'>MoonEX</span>?
        </h4>
      </div>
      <div className="flex items-center justify-center py-3 md:py-10 backdrop-blur-sm">
        <table className="w-full max-w-4xl border-collapse bg-[#102333] bg-[url('/Home/shades.png')] rounded-lg text-xs sm:text-base">
          <thead>
            <tr>
              <th className="justify-items-center border-b-2 text-sm md:text-2xl border-r-2 border-gray-500 p-2 md:p-6 text-left">
                <span className='font-mono text-[#E4B40D]'>Comparison</span>
              </th>
              <th className="justify-items-center border-b-2 border-r-2 border-gray-500 p-2 md:p-4 text-left">
                <img src="/About/aboutmiddle.png" alt="" className="w-12 md:w-auto"/>
              </th>
              <th className="justify-items-center border-b-2 p-2 md:p-4 border-gray-500 text-left">
                <img src="/About/uniswap.png" alt="" className="w-12 md:w-auto"/>
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(6)].map((_, rowIndex) => (
              <tr key={rowIndex}>
                <td className={`justify-items-center border-r-2 border-gray-500 ${rowIndex < 5 ? 'border-b-2' : ''} p-1 md:p-3 text-gray-400`}>
                  {rowIndex + 1}. Point no One
                </td>
                <td className={`justify-items-center border-r-2 border-gray-500 ${rowIndex < 5 ? 'border-b-2' : ''} p-1 md:p-3`}>
                  <img src="/About/tick.png" alt="" className="w-6 md:w-auto"/>
                </td>
                <td className={`justify-items-center border-gray-500 ${rowIndex < 5 ? 'border-b-2' : ''} p-1 md:p-3`}>
                  <img src="/About/wrong.png" alt="" className="w-6 md:w-auto"/>
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