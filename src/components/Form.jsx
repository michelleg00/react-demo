function Form() {
    function handleSubmit(event) {
        event.preventDefault();
        console.log("submit clicked");
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col justify-center w-full max-w-md gap-6">
            <h1>Contact me</h1>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="E-Mail" />
            <textarea placeholder="Message" className = "h-40"/>
            <button type="submit">Submit</button>

        </form>
    )

}

export default Form;