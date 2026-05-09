

// src/context/AppContext.ts
import { createContext, useContext } from 'react';

// Create your context here
export const AppContext = createContext(null);

// Create and export your custom hook from this file
export const useAppContext = () => useContext(AppContext);
