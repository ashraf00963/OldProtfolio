import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Pic } from '../assets';
import './HomePage.css';

const MainContent = () => {
  const [visible, setVisible] = useState(false);
  const [reply, setReply] = useState('');
  const [helper, setHelper] = useState('');
  const [delayer, setDelayer] = useState(false);

  useEffect(() => {
    if (!visible) {
      const timer = setTimeout(() => {
        setVisible(!visible);
      }, 2000); // 1 seconds

      return () => clearTimeout(timer);
    }
  }, [visible]);

  useEffect(() => {
    if (helper) { 
      const timer = setTimeout(() => {
        setReply(helper); 
      }, 2000); // 2 seconds

      return () => clearTimeout(timer);
    }
  }, [helper]);

  const handleReplyes = (r) => {
    setDelayer(true);
    if(r === 'Hi'){
        const timer = setTimeout(() => {
            setHelper(r); 
          }, 2000);
    }
  }

  return (
    <div className={`main-content ${visible ? 'visible' : 'hidden'}`}>
        <div className='main__header'>
            {!reply && 
            <>
                <div className={`main__header-info  ${!delayer ? 'visible' : 'hidden'}`}>
                    <h2>Hi there,</h2>
                    <p>I am</p>
                    <h1>Ashraf Attallah</h1>
                    <button onClick={() => handleReplyes('Hi')}>Hi Ashraf</button>
                    <img src={Pic} alt="Ashraf Attallah" />
                </div>
                
            </>
            }
            {helper === 'Hi' && 
                <div className={`main__header-info ${reply === 'Hi' ? 'visible' : 'hidden'}`}>
                    <p>"Passionate about technology since childhood,
                        I've always been drawn to understanding how things work.
                        Even when I lacked formal opportunities to learn, I never lost my curiosity.
                        Now, I've made the bold decision to dedicate myself fully to pursuing knowledge in frontend development. 
                        Ready to embrace challenges and contribute my lifelong love for technology to innovative projects."
                    </p>
                </div>
            }
            
        </div>
    </div>
  );
};

export default MainContent;