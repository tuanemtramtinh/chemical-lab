'use client';

import Title from "@/app/components/Title/Title";
import { calcExp3, processInputToArray } from "@/app/helpers/helpers";

export default function Exp3({ avgRes }){
  const handleClick = () => {
    const { t, table } = processInputToArray('.exp3-table', 3, 2);
    const mCuSO4 = parseFloat(document.querySelector('#mCUSO4').value);
    const times = t[0].length;
    let totalRes = 0;
    let avgResExp3 = 0;
    const Q = document.querySelector('.Q3');
    const deltaH = document.querySelector('.H3');
    for (let j = 1; j < times + 1; j++){
      const inputQ = Q.children[j].children.result;
      const inputH = deltaH.children[j].children.result;
      const res = calcExp3(t, j, avgRes, mCuSO4);
      console.log(inputQ.value);
      inputQ.value = res.resQ.toFixed(2);
      inputH.value = res.deltaH.toFixed(2);
      totalRes += parseFloat(res.deltaH.toFixed(2));
    }
    const deltaHtb = document.querySelector('.Htb3')
    const avgHtb = totalRes / times;
    const deltaHtbInput = deltaHtb.children[1].children.result;
    deltaHtbInput.value = avgHtb.toFixed(3);
  }

  const handleChange = (e) => {
    const selectValue = e.target.value;
    const deltaH = document.querySelector('.H3');
    const deltaHtb = document.querySelector('.Htb3')
    if (selectValue === '1'){
      
      // console.log(deltaH);
      for (let i = 1; i < deltaH.children.length; i++){
        if (deltaH.children[i].children.result.value !== ''){
          const temp = parseFloat(deltaH.children[i].children.result.value);
          deltaH.children[i].children.result.value = temp * -1;
        }
      }
      const temp = parseFloat(deltaHtb.children[1].children.result.value);
      deltaHtb.children[1].children.result.value = temp * -1;
    }
    else{
      for (let i = 1; i < deltaH.children.length; i++){
        if (deltaH.children[i].children.result.value !== ''){
          const temp = parseFloat(deltaH.children[i].children.result.value);
          deltaH.children[i].children.result.value = temp * -1;
        }
      }
      const temp = parseFloat(deltaHtb.children[1].children.result.value);
      deltaHtb.children[1].children.result.value = temp * -1;
    }
  }

  return (
    <>
      <div className="py-[40px] border-b">
        <Title
          title={'Thí Nghiệm 3'}
        />
        <select onChange={handleChange} className="mb-[20px]" name="check-2" id="check-2">
          <option value="0">Thu Nhiệt</option>
          <option value="1">Toả Nhiệt</option>
        </select>
        <div className="mb-[20px]">
          <label htmlFor="mCuSO4">m<sub>CuSO<sub>4</sub></sub>=</label>
          <input type="number" name="weight" id="mCUSO4" />
          g
        </div>
        <table className="exp3-table table-auto border bg-white border-gray-300 w-full">
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
            <tr className="Q3">
              <td className="border boder-gray-300 p-[20px] text-center font-bold">Q (cal)</td>
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
            <tr className="H3">
              <td className="border boder-gray-300 p-[20px] text-center font-bold">delta H (cal/mol)</td>
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
            <tr className="Htb3">
              <td className="border boder-gray-300 p-[20px] text-center font-bold">delta H<sub>tb</sub> (cal/mol)</td>
              <td colSpan={3} className="border boder-gray-300 p-[20px]">
                <input className="w-full" type="number" name="result"/>
              </td>
            </tr>
          </tbody>
        </table>

        <button onClick={handleClick} className="p-[20px] text-[18px] bg-orange-500 font-bold w-full">Tính</button>
      </div>
    </>
  )
}