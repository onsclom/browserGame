class Bird {
    constructor(startHeight, dir) {
        this.y=startHeight;
        this.dir=dir;
        this.flapping=true;
        this.flapCount=0;
        this.size=.025*width

        if (dir)
        {
            this.x=-this.size;
        }
        else
        {
            this.x=width;
        }

        this.colorVal=color('#aea');
    }

    draw() {
        this.flapCount+=1;
        if (this.flapCount>=30) {
            this.flapCount=0;
            this.flapping=!this.flapping;
        }

        noStroke();
        fill(this.colorVal);
        if (this.flapping)
        {
            quad(this.x, this.y, this.x+this.size, this.y+this.size, this.x, this.y+.5*this.size, this.x-this.size, this.y+this.size);
        }
        else
        {
            quad(this.x, this.y, this.x+this.size, this.y-this.size, this.x, this.y+.5*this.size, this.x-this.size, this.y-this.size);
        }

        if (this.dir)
        {
            this.x+=1;
        }
        else
        {
            this.x-=1;
        }
    }
}