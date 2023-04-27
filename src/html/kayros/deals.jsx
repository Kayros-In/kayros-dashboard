import React, { useState, useEffect } from 'react';

const DealsTable = () => {
  const [deals, setDeals] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.clientify.net/v1/deals/', {
          headers: {
            'Authorization': `Token fc76f0ebd7e92f48a8ee8bab2b08e48cfe105d42`,
            'Content-Type': 'application/json'
          },
        });
        const data = await response.json();
        setDeals(data.results);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Owner</th>
          <th>Status</th>
          <th>Amount</th>
          <th>Contact</th>
          <th>Created</th>
        </tr>
      </thead>
      <tbody>
        {deals.map((deal) => (
          <tr key={deal.id}>
            <td>{deal.owner}</td>
            <td>
              <div className="btn-group">
                <button
                  type="button"
                  className="btn btn-primary dropdown-toggle"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {deal.status_desc}
                </button>
                <div className="dropdown-menu">
                  {/* Aquí puedes agregar las opciones del dropdown si es necesario */}
                </div>
              </div>
            </td>
            <td>{deal.amount}</td>
            <td>{deal.contact}</td>
            <td>{new Date(deal.created).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DealsTable;
