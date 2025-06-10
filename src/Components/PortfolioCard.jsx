import React from 'react'

const PortfolioCard = ({image,title,discription,link}) => {
  return (
    <div className='w-[250px] h-[350px] rounded-xl border-b-2 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0_10px_25px_rgba(255,255,255,0.5)] bg-gray-900 overflow-hidden shadow-lg'>
      <div className=''>
        <img className='h-[200px]' src={image} alt="" />
      </div>

       <div className=" text-white">
        <div>
          <h2 className="text-xl font-bold text-center mt-5">{title}</h2>
          <p className="text-sm text-center mb-3">{discription}</p>
        </div>
        <a 
          href={link} 
          className="m-16 bg-gray-700 py-2 px-4 text-white text-center rounded hover:bg-gray-800 transition"
        >
          View Project
        </a>
      </div>

    </div>

     
  )
}

export default PortfolioCard