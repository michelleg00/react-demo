import skills from "../skills.json" with {
    type: "json" };

function SkillsList() {
    return (
        <ul><p className="text-lg">Skills</p><br />
        {skills.skills.map((skill) => (
            <li key={skill.id}>
                {skill.name}
            </li>
        ))}

        </ul >
    );
}

export default SkillsList;