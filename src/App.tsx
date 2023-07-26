
import FacilityCard from './FacilityInfo';
import './App.css';

function App() {
    return (
        <div className="w-screen h-screen bg-blue-300 flex items-center justify-center">
            <div className="flex items-center justify-center">
                <FacilityCard
                    name="Example Facility 1"
                    address="123 Main Street, City"
                    emailAddress="facility@example.com"
                    websiteUrl="example.com"
                    locationId={1}
                />
            </div>
        </div>
    );
}

export default App;
