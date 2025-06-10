import React from 'react'

const ResumeLeft = () => {
  return (
    <div className='text-white mt-20 m-16 w-1/2'>
        <h1 className='font-bold text-6xl'>Resume</h1>
        <div className="border-b-4 border-gray-500 w-56 mb-8 mt-3"></div>
        <h1 className='text-3xl mt-10 font-bold'>Software Skills</h1>
         <div className="mb-4">
                        <label className="block mb-1 mt-8">HTML,CSS</label>
                        <div className="h-2 bg-gray-800 rounded-full w-[80%]">
                            <div className="h-full bg-blue-500 rounded-full" style={{width:"100%"}}></div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">BOOTSTRAP,TAILWIND CSS</label>
                        <div className="h-2 bg-gray-800 rounded-full w-[80%]">
                            <div className="h-full bg-blue-500 rounded-full" style={{width:"100%"}}></div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">JAVASCRIPT</label>
                        <div className="h-2 bg-gray-800 rounded-full w-[80%]">
                            <div className="h-full bg-blue-500 rounded-full" style={{width:"95%"}}></div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">REACT JS</label>
                        <div className="h-2 bg-gray-800 rounded-full w-[80%]">
                            <div className="h-full bg-blue-500 rounded-full" style={{width:"80%"}}></div>
                        </div>
                    </div>
                    <h1 className='text-3xl mt-10 font-bold'>Languages</h1>
                    <div className="mb-4">
                        <label className="block mb-1 mt-6">Urdu</label>
                        <div className="h-2 bg-gray-800 rounded-full w-[80%]">
                            <div className="h-full bg-blue-500 rounded-full" style={{width:"100%"}}></div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block mb-1">English</label>
                        <div className="h-2 bg-gray-800 rounded-full w-[80%]">
                            <div className="h-full bg-blue-500 rounded-full" style={{width:"100%"}}></div>
                        </div>
                    </div>
                   
    </div>
  )
}

export default ResumeLeft