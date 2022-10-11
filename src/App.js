import React from 'react';
import { Routes ,Route, Link } from 'react-router-dom';
import {Navbar, Homepage, Cryptocurrencies,News, CryptoDetails} from './components';
import './App.css';
import { Layout, Space, Typography } from 'antd';

const App = () => {
  return (
    <div className='app'>
        <div className='navbar'>

            <Navbar/>
        </div>

        <div className='main'>
            <Layout>
                <div className='routes'>
                    <Routes>
                        <Route path="/" element={<Homepage/>}/>
                        <Route path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/crypto/:coinUuid" element={<CryptoDetails/>}/>
                    </Routes>
                </div>
            </Layout>


        <div className='footer'>
            <Typography.Title level={5} style={{color:'white'}}>
                CryptoVerse<br/>
                All rights reserved
            </Typography.Title>
            <Space>
                <Link to ="/">Home</Link>
                <Link to ="/exchanges">Exchanges</Link>
                <Link to ="/cryptocurrencies">Cryptocurrencies</Link>
                <Link to ="/news">News</Link>
            </Space>
        </div>
        </div>
    
      
    </div>
  )
}

export default App
