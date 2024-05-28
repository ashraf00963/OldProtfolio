import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pic } from '../assets';
import './HomePage.css';


const MainContent = () => {
  const [visible, setVisible] = useState(false);
  const [reply, setReply] = useState(1);
  const [delay, setDelay] = useState(1);
  const [buttonDelayer, setButtonDelayer] = useState(false);

  useEffect(() => {
    if (!visible) {
      const timer = setTimeout(() => {
        setVisible(!visible);
      }, 1000); // 1 seconds

      return () => clearTimeout(timer);
    }
    }, [visible]);

    const handleReplyes = (r) => {
        setDelay(0);
        setButtonDelayer(false);
        const timer = setTimeout(() => {
            setReply(r); 
        }, 1000);
        const timer1 = setTimeout(() => {
            setDelay(r); 
        }, 2000);
        const timer2 = setTimeout(() => {
            setButtonDelayer(true); 
        }, 10000);
    }

  return (
    <div className={`main-content ${visible ? 'visible' : 'hidden'}`}>
        <div className='main__header'>
            {reply === 1 && 
            <>
                <div className={`main__header-info  ${delay === 1 ? 'visible' : 'hidden'}`}>
                    <div className='main__header-info_intro'>
                        <div className='main__header-info_text'>
                            <h2>Hi there,</h2>
                            <p>I am</p>
                            <h1>Ashraf Attallah</h1>
                            <button onClick={() => handleReplyes(2)}>Hi Ashraf!!</button>
                        </div>
                        <img src={Pic} alt="Ashraf Attallah" />
                    </div>
                </div>
            </>
            }
            {reply === 2 && 
                <div className={`main__header-info ${delay === 2 ? 'visible' : 'hidden'}`}>
                    <div className='main__header-info_first'>
                        <h2>A Lifelong Love Affair with Technology</h2>
                        <p>From a young age, I've been captivated by technology. Whether it was fixing broken gadgets or exploring the depths of coding, I've always been drawn to the endless possibilities it offers.</p>
                        <p>I'm not one to back down from a challenge. No matter how tough the problem, I'll find a solution. It's this tenacity and love for creating that drives me forward.</p>
                        <p>My approach is simple: logical, methodical, and relentless. I break down problems until they're manageable and then tackle them head-on.</p>
                        <p>Now, I'm ready to take my passion to the next level. Join me as I dive into the world of IT, armed with curiosity, determination, and a hunger for innovation.</p>
                        <div className={`main__header-info_btns ${buttonDelayer ? 'visible' : 'hidden'}`}>
                            <button onClick={() => handleReplyes(1)}>Go Back</button>
                            <button onClick={() => handleReplyes(3)}>Story?!</button>
                        </div>
                    </div>
                </div>
            }
            {reply === 3 && 
                <div className={`main__header-info ${delay === 3 ? 'visible' : 'hidden'}`}>
                    <div className='main__header-info_first'>
                        <p>
                            “An example would be the portfolio itself. Every time you press the forward button, you are climbing a ladder.
                            You are at step 3 now, but be careful going back.The animations you are seeing now are made up of two states:
                            one that delays the text appearance and another that changes sections.”
                        </p>
                        <div className={`main__header-info_btns ${buttonDelayer ? 'visible' : 'hidden'}`}>
                            <button onClick={() => handleReplyes(1)}>Go Back</button>
                            <button onClick={() => handleReplyes(4)}>Skills</button>
                        </div>
                    </div>
                </div>
            }
            {reply === 4 && 
                <div className={`main__header-info ${delay === 4 ? 'visible' : 'hidden'}`}>
                    <div className='main__header-info_first'>
                        <h2>Skills</h2>
                        <div className='main__header-info_skills'>
                            <div className='main__header-info_skill'>
                                <h3>Frontend Development:</h3>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                    <li>React</li>
                                    <li>React-vite</li>
                                </ul>
                            </div>
                            <div className='main__header-info_skill'>
                                <h3>Version Control &<br /> Collaboration:</h3>
                                <ul>
                                    <li>Git</li>
                                    <li>GitHub</li>
                                </ul>
                            </div>
                            <div className='main__header-info_skill'>
                                <h3>Design Tools:</h3>
                                <ul>
                                    <li>Figma</li>
                                </ul>
                            </div>
                            <div className='main__header-info_skill'>
                                <h3>Backend Development (Familiarity):</h3>
                                <ul>
                                    <li>Node.js</li>
                                    <li>Express.js</li>
                                </ul>
                            </div>
                            <div className='main__header-info_skill'>
                                <h3>Others:</h3>
                                <ul>
                                    <li>JSON</li>
                                    <li>Command Line (Bash)</li>
                                    <li>Web Hosting (cPanel)</li>
                                    <li>GitHub Pages</li>
                                </ul>
                            </div>
                        </div>
                        <div className={`main__header-info_btns ${buttonDelayer ? 'visible' : 'hidden'}`}>
                            <button onClick={() => handleReplyes(1)}>Go Back</button>
                            <button onClick={() => handleReplyes(5)}>Projects</button>
                        </div>
                    </div>
                </div>
            }
            {reply === 5 && 
                <div className={`main__header-info ${delay === 5 ? 'visible' : 'hidden'}`}>
                <div className='main__header-info_first'>
                    <h2>Projects</h2>
                    <div className='main__header-info_projects'>
                        <div className='main__header-info_project'>
                            <h3>Next To Last</h3>
                            <p>Live site: <a href='https://nexttolast.store/' target='_blank'>www.nexttolast.store</a></p>
                            <p>Frontend source code: <a href='https://github.com/ashraf00963/NextToLast.git'  target='_blank'>GitHub</a></p>
                            <p>Backend source code: <a href='https://github.com/ashraf00963/NTLserver.git'  target='_blank'>GitHub</a></p>
                        </div>
                        {/* Add more projects here if needed */}
                        <div className='main__header-info_project'>
                            <h3>Other</h3>
                            <p>Check out source code: <a href='https://github.com/ashraf00963/Protfolio.git' target='_blank'>Protfolio</a></p>
                            <p>GitHub page: <a href='https://github.com/ashraf00963'  target='_blank'>GitHub</a></p>
                        </div>
                    </div>
                    <div className={`main__header-info_btns ${buttonDelayer ? 'visible' : 'hidden'}`}>
                        <button onClick={() => handleReplyes(1)}>Go Back</button>
                        <h4>First Release updates coming soon</h4>
                    </div>
                </div>
            </div>
            
            }
        </div>
    </div>
  );
};

export default MainContent;
