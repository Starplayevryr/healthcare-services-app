import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css';
import doctorImage from './images/doctor.jpg';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const cardVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <div className="home-background" style={{ backgroundImage: `url(${doctorImage})`, backgroundColor: '#f8f9fa' }}>
      <motion.div
        className="container text-center mt-5"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div
          className="card"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <div className="card-body">
            <h1 className="card-title">Welcome to Healthcare Services</h1>
            <p className="card-text">Manage healthcare services effectively</p>
            <Link to="/services" className="btn btn-primary">View Services</Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
