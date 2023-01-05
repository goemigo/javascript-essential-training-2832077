class Cat{
    constructor(
        name,
        age,
        gender,
        color,
        mealTime,
        isFull
    ){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.color = color;
        this.mealTime = mealTime;
        this.isFull = isFull;
    }
    haveMeal(mealStatus){
        this.isFull = mealStatus;
    }
}
export default Cat;