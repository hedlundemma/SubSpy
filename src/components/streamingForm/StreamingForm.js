import { useState } from 'react';
import { supabase } from '../../../supabase';

const StreamingForm = () => {
    const [selectedService, setSelectedService] = useState('');
    const [startDate, setStartDate] = useState('');
    const [cost, setCost] = useState('');
    const [renewalFrequency, setRenewalFrequency] = useState('monthly');
  
    const handleSubmit = async (e) => {
      e.preventDefault();

      const {error } = await supabase
        .from('Subscriptions')
        .insert({ subscription:selectedService, monthly_cost:cost, renew_date:startDate, user_uuid:1})
      
    };
  
    return (
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
  
        <button type="submit">Submit</button>
      </form>
    );
  };
  
  export default StreamingForm;