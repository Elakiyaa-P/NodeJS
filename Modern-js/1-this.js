//"this" here is exports

this.id = 'exports';
console.log(this);
const testerObj = {
    func1: function () {            //Here function represents the whole object function
        console.log('func1', this);
    },
    func2: () => {                  //Here arrow function represents the class object
        console.log('func2', this);
    },
};

testerObj.func1();
testerObj.func2();