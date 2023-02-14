import CardList from "./components/CardList";
import SearchBar from "./components/SeachBar";
import Single from "./components/Single";

function App() {
  return (
    <div className="bg-dark text-white">
      <h1 className="text-center display-1 py-4">MTG App</h1>
      <SearchBar />
      <div className="bg-white" >
        <CardList />
      </div>
    </div>
  );
}
export default App;
