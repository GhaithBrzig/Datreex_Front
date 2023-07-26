
import FacilityCard from './FacilityInfo';
import Facility from './Facility.tsx';
import './App.css';



const clinics: ClinicProps[] = [
    {
        recruiting: true,
        id: "NCT00809965",
        name: "Hospitalier de Saint-Quentin",
        description:
            "An Efficacy and Safety Study for Rivaroxaban in Patients With Acute Coronary Syndrome",
        conditions: ["Syndrome", "Aspirin"],
        url: "https://clinicaltrials.gov/ct2/show/NCT00809965",
    },
    {
        recruiting: false,
        id: "NCT01486030",
        name: "University of Michigan",
        description:
            "The Effects of Resistance Training on Arterial Stiffness in Patients With Chronic Kidney Disease",
        conditions: ["Chronic Kidney Disease", "Resistance Training"],
        url: "https://clinicaltrials.gov/ct2/show/NCT01486030",
    },
    {
        recruiting: true,
        id: "NCT00809965",
        name: "Centre Hospitalier de Saint-Quentin",
        description:
            "An Efficacy and Safety Study for Rivaroxaban in Patients With Acute Coronary Syndrome",
        conditions: ["Syndrome", "Aspirin"],
        url: "https://clinicaltrials.gov/ct2/show/NCT00809965",
    },
];
function App() {
    return (
        <div className="w-screen h-screen bg-blue-300 flex items-center justify-center">
            <div className="flex items-center justify-center mr-5">
                <FacilityCard
                    name="Example Facility 1"
                    address="123 Main Street, City"
                    emailAddress="facility@example.com"
                    websiteUrl="example.com"
                    locationId={1}
                />

            </div>
            <div>
                {clinics.map((clinic) => (
                    <Facility key={clinic.id} {...clinic} />
                ))}
            </div>
        </div>
    );
}

export default App;
