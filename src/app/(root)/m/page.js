import Nav from "@/components/Nav";
import Zhome from "@/components/Zhome";
import EventCard from "@/components/EventCard";
import Navbar from "@/components/Navbar";
import ProgramCard from "@/components/ProgramCard";
import Rest from "@/components/Rest";
import TeamSlider from "@/components/TeamSlider";

// const teams = [
//     { name: 'Tech', slug: 'tech' },
//     { name: 'Core', slug: 'core' },
//     { name: 'Event Management', slug: 'event-management' },
//     { name: 'PR', slug: 'pr' },
//     { name: 'Sponsorship', slug: 'sponsorship' },
//     { name: 'Content', slug: 'content' },
//     { name: 'Logistics', slug: 'logistics' },
//     { name: 'Leads', slug: 'leads' },
//   ];

export default function Page (){
    return(<>
        <Zhome/>
        <EventCard/>
        <Navbar/>
        <ProgramCard/>
        <Rest/>
        {/* <TeamSlider teams={teams}/> */}
        <Nav></Nav>
        <Nav></Nav>
        </>
    )
}