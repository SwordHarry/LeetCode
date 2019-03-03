function a() {
    this.b = 3;
}
var c = new a();
a.prototype.b = 5;
var b = 7;
a();
console.log(b);
console.log(c.b);

// 7 3