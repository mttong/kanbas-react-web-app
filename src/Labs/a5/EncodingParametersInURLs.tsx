import React, { useEffect, useState } from "react";
import axios from "axios";
function EncodingParametersInURLs() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(23);

  
  const [result, setResult] = useState(0);
  const fetchSum = async (a : Number, b : Number) => {
    const response = await
      axios.get(`http://localhost:4000/a5/add/${a}/${b}`);
    setResult(response.data);
  };
  const fetchSubtraction = async (a : Number, b : Number) => {
    const response = await axios.get(
      `http://localhost:4000/a5/subtract/${a}/${b}`);
    setResult(response.data);
  };

  const [welcome, setWelcome] = useState("");
  const fetchWelcome = async () => {
    const response = await axios.get("http://localhost:4000/a5/welcome");
    setWelcome(response.data);
  };
  useEffect(() => {
    fetchWelcome();
  }, []);

  return (
    <div>
      <h2>Encoding Parameters In URLs</h2>

      <h4>Integrating React with APIs</h4>
      <h5>Fetching Welcome</h5>
      <h6>{welcome}</h6>


      <h4>Calculator</h4>
      <input type="number" value={a}
        onChange={(e) => setA(Number(e.target.value))}/>
        <br></br>
      <input type="number"
        onChange={(e) => setB(Number(e.target.value))} value={b}/>
        <br></br>
      <input value={result} type="number" readOnly />
      <h3>Fetch Result</h3>
      <button onClick={() => fetchSum(a, b)} >
        Fetch Sum of {a} + {b}
      </button>
      <button onClick={() => fetchSubtraction(a, b)} >
        Fetch Substraction of {a} - {b}
      </button>

      <h3>Path Parameters</h3>
      <a className="btn btn-light"
      href={`http://localhost:4000/a5/add/${a}/${b}`}>
        Add {a} + {b}
      </a>
      <a className="btn btn-light"
      href={`http://localhost:4000/a5/subtract/${a}/${b}`}>
        Substract {a} - {b}
      </a>

      <h3>Query Parameters</h3>
<a className="btn btn-primary"
  href={`http://localhost:4000/a5/calculator?operation=add&a=${a}&b=${b}`}>
  Add {a} + {b}
</a>
<a className="btn btn-danger"
  href={`http://localhost:4000/a5/calculator?operation=subtract&a=${a}&b=${b}`}>
  Substract {a} - {b}
</a>

<a className="btn btn-primary"
  href={`http://localhost:4000/a5/calculator?operation=multiply&a=${a}&b=${b}`}>
  Multiply {a} * {b}
</a>
<a className="btn btn-danger"
  href={`http://localhost:4000/a5/calculator?operation=divide&a=${a}&b=${b}`}>
  Divide {a} / {b}
</a>

    </div>
  );
}
export default EncodingParametersInURLs;