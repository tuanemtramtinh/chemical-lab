'use client';

import { useState } from "react";
import Exp1 from "./Exp1";
import Exp2 from "./Exp2";
import Exp3 from "./Exp3";
import Exp4 from "./Exp4";

export default function Lab2Page(){
  //Nhiệt dung
  const [avgRes, setAvgRes] = useState(0); 
  return(
    <>
      <div>
        <Exp1
          avgRes={avgRes}
          setAvgRes={setAvgRes}
        />
        <Exp2
          avgRes={avgRes}
        />
        <Exp3
          avgRes={avgRes}
        />
        <Exp4
          avgRes={avgRes}
        />
      </div>
    </>
  )
}