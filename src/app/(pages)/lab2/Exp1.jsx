'use client'

import TableRow1 from "@/app/components/Table/TableRow1";
import Title from "@/app/components/Title/Title";
import { calcExp1, convertStringToNum, processInputToArray } from "@/app/helpers/helpers";
import { useState } from "react";


export default function Exp1({ avgRes, setAvgRes }){
  
  const handleClick = () => {
    const { t , table } = processInputToArray('.exp1-table');

    const tableRow = table.rows.length; 
    const times = t[0].length;
    let totalRes = 0;

    const finalCells = table.rows.item(tableRow-1).cells;
    for (let j = 1; j < times + 1; j++){
      let finalCellVal = finalCells.item(j);
      let finalCellInput = finalCellVal.children.result;
      const result = calcExp1(t, j);
      finalCellInput.value = result;
      totalRes += parseFloat(result);
    }

    setAvgRes(parseFloat((totalRes / times).toFixed(3)));
  }

  return(
    <>
      <div className="py-[40px] border-b">
        <Title title={'Thí Nghiệm 1'}/>

        <table className="exp1-table table-auto border bg-white border-gray-300 w-full">
          <thead>
            <tr>
              <th className="border border-gray-300 p-[20px]">Nhiệt độ</th>
              <th className="border border-gray-300 p-[20px]">Lần 1</th>
              <th className="border border-gray-300 p-[20px]">Lần 2</th>
              <th className="border border-gray-300 p-[20px]">Lần 3</th>
            </tr>
          </thead>
          
          <tbody>
            <tr>
              <td className="border boder-gray-300 p-[20px] text-center font-bold">t<sub>1</sub></td>
              <td className="border boder-gray-300 p-[20px]">
                <input className="w-full" type="number" name="value"/>
              </td>
              <td className="border boder-gray-300 p-[20px]">
                <input className="w-full" type="number" name="value"/>
              </td>
              <td className="border boder-gray-300 p-[20px]">
                <input className="w-full" type="number" name="value"/>
              </td>
            </tr>
            <tr>
              <td className="border boder-gray-300 p-[20px] text-center font-bold">t<sub>2</sub></td>
              <td className="border boder-gray-300 p-[20px]">
                <input className="w-full" type="number" name="value"/>
              </td>
              <td className="border boder-gray-300 p-[20px]">
                <input className="w-full" type="number" name="value"/>
              </td>
              <td className="border boder-gray-300 p-[20px]">
                <input className="w-full" type="number" name="value"/>
              </td>
            </tr>
            <tr>
              <td className="border boder-gray-300 p-[20px] text-center font-bold">t<sub>3</sub></td>
              <td className="border boder-gray-300 p-[20px]">
                <input className="w-full" type="number" name="value"/>
              </td>
              <td className="border boder-gray-300 p-[20px]">
                <input className="w-full" type="number" name="value"/>
              </td>
              <td className="border boder-gray-300 p-[20px]">
                <input className="w-full" type="number" name="value"/>
              </td>
            </tr>
            <tr>
              <td className="border boder-gray-300 p-[20px] text-center font-bold">m<sub>0</sub>c<sub>0</sub></td>
              <td className="border boder-gray-300 p-[20px]">
                <input className="w-full" type="number" name="result"/>
              </td>
              <td className="border boder-gray-300 p-[20px]">
                <input className="w-full" type="number" name="result"/>
              </td>
              <td className="border boder-gray-300 p-[20px]">
                <input className="w-full" type="number" name="result"/>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="my-[15px] avg-res">
          m<sub>0</sub>C<sub>0</sub> = {avgRes} cal/độ
        </div>

        <button onClick={handleClick} className="p-[20px] text-[18px] bg-orange-500 font-bold w-full">Tính</button>
      </div>
    </>
  )
}