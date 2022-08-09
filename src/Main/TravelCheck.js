import Amadeus from "amadeus";
import axios from "axios";

const amadeus = new Amadeus({
  clientId: "06FugX4zldyFcrieWkOxT1siu5kKLJY4",
  clientSecret: "9r0RzGdbq94Mvkrw",
});

const TravelCheck = async () => {
  await axios.post("https://test.api.amadeus.com/v1/security/oauth2/token");
  amadeus.dutyOfCare.diseases.covid19AreaReport
    .get({
      countryCode: "US",
    })
    .then((data) => {
      console.log(data.body);
    })
    .catch((error) => {
      console.error(error);
    });

  return <>Hello World</>;
};

export default TravelCheck;
