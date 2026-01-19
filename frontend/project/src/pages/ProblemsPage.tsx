import NavBar from "../component/NavBar";

const ProblemsPage = () => {
  return (
    <div className="min-h-screen bg-base-200">
      <NavBar />
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/*Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold">Problems</h1>
        </div>
      </div>
    </div>
  );
};

export default ProblemsPage;
