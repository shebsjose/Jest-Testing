import { useState, useEffect } from "react";
import { getNameFormApi } from "./api";

const ApiCall = () => {
  const [apiData, setApiData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    getNameFormApi()
      .then((data) => setApiData(data.results))
      .catch((e) => setError(true));
  }, []);

  return error ? (
    <p> Unable to fetach data</p>
  ) : (
    <table>
      <tbody>
        {apiData &&
          apiData.map((api, index) => {
            return (
              <tr key={index}>
                <td>{api.name}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default ApiCall;
