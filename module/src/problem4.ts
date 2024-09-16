{
    type GenericArray<T> = Array<T>
    function reverseArray(array:GenericArray<number|string>):GenericArray<number|string> {
        return array.reverse()
    }
    console.log(reverseArray([1,2,3,4]))

    // Using a generic type T to handle arrays of any type
    function reverseArray2<T>(array:T[]):T[]{
        return array.reverse()
    }
    console.log(reverseArray2(['A','B','C','D']))

}