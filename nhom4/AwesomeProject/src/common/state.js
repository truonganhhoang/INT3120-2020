import React, { useState,useEffect } from 'react';
import{
  Text,View
} from 'react-native';

export function setStateArray (key, value, id) {
    const nextState = state.map(a => a.id === id ? { ...a, [key]: value } : a);
    setState(nextState);
   };