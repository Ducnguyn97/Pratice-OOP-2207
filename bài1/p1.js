let MyDate = function (day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
    this.getMonth = function (){
        return this.month;
    }
    this.getDay = function (){
        return this.day;
    }
    this. getYear = function(){
        return this.year;
    }
    this.setDay = function (day){
        this.day = day;
    }
    this.setMonth = function (month){
        this.month = month;
    }
    this.setYear = function (year){
        this.year = year;
    }
    this.setDate = function (day, month, year){
        this.day = day;
        this.month = month;
        this.year = year;
    }
    this.toString= function(){
        let dd = this.day <10? "0" + this.day: this.day;
        let mm = this.month < 10 ? "0" + this.month: this.month;
        return `${dd}/${mm}/${this.year}`;
    }
}
let date = new MyDate(8,1,1997);
let day = date.getDay();
let month = date.getMonth();
let year = date.getYear();
date.setDate(1,8,1998)
alert(date.toString());
alert(day + "/" + month + "/" + year);
