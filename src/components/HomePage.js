import React, { useState } from 'react';
import foodBackground from '../images/berry-background.jpg';
import Result from './Result';
import Chart from './Chart';
const axios = require('axios');
const APP_ID = '7b632c32';
const APP_KEY = '005154710d7c48250feb6e1dbd9bd7d6';

function HomePage() {
  const [bSearch1, setBreakfastSearch1] = useState('');
  const [bSearch2, setBreakfastSearch2] = useState('');
  const [lSearch1, setLunchSearch1] = useState('');
  const [lSearch2, setLunchSearch2] = useState('');
  const [dSearch1, setDinnerSearch1] = useState('');
  const [dSearch2, setDinnerSearch2] = useState('');
  // const [validate, setValidate] = useState({
  //   breakfast1: false,
  //   breakfast2: false,
  //   lunch1: false,
  //   lunch2: false,
  //   dinner1: false,
  //   dinner2: false
  // });

  const breakfast1 = `https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${bSearch1}`;
  const breakfast2 = `https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${bSearch2}`;
  const lunch1 = `https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${lSearch1}`;
  const lunch2 = `https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${lSearch2}`;
  const dinner1 = `https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${dSearch1}`;
  const dinner2 = `https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${dSearch2}`;

  // const break1 = axios.get(breakfast1);
  // const break2 = axios.get(breakfast2);
  // const lun1 = axios.get(lunch1);
  // const lun2 = axios.get(lunch2);
  // const din1 = axios.get(dinner1);
  // const din2 = axios.get(dinner2);

  const foodData = async () => {
    const break1 = await axios.get(breakfast1);
    const break2 = await axios.get(breakfast2);
    const lun1 = await axios.get(lunch1);
    const lun2 = await axios.get(lunch2);
    const din1 = await axios.get(dinner1);
    const din2 = await axios.get(dinner2);
    console.log(break1.data.calories, break2, lun1, lun2, din1, din2);
    const day = break1.data.calories + break2.data.calories + lun1.data.calories + lun2.data.calories
  
    // axios.all([break1, break2, lun1, lun2, din1, din2]).then(
    //   axios.spread((...responses) => {
    //     const resOne = responses[0];
    //     const resTwo = responses[1];
    //     const resThree = responses[2];
    //     const resFour = responses[3];
    //     const resFive = responses[4];
    //     const resSix = responses[5];
    //     console.log(resOne, resTwo, resThree, resFour, resFive, resSix)
    //   })
    // ).catch(err => {
    //   console.log(err)
    // })
  };

  const onSubmit = (event) => {
    event.preventDefault();
    foodData();
  };

  return (
    <div
      style={{
        backgroundImage: `url(${foodBackground})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '80rem',
      }}
    >
      <section className="w-full flex justify-center items-center">
        <div className="m-10">
          <form>
            <div className="px-4">
              <button
                className="bg-offwhite hover:bg-turquoise text-darkgray text-2xl font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={onSubmit}
                disabled={bSearch1.length < 4 || bSearch2.length < 4 || lSearch1.length < 4 || lSearch2.length < 4 || dSearch1.length < 4 || dSearch2.length < 4}
              >
                Log Food <i className="fas fa-plus-circle"></i>
              </button>
            </div>
            <h3 className="mt-2 bg-tangerine text-2xl">
              Placeholder Day Entry
            </h3>
            <div className="rounded border">
              <h2 className="bg-turquoise p-2">Breakfast</h2>
              <ul className="bg-gray p-3">
                <li>
                  <textarea
                    onChange={(event) =>
                      setBreakfastSearch1(event.target.value)
                    }
                    value={bSearch1}
                    cols="70"
                    rows="1"
                    className="border p-3 bg-offwhite"
                    placeholder="Eggs"
                  ></textarea>
                </li>
                <li>
                  <textarea
                    onChange={(event) =>
                      setBreakfastSearch2(event.target.value)
                    }
                    value={bSearch2}
                    cols="70"
                    rows="1"
                    className="border p-3 bg-offwhite"
                    placeholder="Toast"
                  ></textarea>
                </li>
              </ul>
              <h2 className="bg-turquoise p-2">Lunch</h2>
              <ul className="bg-gray p-3">
                <li>
                  <textarea
                    onChange={(event) => setLunchSearch1(event.target.value)}
                    value={lSearch1}
                    cols="70"
                    rows="1"
                    className="border p-3 bg-offwhite"
                    placeholder="1 Sandwich"
                  ></textarea>
                </li>
                <li>
                  <textarea
                    onChange={(event) => setLunchSearch2(event.target.value)}
                    value={lSearch2}
                    cols="70"
                    rows="1"
                    className="border p-3 bg-offwhite"
                    placeholder="Chips"
                  ></textarea>
                </li>
              </ul>
              <h2 className="bg-turquoise p-2">Dinner</h2>
              <ul className="bg-gray p-3">
                <li>
                  <textarea
                    onChange={(event) => setDinnerSearch1(event.target.value)}
                    value={dSearch1}
                    cols="70"
                    rows="1"
                    className="border p-3 bg-offwhite"
                    placeholder="Salmon"
                  ></textarea>
                </li>
                <li>
                  <textarea
                    onChange={(event) => setDinnerSearch2(event.target.value)}
                    value={dSearch2}
                    cols="70"
                    rows="1"
                    className="border p-3 bg-offwhite"
                    placeholder="Rice"
                  ></textarea>
                </li>
              </ul>
            </div>
            <Result />
            <div className="m-2">
              <h3 className="mt-2 bg-tangerine text-2xl">
                Calorie Consumption
              </h3>
              <div className="bg-tangerine">
                <Chart />
              </div>

            </div>
          </form>
        </div>
      </section>
      {/* <Result results ={this.state.res}/> */}
    </div>
  );
}

export default HomePage;
