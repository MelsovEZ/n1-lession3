'use client';
import {Context, createContext} from "react";

const MyContext: Context<string> = createContext('World');
export default MyContext;