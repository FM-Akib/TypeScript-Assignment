{
    type Book = {
        title: string
        author: string
        publishedYear: number
    }
    
    function isRecentBook(book: Book): boolean {
        const date = new Date()
        if(book.publishedYear>= date.getFullYear()-5 && book.publishedYear <= date.getFullYear()){
            return true
            
        }
        else return false
    }
    const book1: Book = {
       title: 'The Catcher in the Rye',
       author: 'J. D. Salinger',
       publishedYear: 2022
    }

    console.log(isRecentBook(book1))
}