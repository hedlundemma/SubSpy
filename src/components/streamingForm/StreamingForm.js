import { useState } from 'react';

const StreamingForm = () => {
    const [selectedService, setSelectedService] = useState('');
    const [startDate, setStartDate] = useState('');
    const [cost, setCost] = useState('');
    const [renewalFrequency, setRenewalFrequency] = useState('monthly');
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Handle form submission here, you can send the data to your backend or perform any other action.
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