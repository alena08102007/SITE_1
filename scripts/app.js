let i=1, n=6;

function func1() {
    if (++i>n) i=1
    slide.src= `image/b${i}.jpg`
    setTimeout('func1()', 2000)
}
