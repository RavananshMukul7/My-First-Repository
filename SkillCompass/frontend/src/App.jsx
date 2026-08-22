import Landing from "./pages/Landing";

function App() {
  return (
    <main
      style={{
        width: "100vw",
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        overflow: "hidden",
        background: "#02040a",
      }}
    >
      <Landing />
    </main>
  );
}

export default App;