import Hero from "./components/Hero";

function App() {
  return (
    <main className="bg-white px-6 lg:px-10">
      <Hero />
      <h1 className="text-red-200" id="about">
        Hello
      </h1>
      <div className="h-[200vh]"></div>
    </main>
  );
}

export default App;
