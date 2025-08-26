import { useState, useEffect } from 'react';
import './Home.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import xImage from '../assets/close.png';
import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { MongoClient } from 'mongodb';

const mongoClient = new MongoClient(MONGODB_URI);

const loginPrompt = async (email, password) => {
  try {
    // Authenticate user with Firebase Authentication
    const user = await firebase.auth().signInWithEmailAndPassword(email, password);

    // Get user data from Firebase Authentication
    const userData = user.user;

    // Connect to MongoDB database
    await mongoClient.connect();

    // Get users collection
    const usersCollection = mongoClient.collection('users');

    // Find user data in MongoDB database
    const existingUser = await usersCollection.findOne({ email: userData.email });

    // If user data exists, update it
    if (existingUser) {
      await usersCollection.updateOne({ email: userData.email }, { $set: { name: userData.displayName } });
    } else {
      // If user data does not exist, create it
      await usersCollection.insertOne({ email: userData.email, name: userData.displayName });
    }

    // Return user data
    return userData;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default function Home({ onClose}) {
    return (
        <div className="promptLogin">
            <figure className="closeImag">
                <button onClick={onClose} className="close-icon">
                <img src={xImage} alt="Close" className="close-icon" />
                </button>
            </figure>
            <h2>Please log in or sign up to continue.</h2>
            <button className="login-btn">Log In</button>
            <button className="signup-btn">Sign Up</button>
        </div>
    );
}
