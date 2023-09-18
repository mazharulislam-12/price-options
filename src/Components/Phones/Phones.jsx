import { data } from 'autoprefixer';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Phones = () => {
  const [phones, setPhones] = useState([]);
  useEffect(() => {
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res =>res.json())
    // .then(data => setPhones(data.data))
    axios
      .get('https://openapi.programming-hero.com/api/phones?search=iphone')
      .then((data) => {
        const phoneData = data.data.data;
        const PhonesWidthFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            Price: parseInt(phone.slug.split('-')[1]),
          };
          return obj;
        });
        console.log(PhonesWidthFakeData);
        setPhones(PhonesWidthFakeData);
      });
  }, []);
  return (
    <div>
      <h2 className='text-3xl'>Phone: {phones.length} </h2>
      <BarChart width={1200} height={400} data={phones}>
        <Bar dataKey="Price" fill='#8884d8' />
      </BarChart>
      <XAxis></XAxis>
    </div>
  );
};

export default Phones;
