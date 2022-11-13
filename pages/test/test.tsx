import React, { createContext, useState, useContext, useEffect } from "react";

type ITestProviderValues = {
  count: number;
  increment(): void;
  decrement(): void;
  setCount(arg: number): void;
  promiseReturningFn(): IPromiseFn;
};

type IPromiseFn = void;
type IPromiseReturnType = {
  name: string;
};

const testContext = createContext<ITestProviderValues>({
  count: 0,
  increment(): void {},
  decrement(): void {},
  setCount(arg: number): void {},
  promiseReturningFn(): IPromiseFn {},
});

const Test = () => {
  const [count, setCount] = useState(0);
  function increment(): void {
    setCount((prev) => prev + 1);
  }
  function decrement(): void {
    setCount((prev) => prev - 1);
  }
  function promiseReturningFn(): Promise<IPromiseReturnType> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: "atul",
        });
      }, 5000);
    });
  }

  return (
    <testContext.Provider
      value={{
        count,
        increment,
        decrement,
        setCount,
        promiseReturningFn,
      }}
    >
      <ChildComp />
    </testContext.Provider>
  );
};

const ChildComp = () => {
  const { count, increment, decrement, promiseReturningFn } =
    useContext(testContext);

  useEffect(() => {
    const fn = async () => {
      await promiseReturningFn();
      console.log("passed");
    };
    fn();
  }, [promiseReturningFn]);
  return (
    <>
      <div className="w-100">
        <div className="mb-2">
          Child component -{" "}
          <span className={`${count < 0 ? "text-red-600" : "text-green-500"}`}>
            ({count})
          </span>
        </div>
        <button
          onClick={() => decrement()}
          className="bg-red-400 mr-2 rounded-lg py-1 px-3 capitalize"
        >
          decrement
        </button>
        <button
          onClick={() => increment()}
          className="bg-green-400 mr-2 rounded-lg py-1 px-3 capitalize"
        >
          increment
        </button>
      </div>
    </>
  );
};

export default Test;
