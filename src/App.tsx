import { useCallback, useEffect, useState } from "react";

function App() {
  // useCallback example calculate for bank percentage for credit card
  const [amount, setAmount] = useState(0);
  const [percentage, setPercentage] = useState(0);
  const [result, setResult] = useState(0);

  // useCallback is a hook that returns a memoized callback
  const calculatePercentage = useCallback(() => {
    setResult(amount * percentage / 100);
  }, [amount, percentage]);

  useEffect(() => {
    calculatePercentage();
  }, [calculatePercentage]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold text-center">useCallback</h1>
      <input className="border-2 border-gray-300 rounded-md p-2" type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
      <input className="border-2 border-gray-300 rounded-md p-2" type="number" value={percentage} onChange={(e) => setPercentage(Number(e.target.value))} />
      <p className="text-lg font-bold">{result}</p>
    </div>
  )
}

export { App }