import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';


function Paintings() {
    const [paintings, setPaintings] = useState([]);

    useEffect(() => {
        fetchPaintings();
    }, []);

    const fetchPaintings = async () => {
        const { data, error } = await supabase
            .from('paintings')
            .select('*');

        if (error) console.log('error', error);
        else setPaintings(data);
    };

return (
  <div className="container">
      <h1 className="mt-5">Famous Gallery Listings</h1>
      <div className="row">
          {paintings.map(painting => (
              <div key={painting.id} className="col-md-4 mb-4 d-flex">
                  <div className="card card-custom w-100">
                      <img src={painting.image_url} className="card-img-top card-img-custom" alt={painting.artist_name} />
                      <div className="card-body card-body-custom">
                          <h5 className="card-title">{painting.artist_name}</h5>
                          <p className="card-text">${painting.price.toLocaleString()}</p>
                          <p className="card-text"><small className="text-muted">Year: {painting.year_painted}</small></p>
                      </div>
                  </div>
              </div>
          ))}
      </div>
  </div>
);

}

export default Paintings;

