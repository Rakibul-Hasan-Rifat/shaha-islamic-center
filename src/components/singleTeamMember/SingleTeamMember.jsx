const SingleTeamMember = ({ member }) => {
    const { img_url, position, name, email } = member;
    return (
        <div className="flex gap-10 items-center">
            <div>
                <img src={img_url} className="w-36 h-w-36 rounded-full border border-yellow-400" alt="" />
            </div>
            <div>
                <h3 className="text-4xl text-[#441a05] font-bold">{name}</h3>
                <p className="mt-5 text-[#441a0570]"><strong>{position}</strong></p>
                <p className="text-yellow-500"><span>{email}</span></p>
            </div>
        </div>
    );
};

export default SingleTeamMember;