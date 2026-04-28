import { useRef } from "react";

export default function FileSelector() {
    const fileInputRef = useRef(null);

    function submitHandler(e) {
        e.preventDefault();
        const file = fileInputRef.current.files[0];
        alert(`${file.name}wurde ausgewählt`)


    }

    return (
        <form onSubmit= { submitHandler } >
        <input type="file" ref = { fileInputRef } />
            <button type="submit"> Submit </button>
                </form>

    );

}