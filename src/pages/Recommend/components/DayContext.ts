import React from 'react'
const DayContext = React.createContext<number>(new Date().getDate());
export {DayContext}