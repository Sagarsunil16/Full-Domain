function createCounter(){
    let counter = 0;
    return {
        increment: function increment(){
            counter++
            return counter;
        },

        decrement: function decrement(){
            counter--
            return counter;
        },

        getValue: function getValue(){
            return counter
        }
    }
}

const counter = createCounter()
counter.increment()
counter.increment()
counter.increment()
console.log(counter.getValue())
counter.decrement()
console.log(counter.getValue())

