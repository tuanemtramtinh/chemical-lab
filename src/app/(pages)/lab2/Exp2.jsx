'use client';

import Title from "@/app/components/Title/Title";
import { calcExp2, processInputToArray } from "@/app/helpers/helpers";

export default function Exp2({ avgRes }){
  const handleClick = () => {
    const { t, table } = processInputToArray('.exp2-table', 3);
    
    const times = t[0].length;
    const molNacl = 0.5 * 0.05;
    let totalRes = 0;
    let avgResExp2 = 0;

    const Q = document.querySelector('.Q');
    for (let j = 1; j < times + 1; j++){
      const input = Q.children[j].children.result;
      const res = calcExp2(t, j, avgRes)
      input.value = res;
      totalRes += parseFloat(res);
    }
    avgResExp2 = totalRes / times;
    const avgQ = document.querySelector('.Qtb').children[1].children.result;
    avgQ.value = avgResExp2.toFixed(3);
    const deltaH = document.querySelector('.deltaH').children[1].children.result;
    deltaH.value = (avgResExp2/molNacl).toFixed(3);

  }

  const handleChange = (e) => {
    const selectValue = e.target.value;
    const deltaH = document.querySelector('.deltaH').children[1].children.result;
    if (selectValue === '1'){
      const temp = parseFloat(deltaH.value);
      deltaH.value = temp * -1;
    }
    else{
      const temp = parseFloat(deltaH.value);
      deltaH.value = temp * -1;
    }
  }

  return(
    <>
      <div className="py-[40px] border-b">
        <Title
          title={'Thí Nghiệm 2'}
        />
        <select onChange={handleChange} className="mb-[20px]" name="check-2" id="check-2">
          <option value="0">Thu Nhiệt</option>
          <option value="1">Toả Nhiệt</option>
        </select>
        <table className="exp2-table table-auto border bg-white border-gray-300 w-full">
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
            <tr className="Q">
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
            <tr className="Qtb">
              <td className="border boder-gray-300 p-[20px] text-center font-bold">Q<sub>tb</sub> (cal)</td>
              <td colSpan={3} className="border boder-gray-300 p-[20px]">
                <input className="w-full" type="number" name="result"/>
              </td>
            </tr>
            <tr className="deltaH">
              <td className="border boder-gray-300 p-[20px] text-center font-bold">delta H (cal/mol)</td>
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