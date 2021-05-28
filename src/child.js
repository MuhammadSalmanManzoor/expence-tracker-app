import React, { useContext, useState } from "react";
import { TransactionContext } from "./transContext";

function Child() {
    let { transactions, addTransaction } = useContext(TransactionContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);
    const handleAddition = (event) => {
        event.preventDefault();
        addTransaction({
            amount: Number(newAmount),
            desc: newDesc
        })
    }
        
    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < transactions.lenght; i++) {
            if (transactions[i].amount > 0)
                income += transactions[i].amount
                console.log(0)
        }
        return income;
         } 
    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < transactions.lenght; i++) {
            if (transactions[i].amount < 0)
                expense += transactions[i].amount
        }
        return expense;
    }
    return (
        <div className='container'>
            <h1 className='text-center'>Expense Tracker</h1>
            <h2> your balence <br /> {getIncome() + getExpense() } </h2>
            <div className='expence-container'>
                <h3>INCOME <br /> {getIncome()} </h3>
                <h3>Expense <br /> {getExpense()} </h3>
            </div>
            <h2>History</h2>
            <hr />

            <ul className='transcation-history'>
                {transactions.map((transObj, ind) => {
                    return (
                        <li key={ind} >
                            <span>{transObj.desc}</span>
                            <span>{transObj.amount}</span>
                        </li>
                    );
                })}


            </ul>
            <h3>Add New Transcation</h3><hr />

            <form className="transcation-form" onSubmit={handleAddition}>

                <label>
                    Enter Description <br />
                    <input type="text" onChange={(ev) => setDesc(ev.target.value)} required />
                </label> <br />
                <label>
                    Enter Amount <br />
                    <input type="number" onChange={(ev) => setAmount(ev.target.value)} required />
                </label> <br />
                <input type="submit" valvue="Add Transcation" />
            </form>
        </div>
    );
}

export default Child;
