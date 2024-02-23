import ModuleList from "../Modules/List";

function Home() {
  return (
    <div className="d-flex container-fluid">
        <div className="col-md-8">
          <div className="flex-fill flex-row">
            <h2>Home</h2>
          </div>
          <div className="flex">
            <ModuleList />
            <h2>Status</h2> 
          </div>
        </div>
    </div>
  );
}
export default Home;