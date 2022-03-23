

class ingredient{
    ingredient = (name, size, unit) =>{
        this.name = name;
        this.size = size;
        this.unit = unit;
    }

    getName = () =>{
        return this.name;
    }
}


export default ingredient;