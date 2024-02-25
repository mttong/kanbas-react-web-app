import ModuleList from "../Modules/List";
import StatusBar from "./StatusBar";

function Home() {
    return (
        <div>
        <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        
          <div style={{ flex: 1 }}>
            <ModuleList />
          </div>
          <div style={{ width: '300px', marginLeft: '20px' }}>
            <StatusBar />
          </div>
        </div>
      </div>
    );
  }
  

export default Home;