import { div } from 'framer-motion/client'
import React from 'react'
import ResumeLeft from './ResumeLeft'
import ResumeRight from './ResumeRight'

const ResumeSection = () => {
    return (
        <div id='resume' className='bg-gray-950 w-full min-h-screen bg-cover bg-center'>
            <div className='flex'>
                <ResumeLeft></ResumeLeft>
                <ResumeRight></ResumeRight>
            </div>

        </div>
    )
}

export default ResumeSection