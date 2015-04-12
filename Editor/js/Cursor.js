function Cursor()
{
	var x = null;
	var y = null;
	var w = null;
	var h = null;
	var c = null;
	
	var that = this;
	
	this.create = function(_x, _y, _w, _h, _c)
	{
		x = _x;
		y = _y;
		w = _w;
		h = _h;
		c = _c;
	}
	
	this.draw = function(_ctx)
	{
		_ctx.strokeStyle = c;
		_ctx.beginPath()
		_ctx.rect(x, y, w, h);
		_ctx.stroke();
	}
	
	this.getX = function(){return(x);}
	this.getY = function(){return(y);}
	this.getWidth = function(){return(w);}
	this.getHeight = function(){return(h);}
	this.getColor = function(){return(c);}
	
	this.setExactX = function(_x){x = _x;}
	this.setExactY = function(_y){y = _y;}
	this.setX = function(_x){x = iDivide(_x, w)*w;}
	this.setY = function(_y){y = iDivide(_y, h)*h;}
	this.translate = function(_x, _y){x += _x; y +=_y}
	this.setPosition = function(_x, _y){that.setX(_x); that.setY(_y);}
	this.setExactPosition = function(_x, _y){that.setExactX(_x); that.setExactY(_y);}
	this.setWidth = function(_w){w = _w;}
	this.setHeight = function(_h){h = _h;}
	this.resize = function(_w, _h){w+=_w; h+=_h}
	this.scale = function(_s){w*=_s; h*=_s;}
	this.setColor = function(_c){c = _c;}
}
