class Engine {
    constructor(public horsePower: String, public engineType: string){}
}

class Car {
    private _engine: Engine;
    constructor (engine: Engine){
        this.engine = engine;
    }
    get engine(): Engine {
        return this._engine;
    }
    set engine(value: Engine) {
        if(value == undefined) throw 'Please supply an engine';
        this._engine = value; 
    }
    stop(): void{
        alert("Car engine started" + this._engine.engineType);
    }
    start(): void {
        alert("Car engine stopped" + this._engine.engineType);
    }
}
var engine = new Engine('300', 'V8');
var engine2 = new Engine('500', 'V9');
var car = new Car(engine);
