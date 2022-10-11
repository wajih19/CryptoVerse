import moment from 'moment';
import {Avatar, Card, Row , Col, Typography, Select} from 'antd';
import React, { useState } from 'react';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';


const News = ({simplified}) => {
  const [newsCategory, setNewsCategory]= useState('Cryptocurrency');
  const {data: cryptoNews}=useGetCryptoNewsQuery({newsCategory, count: simplified ? 6 : 13})
  const {data}=useGetCryptosQuery(50)
  console.log(cryptoNews);

  const demoImage ="https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News"  
  const {Title, Text} = Typography;
  const {Option} = Select;

  if (!cryptoNews?.value) return <Loader/>

  return (
    <Row gutter ={[24, 24]}>
      {!simplified && (
        <Col span={24}>
          <Select
            showSearch
            className='select-news'
            placeholder="Search a Crypto"
            optionFilterProp='children'
            onChange={(value)=>setNewsCategory(value)}
            filterOption={(input,option)=> option.children.toLowerCase().indexOf(input.toLower())>=0}>
              <Option value="Cryptocurrency"> Cryptocurrency</Option>
              {data?.data?.coins?.map((currency)=><Option value={currency.name}>{currency.name}</Option>)}
            </Select>
        </Col>
      )}
      {cryptoNews.value.map((news,i)=>(
        <Col xs ={24} sm ={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href ={news.url} target="_blank" rel='noreferrer'>
              <div className='news-image-container'>
                <Title className="news-title" level ={4}>{news.name}</Title>
                <img style={{maxWidth:"70px" , maxHeight:"70px"}} src ={news?.image?.thumbnail?.contentUrl || demoImage } alt='news'/>
              </div>
              <p>
                {news.description > 100 ? `${news.description.substring(0,100)}...` : news.description}
              </p>
              <div className='provider-container'>
                <div>
                  <Avatar src ={news.provider[0]?.image?.thumbnail?.contantUrl || demoImage} alt='news'/>
                  <Text className='provider-name'>{news.provider[0]?.name}</Text>
                </div>
                <Text>{moment(news.datePublished).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
      
    
  );
};

export default News;
