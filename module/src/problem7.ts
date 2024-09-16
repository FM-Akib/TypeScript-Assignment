{
    function logString (text:any):string{
        if(typeof text==="string") {
            return text;
        }else return "Input is not a string."
    }
    const res:string = logString("Hello, TypeScript!");
    const res2:string = logString(42);

    console.log(res)
    console.log(res2)
}