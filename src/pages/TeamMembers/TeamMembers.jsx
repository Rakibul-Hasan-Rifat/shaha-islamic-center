import { useLoaderData } from "react-router-dom";
import SingleTeamMember from "../../components/singleTeamMember/singleTeamMember";

const TeamMembers = () => {
    const teamMembersData = useLoaderData();
    console.log(teamMembersData)
    return (
        <section className="grid gap-12 grid-cols-2 bg-white p-24 mx-auto">
            {
                teamMembersData.map(singleMember => <SingleTeamMember key={singleMember.id} member={singleMember} />)
            }
        </section>
    );
};

export default TeamMembers;