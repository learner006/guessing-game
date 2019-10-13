class GuessingGame {
    constructor() {}

    setRange(min, max) {
    	this.LeftBoundOrig = min;
    	this.RightBoundOrig = max;

    	this.LeftBound = min;
    	this.RightBound = max;
    }

    guess() {
		var distance = this.getDistance();
    
		// ;-) Hello perl! :-)
		//die 'this.RightBound - this.LeftBound < 0' if(distance < 0);
    
		// The algo is converged! We found a number!
		if (distance === 0)
		{
			return this.RightBound;
		}
		else
		{
			// Let's split a segment one more time! :-)
			this.Center = Math.floor( (this.LeftBound + this.RightBound) / 2 );
			console.log(this.Center);
    
			// return a start of the right segment
			return this.Center + 1; 
		}

    }

    lower() {
		// Nothing to do
		if (this.getDistance() <= 0)
		{
			return;
		}
    
		// A secret number is inside the 'lower' segment
		// Let's use it further!
    
		this.RightBound = this.Center;


    }

    greater() {
		// Nothing to do
		if (this.getDistance() <= 0)
		{
			return;
		}
    
		// A secret number is inside the 'greater' segment
		// Let's use it further!
    
		this.LeftBound = this.Center + 1;


    }

    getDistance() {
		return this.RightBound - this.LeftBound; 
    }
}

module.exports = GuessingGame;
