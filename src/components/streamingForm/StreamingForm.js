import { useState, useEffect } from 'react';
import { supabase } from '../../../supabase';
import { useRouter } from 'next/navigation';
import styled from "styled-components";

const Section = styled.section`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
color: black;
height: 100vh;
form{
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 24px;
  border-bottom: 3px solid #EDEDED;
}
form input{
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: none;
  background-color: #EDEDED;
  box-sizing: border-box;
  
}
form button{
  box-sizing: border-box;
  width: 100%;
  padding: 8px 0;
  background-color: black;
  color: white;
  text-align: center;
  border-radius: 10px;
  height: 40px;
}

label{
  font-size: 16;
  font-weight: 200;
  width: 100%;
 
}
`;

const StreamingForm = () => {
    const router = useRouter();
    const [selectedService, setSelectedService] = useState('');
    const [startDate, setStartDate] = useState('');
    const [cost, setCost] = useState('');
    const [renewalFrequency, setRenewalFrequency] = useState('monthly');


    const [user, setUser] = useState(null); 
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const { data: { user } } = await supabase.auth.getUser();
          setUser(user);
        } catch (error) {
          console.error('Error fetching user data:', error.message);
          router.push("/login");
        }
      };
      fetchUserData();
    }, []);
  
    console.log(user);
    const handleSubmit = async (e) => {
      e.preventDefault();

      const {error } = await supabase
        .from('Subscriptions')
        .insert({ subscription:selectedService, monthly_cost:cost, renew_date:startDate, user_uuid:user.id})
      
    };
  
    return (
        <Section>
      <form onSubmit={handleSubmit}>
        <label>
         Stremingtjänst
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
          >
            <option value="">Välj en tjänst</option>
            <option value="netflix">Netflix</option>
            <option value="disneyPlus">Disney+</option>
          </select>
        </label>
  
        <label>
         Datum
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
  
        <label>
         Kostnad
          <input
            type="text"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </label>
  
        <label>
         Förnyas
          <select
            value={renewalFrequency}
            onChange={(e) => setRenewalFrequency(e.target.value)}
          >
            <option value="monthly">Månadsvis</option>
            <option value="yearly">Årligen</option>
          </select>
        </label>
  
        <button type="submit">Lägg till en prenumation</button>
      </form>
      </Section>
    );
  };
  
  export default StreamingForm;