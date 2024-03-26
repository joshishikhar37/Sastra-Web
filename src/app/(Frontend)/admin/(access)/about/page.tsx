"use client";
import React, { useEffect, useState } from 'react';

const AdminAboutPage = () => {
  // Step 2: Declare a state variable to hold the table data
  const [tableData, setTableData] = useState([
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Jane', age: 25 },
    { id: 3, name: 'Doe', age: 40 },
  ]);

  // Function to update table data
  const updateTableData = (id: number, field: string, value: string | number) => {
    // Find the index of the row with the matching id
    const rowIndex = tableData.findIndex(row => row.id === id);
    // Create a copy of the table data array
    const updatedData = [...tableData];
    // Update the specified field of the row with the new value
    updatedData[rowIndex] = { ...updatedData[rowIndex], [field]: value };
    // Update the state variable with the modified data
    setTableData(updatedData);
  };
  const insertRow = () => {
    const newId = tableData.length + 1;
    const newRow = { id: newId, name: 'New Name', age: 25 };
    setTableData([...tableData, newRow]);
  };
  // Update localStorage whenever tableData changes
  useEffect(() => {
    localStorage.setItem('tableData', JSON.stringify(tableData));
  }, [tableData]);

  return (
    <div className="container mx-auto ">
      <table className="min-w-full divide-y  divide-gray-200">
        <thead className="bg-gray-50">
          <tr >
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">ID</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">Name</th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-black-500 uppercase tracking-wider">details</th >
          </tr>
        </thead>
        <tbody className="">
          {/* Render table rows from state */}
          {tableData.map((row) => (
            <tr key={row.id} className="hover:bg-gray-100 px-6 py-4">
              <td>{row.id}</td>
              {/* Allow editing name */}
              <td className="px-6 py-4 whitespace-nowrap">
                <input
                  type="text"
                  value={row.name}
                  onChange={(e) => updateTableData(row.id, 'name', e.target.value)}
                />
              </td>
              {/* Allow editing age */}
              <td className="px-6 py-4 whitespace-nowrap">
                <input
                  type="text"
                  value={row.age}
                  onChange={(e) => updateTableData(row.id, 'age', e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className='h-10 w-60 bg-sky-600 font-mono text-l rounded-xl text-white
      '
       onClick={insertRow}>Insert Row</button>
    </div>
  );
};

export default AdminAboutPage;
