'use client';
import { createContext, Context } from "react";

const MyContext: Context<string> = createContext('Yernur');
export default MyContext;