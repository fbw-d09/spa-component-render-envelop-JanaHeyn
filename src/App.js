import { Envelope } from "./Components/Envelope/Envelope";

export default function App() {

  const personData = 
  [
    {
      name: "Pippi Lotta",
      address: "Kunterbuntestraße 555",
      city: "12345 Kunterbunt"
    },
    {
      name: "Susi Sonne",
      address: "Sternstraße 7",
      city: "56789 Stern"
    },
  ]

  return (
    <div>
      <Envelope fromPerson={personData[0]} toPerson={personData[1]}/>
    </div>
  );
}
