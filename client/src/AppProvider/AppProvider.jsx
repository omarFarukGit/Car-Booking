import { createContext, useContext, useEffect } from "react";
import axios from "axios"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL



// src/providers/AppProvider.tsx
import React, { useState } from 'react';
import { AppContext } from "../AppContext/AppContext"; // Import context from the new file

export const AppProvider = ({ children }) => {
  // const [user, setUser] = useState(null);
  const navigate = useNavigate()
  const currency = import.meta.env.VITE_CURRENCY

  const [token, setToken] = useState(null)
  const [user, setUser] = useState(null)
  const [isOwner, setIsOwner] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [pickupDate, setPickupDate] = useState("")
  const [returnDate, setReturnDate] = useState("")


  const [cars, setCars] = useState([])

    //runcontion to cheak 
    const fetchUser = async () => {
        try {
            const { data } = await axios.get('/api/user/data')
            if (data.success) {
                setUser(data.user)
                setIsOwner(data.user.role == 'owner')
            } else {
                navigate('/')
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    // fuction to tetch all cars from ther server

    const fetchCars = async () => {
        try {
            const { data } = await axios.get('/api/user/cars')
            data.success ? setCars(data.cars) : toast.error(data.message)
        } catch (error) {
            toast.error(error.message)
        }
    }


    // function to log out the use
    const logout=()=>{
        localStorage.removeItem('token')
        setToken(null)
        setUser(null)
        setIsOwner(false)
        axios.defaults.headers.common['Authorization']=''
        toast.success("You have been logout")

    }
    // userEffect to retrieve the token from localStorage
    useEffect(() => {
        const token = localStorage.getItem('token')
        setToken(token)
        fetchCars()
    }, [])

    // userEffect to fetch user data when token is available
    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['Authorization'] = `${token}`
            fetchUser()

        }
    }, [token])



      const value = {
        navigate,
        currency,
       axios,user,setUser,token,setToken,isOwner,setIsOwner,fetchUser,showLogin,setShowLogin,logout,fetchCars,cars,setCars,pickupDate,setPickupDate,returnDate,setReturnDate
    }

  // Return the context provider, wrapping your children
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
