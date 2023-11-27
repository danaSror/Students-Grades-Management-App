import { useState, useEffect } from "react";
// import fs from 'fs/promises';
// import * as fs from 'fs';
// import path from 'path'

// async function fetchData () {
//     const fetchData = await fs.readFile('./api/data.json');
//     return fetchData;
//   }

function Table() {
  // const fs = require('fs');
  // const filePath = path.resolve('./api', 'data.json');

  const [dataForm, setDataForm] = useState({
    name: "",
    algoScore: Number,
    frontScore: Number,
    total: Number,
  });

  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/data.json");
      const data = await response.json();
      setDataTable(data);
    };
    fetchData();
  }, []);

  //   useEffect(() => {
  //     const writeToJSONFile = async () => {
  //       try {
  //         const response = await fetch("/api/writeData", {
  //           method: "POST",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //           body: JSON.stringify({ data: dataTable }),
  //         });

  //         const result = await response.json();
  //         console.log("Data written to JSON file:", result);
  //       } catch (error) {
  //         console.error("Error writing data to JSON file:", error);
  //       }
  //     };
  //     writeToJSONFile();
  //   }, []);
  const writeToJSONFile = async () => {
    try {
      const response = await fetch("/api/writeData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: dataTable }),
      });

      const result = await response.json();
      console.log("Data written to JSON file:", result);
    } catch (error) {
      console.error("Error writing data to JSON file:", error);
    }
  };

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const response = await fsp.readFile('.api/data.json');
  //       const data = await response.json();
  //       setDataTable(data);
  //       };
  //       fetchData();
  //   }, []);

  // const fetchData = async () => {
  //     const response = await fetch('/api/data')
  //     const data = await response.json();
  //     console.log(data);
  //   }
  // const fetchData = async () => {
  // const response = await fetch('/data.json');
  // const data = await response.json();
  // console.log(data);
  //   }

  return (
    <div>
      <form class="max-w-md mx-auto">
        <div class="grid md:grid-cols-3 md:gap-6">
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={dataForm.name}
              onChange={(e) =>
                setDataForm({ ...dataForm, name: e.target.value })
              }
            />
            <label
              for="floating_first_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Name
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={dataForm.algoScore}
              onChange={(e) =>
                setDataForm({
                  ...dataForm,
                  algoScore: parseInt(e.target.value),
                })
              }
            />
            <label
              for="floating_last_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Algo Score
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              value={dataForm.frontScore}
              onChange={(e) =>
                setDataForm({
                  ...dataForm,
                  frontScore: parseInt(e.target.value),
                })
              }
            />
            <label
              for="floating_last_name"
              class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Fronted Score
            </label>
          </div>
        </div>
        <div class="grid md:grid-cols-2 md:gap-6">
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm   px-1 py-0.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={(e) => {
              e.preventDefault();
              setDataForm({
                ...dataForm,
                total: dataForm.algoScore + dataForm.frontScore,
              });
                dataTable.push(dataForm);
                console.log(dataTable);
              writeToJSONFile();
              setDataForm({ ...dataForm, name: "" });
              setDataForm({ ...dataForm, algoScore: 0 });
              setDataForm({ ...dataForm, frontScore: 0 });
              setDataForm({ ...dataForm, total: 0 });
            }}
          >
            Submit
          </button>
          <button
            type="submit"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm   px-1 py-0.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            clear all
          </button>
        </div>
      </form>

      <div class="flex flex-col items-center">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block py-2 sm:px-4 lg:px-5">
            <div class="overflow-hidden">
              <table class=" text-left text-sm font-light">
                <thead class="border-b font-medium dark:border-neutral-500">
                  <tr>
                    <th scope="col" class="px-4 py-4">
                      Name
                    </th>
                    <th scope="col" class="px-4 py-4">
                      Algo Score
                    </th>
                    <th scope="col" class="px-4 py-4">
                      Front Score
                    </th>
                    <th scope="col" class="px-6 py-4">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataTable.map((item) => (
                    <tr
                      class="border-b transition duration-300 ease-in-out hover:bg-blue-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                      key={item.id}
                    >
                      <td class="whitespace-nowrap px-6 py-4">{item.name}</td>
                      <td class="whitespace-nowrap px-6 py-4">
                        {item.algoScore}
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">
                        {item.frontScore}
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">
                        {item.algoScore + item.frontScore}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
