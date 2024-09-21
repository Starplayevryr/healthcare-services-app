import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App1.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ServiceList = () => {
  const [services, setServices] = useState([
    { id: 1, name: 'General Check-up', description: 'Assess your overall health', price: '$50' },
    { id: 2, name: 'Dental Cleaning', description: 'Maintain oral hygiene', price: '$75' },
  ]);

  const [newService, setNewService] = useState({ name: '', description: '', price: '' });
  const [editService, setEditService] = useState(null);

  const handleChange = (e) => {
    setNewService({ ...newService, [e.target.name]: e.target.value });
  };

  const addService = (e) => {
    e.preventDefault();
    if (newService.name && newService.description && newService.price) {
      setServices([...services, { id: services.length + 1, ...newService }]);
      setNewService({ name: '', description: '', price: '' });
    } else {
      alert("Please fill all the fields");
    }
  };

  const deleteService = (id) => {
    setServices(services.filter((service) => service.id !== id));
  };

  const handleEditChange = (e) => {
    setEditService({ ...editService, [e.target.name]: e.target.value });
  };

  const updateService = (id) => {
    setServices(
      services.map((service) => (service.id === id ? editService : service))
    );
    setEditService(null);
  };

  const renderForm = () => (
    <form onSubmit={addService} className="mt-4">
      <h4>Add New Service</h4>
      <div className="mb-3">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder='Enter your name'
          value={newService.name}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label>Description</label>
        <input
          type="text"
          name="description"
          placeholder="Give a short description"
          value={newService.description}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label>Price</label>
        <input
          type="text"
          name="price"
          
          placeholder='Enter price in dollars'
          value={newService.price}
          onChange={handleChange}
          className="form-control"
        />
      </div>
      <button type="submit" className="btn btn-primary">Add Service</button>
    </form>
  );

  const renderEditForm = (service) => (
    <div className="mt-4">
      <h4>Edit Service</h4>
      <div className="mb-3">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={editService.name}
          onChange={handleEditChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label>Description</label>
        <input
          type="text"
          name="description"
          value={editService.description}
          onChange={handleEditChange}
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label>Price</label>
        <input
          type="text"
          name="price"
          value={editService.price}
          onChange={handleEditChange}
          className="form-control"
        />
      </div>
      <button onClick={() => updateService(service.id)} className="btn btn-success">Update Service</button>
    </div>
  );

  return (
    <div className="service-list-background container mt-5">
      <h2>Healthcare Service List</h2>
      {editService ? null : renderForm()}

      <div className="row mt-4">
        {services.map((service) => (
          <div className="col-md-4 mb-4" key={service.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{service.name}</h5>
                <p className="card-text">{service.description}</p>
                <p className="card-text text-success"><strong>{service.price}</strong></p>
                <button onClick={() => setEditService(service)} className="btn btn-warning me-2">Edit</button>
                <button onClick={() => deleteService(service.id)} className="btn btn-danger">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {editService && renderEditForm(editService)}
      <Link to="/" className="btn btn-primary mt-4">Back to Home page</Link>
    </div>
  );
};

export default ServiceList;
