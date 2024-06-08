import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pic, Fcode, Scode } from '../assets';
import './HomePage.css';


const MainContent = () => {
  const [visible, setVisible] = useState(false);
  const [reply, setReply] = useState(1);
  const [delay, setDelay] = useState(1);
  const [buttonDelayer, setButtonDelayer] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [delayer, setDelayer] = useState(false);
  const [switcher, setSwitcher] = useState(false);

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
        }, 5000);
    }

    const openFullscreen = (imgSrc) => {
      setFullscreenImage(imgSrc);
    };

    const closeFullscreen = () => {
      setFullscreenImage(null);
    };

    const handleDelayer = () => {
        const timer = setTimeout(() => {
            setDelayer(!delayer);
        }, 500);
    }

    const handleSwitcher = () => {
        setSwitcher(!switcher);
    }

  return (
    <div className={`main-content ${visible ? 'visible' : 'hidden'}`}>
        <div className='main__header'>
            {reply === 1 && 
            <>
                <div className={`main__header-info  ${delay === 1 ? 'visible' : 'hidden'}`}>
                    <div className='main__zero'>
                        <div className={`main__header-navbar ${buttonDelayer ? 'visible' : 'hidden'}`}>
                            <button onClick={() => handleReplyes(2)} id='who'>Who?</button>
                            <button onClick={() => handleReplyes(3)} id='animation'>animation</button>
                            <button onClick={() => handleReplyes(4)} id='skills'>Skills</button>
                            <button onClick={() => handleReplyes(5)} id='projects'>Projects</button>
                        </div>
                        <div className='main__header-info_pic'>
                            <div className='main__header-info_text'>
                                <h2>Hi there,</h2>
                                <p>I am</p>
                                <h1>Ashraf Attallah</h1>
                                <button onClick={() => handleReplyes(2)}>Hi Ashraf!!</button>
                            </div>
                            <img src={Pic} alt="Ashraf Attallah" />
                        </div>
                    </div>
                </div>
            </>
            }
            {reply === 2 && 
                <div className={`main__header-info ${delay === 2 ? 'visible' : 'hidden'}`}>
                    <div className='main__one'>
                        <h1>I am</h1>
                        <p>a math enthusiast with a passion for problem-solving. I love finding open doors in every challenge and figuring out the easiest way through.
                             Logical and persistent, I'm always up for fixing and improving things, no matter how small the problem might seem.
                             I enjoy spending time finding solutions and continuously learning new things.</p>
                        <div className={`main__header-info_btns ${buttonDelayer ? 'visible' : 'hidden'}`}>
                            <button onClick={() => handleReplyes(1)}>Go Back</button>
                            <button onClick={() => handleReplyes(3)}>animation</button>
                        </div>
                    </div>
                </div>
            }
            {reply === 3 && 
                <div className={`main__header-info ${delay === 3 ? 'visible' : 'hidden'}`}>
                    <div className='main__two'>
                        <h1>Animation</h1>
                        <p>The animations in this portfolio are crafted using two distinct states: Delayer and Switcher.</p>
                        <div className='main__header-info_example'>
                            <div className='delayer'>
                                <h2 className={`clickable ${delayer ? 'pressed' : ''}`} onClick={handleDelayer}>Delayer:</h2>
                                <p className={`sample ${delayer ? 'visible' : 'hidden'}`}>This state controls the timing of text appearances and disappearances, adding a dynamic flow to the content.</p>
                            </div>
                           <div className='switcher' >
                                <h2 className={`clickable ${switcher ? 'clicked' : ''}`} onClick={handleSwitcher}>Switcher:</h2>
                                {!switcher ? 
                                <p id='long-txt'>This state manages the transitions between sections, activating when the screen goes black to ensure a smooth switch.</p>
                                :
                                <p id='short-txt'>Press Learn more button</p>
                                }
                           </div>
                        </div>
                        <div className={`main__header-info_btns ${buttonDelayer ? 'visible' : 'hidden'}`}>
                            <button onClick={() => handleReplyes(1)}>Go Back</button>
                            <button onClick={() => handleReplyes(3.5)}>Learn More</button>
                            <button onClick={() => handleReplyes(4)}>Skills</button>
                        </div>
                    </div>
                </div>
            } 
            {reply === 3.5 && 
                <div className={`main__header-info ${delay === 3.5 ? 'visible' : 'hidden'}`}>
                    <div className='main__three'>
                        <div className='main__header-info_explane'>
                            <div className='Fcode'>
                            <h1>First, I found the door.</h1>
                            <p>I used a complex three-state system to control animations. Initially, the 'delayer' state would fade text out slowly. Then, a timer triggered the 'helper' state, revealing the next section. When 'helper' changed, a useEffect hook updated the 'reply' state, showing new text and hiding the old section..</p>
                            <p>However, this approach is quite intricate and easy to forget. Moreover, it posed limitations on adding new sections, requiring a similar setup for each pair.</p>
                            <button className='Big-screen' onClick={() => openFullscreen(Fcode)}>See Code</button>
                            <button className='Small-screen'><a href='./src/assets/Scode.png' target='_blank'>See Code</a></button>
                            </div>
                            <div className='Scode'>
                            <h1>Then, I found an easier way.</h1>
                            <p>With a more simplified approach, I've condensed the system into just two states. Upon pressing a button, the delay immediately sets to zero, causing the text to disappear. Then, within one second, the switch smoothly transitions to the new section. Finally, after two seconds, the delay is set to the correct section, seamlessly revealing the text.</p>
                            <button className='Big-screen' onClick={() => openFullscreen(Scode)}>See Code</button>
                            <button className='Small-screen'><a href='./src/assets/Scode.png' target='_blank'>See Code</a></button>
                            </div>
                            {fullscreenImage && (
                                <div className="overlay" onClick={closeFullscreen}>
                                    <img src={fullscreenImage} alt="Fullscreen Image" id="fullscreen-image" />
                                </div>
                            )}
                        </div>

                        <div className={`main__header-info_btns ${buttonDelayer ? 'visible' : 'hidden'}`}>
                                <button onClick={() => handleReplyes(3)}>animation</button>
                                <button onClick={() => handleReplyes(4)}>Skills</button>
                        </div>
                    </div>
                </div>
            }
            {reply === 4 && 
                <div className={`main__header-info ${delay === 4 ? 'visible' : 'hidden'}`}>
                    <div className='main__four'>
                        <h1>Skills</h1>
                        <div className='main__header-info_skills'>
                            <div className='main__header-info_skill'>
                                <h2>Frontend Development:</h2>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                    <li>React</li>
                                    <li>React-vite</li>
                                </ul>
                            </div>
                            <div className='main__header-info_skill'>
                                <h2>Version Control & Collaboration:</h2>
                                <ul>
                                    <li>Git</li>
                                    <li>GitHub</li>
                                </ul>
                            </div>
                            <div className='main__header-info_skill'>
                                <h2>Design Tools:</h2>
                                <ul>
                                    <li>Figma</li>
                                </ul>
                            </div>
                            <div className='main__header-info_skill'>
                                <h2>Backend Development (Familiarity):</h2>
                                <ul>
                                    <li>Node.js</li>
                                    <li>Express.js</li>
                                    <li>php</li>
                                </ul>
                            </div>
                            <div className='main__header-info_skill'>
                                <h2>Others:</h2>
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
                    <div className='main__six'>
                        <h1>Projects</h1>
                        <div className='main__header-info_projects'>
                            <div className='main__header-info_project'>
                                <h2>Next To Last</h2>
                                <p>NTL is a E-commerce website</p>
                                <p>Build with React-vite, Hosted on lightspeed server</p>
                                <p>Live site: <a href='https://nexttolast.store/' target='_blank'>www.nexttolast.store</a></p>
                                <p>Frontend source code: <a href='https://github.com/ashraf00963/NextToLast.git'  target='_blank'>GitHub</a></p>
                                <p>Backend source code: <a href='https://github.com/ashraf00963/NTLserver.git'  target='_blank'>GitHub</a></p>
                            </div>
                            <div className='main__header-info_project'>
                                <h2>Genius Pockets</h2>
                                <p>Simplify saving with goal-based compartments.</p>
                                <p>Build with React-vite, php and SQL Hosted on lightspeed server</p>
                                <p>Live site: <a href='https://geniuspockets.com/' target='_blank'>www.geniuspockets.com</a></p>
                                <p>Frontend source code: <a href='https://github.com/ashraf00963/geniuspockets'  target='_blank'>GitHub</a></p>
                                <p>Backend source code: <a href='https://github.com/ashraf00963/geniuspockets'  target='_blank'>Private</a></p>
                            </div>
                            <div className='main__header-info_project'>
                                <h2>Other</h2>
                                <p>Check out source code: <a href='https://github.com/ashraf00963/Protfolio.git' target='_blank'>Protfolio</a></p>
                                <p>GitHub page: <a href='https://github.com/ashraf00963'  target='_blank'>GitHub</a></p>
                            </div>
                        </div>
                        <div className={`main__header-info_btns ${buttonDelayer ? 'visible' : 'hidden'}`}>
                            <button onClick={() => handleReplyes(1)}>Go Back</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    </div>
  );
};

export default MainContent;
