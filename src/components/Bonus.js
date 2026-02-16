
function Bonus({ bonus, increment}) {

  return (
    <div className="card">
      <div className="container">
        <h4>
          <b>Bonus Component</b>
        </h4>
        <h3>Total Point : ${bonus.points}</h3>

        <button onClick={increment}>Increment +</button>
      </div>
    </div>
  );
}

export default Bonus;
