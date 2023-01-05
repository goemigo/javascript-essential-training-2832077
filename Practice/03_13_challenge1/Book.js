class Book{
    constructor(
        title,
        year,
        author
    ){
        this.title = title;
        this.year = year;
        this.author = author;
    }
    howOld(){
        let now = new Date();
        let published = new Date(this.year);
        let age = now- published;
        let yearsSincePublished = Math.floor(age/1000/3600/24/365)
        return yearsSincePublished;
    }
}

export default Book;