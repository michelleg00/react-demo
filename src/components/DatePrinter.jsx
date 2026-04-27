function DatePrinter() {
    return (
        <button
            onClick={() => console.log(new Date().toString())}
            style={{ background: "red", padding: "20px", zIndex: 9999 }}
        >
            Print Date
        </button>
    );
}
export default DatePrinter;