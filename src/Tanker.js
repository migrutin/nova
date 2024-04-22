import React, { useState, useEffect } from 'react';
import Header from "./Header";

const Tanker = ({ tankerNumber, initialName }) => {

    const [tankerName, setTankerName] = useState(
        localStorage.getItem(`tankerName${tankerNumber}`) || initialName
    );
    const [input, setInput] = useState(Array.from({ length: 15 }).map(() => 0)); //inicijalizujem input i output 
    const [output, setOutput] = useState(Array.from({ length: 15 }).map(() => 0));

    const handleNameChange = () => {
        const newName = prompt('Unesite novo ime tankera:', tankerName);
        if (newName !== null) {
            setTankerName(newName);
            localStorage.setItem(`tankerName${tankerNumber}`, newName);
        }
    };

    const updateSum = () => {
        const sumInputs = input.reduce((acc, curr) => acc + parseFloat(curr), 0);
        const sumOutputs = output.reduce((acc, curr) => acc + parseFloat(curr), 0);
        return sumInputs - sumOutputs;
    };

    useEffect(() => {
        const sumElement = document.getElementById('ukupno');
        sumElement.textContent = updateSum();
    }, [input, output]);

    useEffect(() => {
        localStorage.setItem(`tankerName${tankerNumber}`, tankerName);
    }, [tankerNumber, tankerName]);
    return (
        <div>
            <Header />
            <div className='background'>
                <div className='flex space-x-4'>
                    <div className='one-card'>
                        <h2 className='tanker-name' onClick={handleNameChange}>{tankerName}</h2>
                        <div className='table-container scrollbar'>
                            <table>
                                <thead className='table-head tr'>
                                    <tr className='tr'>
                                        <th className='tr'>Ulaz</th>
                                        <th className='tr'>Datum</th>
                                        <th className='tr'>Izlaz</th>
                                        <th className='tr'>Datum </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.from({ length: 15 }).map((_, index) => (
                                        <tr className='tr' key={index}>
                                            <td className='tr'>
                                                <input type="number" onChange={(e) => {
                                                    const newInput = [...input];
                                                    newInput[index] = e.target.value;
                                                    setInput(newInput);
                                                }} />
                                            </td>
                                            <td className='tr' style={{ textAlign: 'center' }}>
                                                <input type="text" placeholder='Datum' />
                                                <br />
                                                <input type="text" placeholder='Opis' />
                                            </td>
                                            <td className='tr'>
                                                <input type="number" onChange={(e) => {
                                                    const newOutput = [...output];
                                                    newOutput[index] = e.target.value;
                                                    setOutput(newOutput);
                                                }} />
                                            </td>
                                            <td className='tr' style={{ textAlign: 'center' }}>
                                                <input type="text" placeholder='Datum' />
                                                <br />
                                                <input type="text" placeholder='Opis' />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>

                    <div className='one-card'>
                        <div className='row'>
                            <div className='sum'>UKUPNO (L):<span id="ukupno">0</span></div>
                            <div className='absolute top-40 right-4 h-16 w-16'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                            </svg></div>

                        </div>
                        <div>TANKER PICTURE</div>


                    </div>
                </div>

            </div>

        </div>
    )
}
export default Tanker;
