function ImpliedReturn() {
    const multiply = (a: number, b: number) => a * b;
    const fourTimesFive = multiply(4, 5);
    console.log(fourTimesFive);

    return (
        <>
        <h5>Implied return</h5>
        fourTimesFive = {fourTimesFive}<br />
        multiply(4, 5) = {multiply(4, 5)}<br />
        </>
    )
}
export default ImpliedReturn