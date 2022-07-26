function TransactionTable({ setShowAddTransaction }) {
  return (
    <>
      <h1> TransactionTable Component </h1>
      <button onClick={() => setShowAddTransaction(true)}>
        Add new transaction
      </button>
    </>
  );
}
