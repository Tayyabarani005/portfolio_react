import React from 'react'
import PortfolioCard from './PortfolioCard'
import travel from "../assets/images/travel.png";
import Assistant from "../assets/images/Assistant.png";
import education from "../assets/images/education.png";
import musicplayer from "../assets/images/musicplayer.png";
import netflix from "../assets/images/netflix.png";
import texttospeech from "../assets/images/texttospeech.png";
import tictactoe from "../assets/images/tictactoe.png";
import todolist from "../assets/images/todolist.png";
import elearning from "../assets/images/E-learning.png";

const Portfolio = () => {
    return (
        <div id='portfolio' className='bg-gray-700 w-full min-h-screen bg-cover bg-center '>
            <div className=''><h1 className='p-20 font-bold text-6xl text-white flex place-content-center'>My Portfolio</h1></div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-16 '>
                <PortfolioCard
                    image={travel}
                    title="Travel App"
                    discription="Plan trips and explore destinations."
                    link="https://github.com/Tayyabarani005/travelAgency_project"
                ></PortfolioCard>
                <PortfolioCard
                    image={Assistant}
                    title="Virtual Assistant"
                    discription="Voice commands for daily tasks"
                    link="https://github.com/Tayyabarani005/virtual-assistant-project"
                ></PortfolioCard>
                <PortfolioCard
                    image={education}
                    title="Educational Website"
                    discription="Online learning made simple"
                    link="https://github.com/Tayyabarani005/Education-System"
                ></PortfolioCard>
                <PortfolioCard
                    image={musicplayer}
                    title="Music Player"
                    discription="Play and manage your songs"
                    link="https://github.com/Tayyabarani005/music-player"
                ></PortfolioCard>
                <PortfolioCard
                    image={netflix}
                    title="Netflix Clone"
                    discription="Watch latest movies and shows"
                    link="https://github.com/Tayyabarani005/travelAgency_project"
                ></PortfolioCard>
                <PortfolioCard
                    image={texttospeech}
                    title="Text-to-Speech Converter"
                    discription="Convert text into speech"
                    link="https://github.com/Tayyabarani005/Text-to-Speech-Conveter"
                ></PortfolioCard>
                <PortfolioCard
                    image={tictactoe}
                    title="Tic Tac Toe Game"
                    discription="Classic two-player board game"
                    link="https://github.com/Tayyabarani005/Tic-Tac-Toe-Game"
                ></PortfolioCard>
                <PortfolioCard
                    image={todolist}
                    title="To Do List"
                    discription="Organize tasks and reminders"
                    link="https://github.com/Tayyabarani005/To-List-App"
                ></PortfolioCard>
                <PortfolioCard
                    image={elearning}
                    title="E-Learning"
                    discription="Interactive platform for online learning"
                    link="https://github.com/Tayyabarani005/E-Learning"
                ></PortfolioCard>
            </div>

            <footer className='text-white text-center  mt-20 text-xl'>
                <p>&copy; 2024 Tayyaba Rani. All rights reserved.</p>
                <ul className="social-icons flex place-content-center gap-6 mt-4">
                    <li><a href="https://github.com/Tayyabarani005"><i className="fab fa-github"></i></a></li>
                    <li><a href="https://www.linkedin.com/in/tayyaba-rani-936578332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                </ul>
            </footer>


        </div>


    )
}

export default Portfolio