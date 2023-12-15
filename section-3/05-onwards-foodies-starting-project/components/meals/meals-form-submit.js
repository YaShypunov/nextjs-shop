'use client'
import React from 'react';
import {useFormStatus} from 'react-dom';


const MealsFormSubmit = () => {
  const {pending} = useFormStatus();
  return (
    <button type="submit">{pending ? "Submitting..." : "Share Meal" }</button>
  );
};

export default MealsFormSubmit;
