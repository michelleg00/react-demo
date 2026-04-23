import skills from "../skills.json" with {
    type: "json" };

function SkillsList() {
    return (
        <>
         <p className="mb-8 mt-8 text-center">Skills</p>
            <ul className="flex gap-4 flex-wrap">
                {skills.skills.map((skill) => (
                    <li key={skill.id} className="border rounded-xl border-neutral-400 p-2 w-28 text-center text-xs">
                        {skill.name}
                    </li>
                ))}

            </ul >
        </>
    );
}

export default SkillsList;