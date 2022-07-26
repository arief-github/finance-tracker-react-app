import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

import Header from './components/Header';
import TransactionTable from './components/TransactionTable';
import Chart from './components/Chart';
import AddCategory from './components/AddCategory';
import AddTransaction from './components/AddTransaction';

export default function App() {
  const [showAddCategory, setShowAddCategory] = useState(true);
  const [showAddTransaction, setShowAddTransaction] = useState(false);

  if (showAddCategory) {
    return <AddCategory setShowAddCategory={setShowAddCategory} />;
  }
  if (showAddTransaction) {
    return <AddTransaction setShowAddTransaction={setShowAddTransaction} />;
  }

  return (
    <div className="container">
      <div className="row">
        <Header setShowAddCategory={setShowAddCategory} />
      </div>
      <div className="row">
        <div className="col">
          <TransactionTable setShowAddTransaction={setShowAddTransaction} />
        </div>
        <div className="col">
          <Chart />
        </div>
      </div>
    </div>
  );
}
