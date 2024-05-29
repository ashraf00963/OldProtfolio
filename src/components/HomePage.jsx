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

  return (
    <div className={`main-content ${visible ? 'visible' : 'hidden'}`}>
        <div className='main__header'>
            {reply === 1 && 
            <>
                <div className={`main__header-info  ${delay === 1 ? 'visible' : 'hidden'}`}>
                    <div className='main__header-info_intro'>
                        <div className={`main__header-navbar ${buttonDelayer ? 'visible' : 'hidden'}`}>
                            <button onClick={() => handleReplyes(2)}>Who?</button>
                            <button onClick={() => handleReplyes(3)}>animation</button>
                            <button onClick={() => handleReplyes(4)}>Skills</button>
                            <button onClick={() => handleReplyes(5)}>Projects</button>
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
                    <div className='main__header-info_first'>
                        <h2>I am</h2>
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
                    <div className='main__header-info_first'>
                        <h2>animation</h2>
                        <p>The animations in this portfolio are crafted using two distinct states: Delayer and Switcher.</p>
                        <div className='main__header-info_example'>
                            <div className='delayer'>
                                <h3>Delayer:</h3>
                                <p>This state controls the timing of text appearances and disappearances, adding a dynamic flow to the content.</p>
                            </div>
                           <div className='switcher'>
                                <h3>Switcher:</h3>
                                <p>This state manages the transitions between sections, activating when the screen goes black to ensure a smooth switch.</p>
                           </div>
                        </div>
                        <button onClick={() => handleReplyes(3.5)}>Learn More</button>
                        <div className={`main__header-info_btns ${buttonDelayer ? 'visible' : 'hidden'}`}>
                            <button onClick={() => handleReplyes(1)}>Go Back</button>
                            <button onClick={() => handleReplyes(4)}>Skills</button>
                        </div>
                    </div>
                </div>
            } 
            {reply === 3.5 && 
                <div className={`main__header-info ${delay === 3.5 ? 'visible' : 'hidden'}`}>
                    <div className='main__header-info_first'>
                        <div className='main__header-info_explane'>
                            <div className='Fcode'>
                            <h3>First, I found the way.</h3>
                            <p>I used a complex three-state system to control animations. Initially, the 'delayer' state would fade text out slowly. Then, a timer triggered the 'helper' state, revealing the next section. When 'helper' changed, a useEffect hook updated the 'reply' state, showing new text and hiding the old section..</p>
                            <p>However, this approach is quite intricate and easy to forget. Moreover, it posed limitations on adding new sections, requiring a similar setup for each pair.</p>
                            <img src={Fcode} onClick={() => openFullscreen(Fcode)} />
                            </div>
                            <div className='Scode'>
                            <h3>Then, I found an easier solution.</h3>
                            <p>With a more simplified approach, I've condensed the system into just two states. Upon pressing a button, the delay immediately sets to zero, causing the text to disappear. Then, within one second, the switch smoothly transitions to the new section. Finally, after two seconds, the delay is set to the correct section, seamlessly revealing the text.</p>
                            <img src={Scode} onClick={() => openFullscreen(Scode)} />
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
