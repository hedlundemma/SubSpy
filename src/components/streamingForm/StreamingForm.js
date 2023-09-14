import { useState, useEffect } from "react";
import { supabase } from "../../../supabase";
import { useRouter } from "next/navigation";
import styled from "styled-components";
import { Days_One } from "next/font/google";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  color: black;
  height: 100vh;
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-bottom: 24px;
    border-bottom: 3px solid #ededed;
  }
  form input {
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: none;
    background-color: #ededed;
    box-sizing: border-box;
  }
  form button {
    box-sizing: border-box;
    width: 100%;
    padding: 8px 0;
    background-color: black;
    color: white;
    text-align: center;
    border-radius: 10px;
    height: 40px;
  }

  label {
    font-size: 16;
    font-weight: 200;
    width: 100%;
  }
`;

const StreamingForm = () => {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState("");
  const [startDate, setStartDate] = useState("");
  const [cost, setCost] = useState("");
  const [renewalFrequency, setRenewalFrequency] = useState("monthly");
  const [remainingDays, setRemainingDays] = useState(null);
  const [renewalDate, setRenewalDate] = useState(null);

  //array containing the options for streaming-services
  const streamingServiceOptions = [
    { value: "", label: "Välj en tjänst" },
    { value: "netflix", label: "Netflix" },
    { value: "disneyPlus", label: "Disney+" },
  ];
  // array containing the options for renewal-frequenxy
  const renewalFrequencyOptions = [
    { value: "monthly", label: "Månadsvis" },
    { value: "yearly", label: "Årligen" },
  ];

  //calculate when the subscriptions renews and show how many days until that happens
  const calculateRenewalDate = () => {
    if (startDate && renewalFrequency) {
      const currentDate = new Date();
      const renewalDate = new Date(startDate);

      if (renewalFrequency === "monthly") {
        renewalDate.setMonth(renewalDate.getMonth() + 1);
      } else if (renewalFrequency === "yearly") {
        renewalDate.setFullYear(renewalDate.getFullYear() + 1);
      }

      const timeDifference = renewalDate - currentDate;
      const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

      setRenewalDate(renewalDate);
      setRemainingDays(daysRemaining);
    }
  };

  //making sure the user is logged in, otherwise redirect to login-page
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        setUser(user);
        calculateRenewalDate();
      } catch (error) {
        console.error("Error fetching user data:", error.message);
        router.push("/login");
      }
    };

    fetchUserData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase.from("Subscriptions").insert({
      subscription: selectedService,
      monthly_cost: cost,
      renew_date: startDate,
      user_uuid: user.id,
    });
  };

  console.log(user);
  console.log("startDate:", startDate);
  console.log("renewalFrequency:", renewalFrequency);
  console.log(selectedService);

  return (
    <Section>
      <form onSubmit={handleSubmit}>
        <label>
          Stremingtjänst
          <select
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
          >
            {/* displaying the values from the array */}
            {streamingServiceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label>
          Datum
          <input
            type="date"
            value={startDate}
            onChange={(e) => {
              setStartDate(e.target.value);
            }}
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
            {/* displaying the values from the array */}
            {renewalFrequencyOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <a href="/overview">
          <button type="submit">Lägg till en prenumation</button>
        </a>
      </form>
    </Section>
  );
};

export default StreamingForm;
