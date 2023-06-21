import React, {useState, useEffect} from "react";

const Counter = () => {
    const [count, setCount] = useState(0)

    //componentDidMount - dijalankan sekali saat komponen pertama kali dirender
    useEffect(() => {
        console.log("component mounted")
    }, [])

    //componentDidUpdate - dijalankan setiap kali 'count' berubah
    useEffect(() => {
        console.log("count updated:", count)
    }, [count])

    //componentWillUnmount - dijalankan sebelum komponen dihapus dari DOM
    useEffect(() => {
      return() =>{
        console.log("component unmounted")
        }
    }, [])

    const increment = () => {
        setCount((prevCount) => prevCount + 1)
    }

    const decrement = () => {
        setCount((prevCount) => prevCount - 1)
    }

    return(
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4 text-center">Lifecycle using counter</h1>
            <div className="flex justify-center items-center">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={decrement}>-</button>
                <span className="mx-4 text-2xl">{count}</span>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={increment}>+</button>
            </div>

        </div>
    )

}

export default Counter