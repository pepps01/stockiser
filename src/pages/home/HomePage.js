import { Img } from '@chakra-ui/react'
import React from 'react'

import './home.css'

import Tickizer from './../../assets/tickizer.jpeg'
import { Button } from 'antd'
function HomePage() {
  return (
    <div>
        <nav className='navigation'>
            <Img src={Tickizer} className="logo"/>
            
            <ul className='navigation-mobile'>
                <li>
                    <a href='/login'>Login</a>
                </li>
                <li>
                    <a href='/register'>Register</a>
                </li>
            </ul>
        </nav>
        <div className='container'>
            <div className='header'>
                <div className=''>
                    <h1>Tickizer Adviser</h1>
                    <p>The right way to </p>
                </div>
                <div className=''>
                    <button>
                        Get Started
                    </button>
                    <Button>
                        Get More Advise
                    </Button>
                </div>
            </div>
        </div>
            
        
        <div className='divider'></div>
            
        <div className='container'>
            <h3>Our Partners</h3>
            <div className='partners'>
                <div className='harvard-message'>
                    <Img src={Tickizer} className="logo"/>
                </div>
                <div className='harvard-message'>
                    <Img src={Tickizer} className="logo"/>
                </div>
                <div className='harvard-message'>
                        <Img src={Tickizer} className="logo"/>
                </div>
                <div className='harvard-message'>
                        <Img src={Tickizer} className="logo"/>
                </div>
            </div>
        </div>

        <div className='container'>
            <div className='title-body'>
                Market and Financial Performance Data
            </div>
            <div className='list'>
                <div className='card'>
                    <div className='card-title'>
                        <h3>Selector</h3>
                    </div>
                    <div className='card-body'>
                        <p>List of tickers that the fall within the specified rank in the file</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-title'>
                        <h3>Optimiser</h3>
                    </div>
                    <div className='card-body'>
                        <p>Execute Adviser tuning to obtain list optimal parameter values for the ticker(s)</p>
                    </div>
                </div>
                <div className='card'>
                    <div className='card-title'>
                        <h3>Adviser</h3>
                    </div>
                    <div className='card-body'>
                        <p>Display decision advises in colors with the buy signal (green), sell(red), hold position signal (orange) </p>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default HomePage