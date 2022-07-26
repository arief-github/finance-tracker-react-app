export default function AddTransaction({ setShowAddTransaction }) {
  return (
    <>
      <h1> AddTransaction Component </h1>
      <button onClick={() => setShowAddTransaction(false)}>
        Return to main screen
      </button>
    </>
  );
}
