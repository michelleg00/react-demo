import HeroImage from "../components/HeroImage"

function AboutMe() {
    return (
        <div className="flex justify-center items-center gap-8">
            <div>
                <HeroImage />
            </div>
            <div className="max-w-sm flex flex-col justify-center gap-4">
                <p>
                    I'm a product designer with a background in 3D design from my studies at the University of Applied Sciences Kaiserslautern, Germany.
                </p>
                <p>Generally passionate about all forms of art with an additional interest in graphic design,
                    I focus on delivering impactful user interface designs that balance user needs with business goals.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;