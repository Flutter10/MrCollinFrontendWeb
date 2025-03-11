import React, { useEffect, useState } from 'react'
import FAQSection from '../Components/faq/FAQSection'
import Advertise from '../Components/blog/Advertise'
import { companyService } from '../services/companyService';


function FAQ() {
const [data, setData] = useState(null);

const fetchFAQ = async () => {
  try {
    const result = await companyService.getFAQ(); 
    setData(result.data);
  } catch (error) {
    console.error(error.message);
  }
};

useEffect(() => {
  fetchFAQ();
}, []);

  return (
    <div>
        <FAQSection data={data}/>
        <Advertise/>
    </div>
  )
}

export default FAQ