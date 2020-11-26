let rule = document.getElementById("ruletouch");
let close = document.getElementsByClassName('cross')[0];

let rulepress = 'true';
let ch = document.getElementsByClassName('rulepage')[0];

rule.addEventListener('click',function() {

    if(rulepress === 'true'){
        ch.style.cssText = 'visibility: visible;position: absolute; width: 20rem; height: 20rem; background-color: white; border-radius: 5px; margin-top: 12rem; margin-left: 15rem; margin-bottom: 1rem;';
        rulepress = 'false';
    } else {
        ch.style.cssText +=
        'visibility: hidden;';
        rulepress = 'true';
    };
});

close.addEventListener('click',function() {
    ch.style.cssText += 'visibility: hidden;';
    rulepress = 'true';
});

let rock = document.getElementsByClassName('rocklink')[0];
let paper = document.getElementsByClassName('paperlink')[0];
let scissor = document.getElementsByClassName('scissorlink')[0];
let triangle = document.getElementsByClassName('rpsimg')[0];

let rockclick = 'false';
let paperclick = 'false';
let scissorclick = 'false';
let n1 = 1;
let n2 = 21;
let win = document.getElementsByClassName('win')[0];
let lose = document.getElementsByClassName('lose')[0];
let pa = document.getElementsByClassName('pa')[0];
let t1 = document.getElementsByClassName('pick1')[0];
let t2 = document.getElementsByClassName('pick2')[0];

rock.addEventListener('click', function(){
    if (rockclick === 'false'){
        let _1 = document.getElementsByClassName('rock')[0];
        let _2 = document.getElementsByClassName('c1')[0];
        let _3 = document.getElementsByClassName('rockimg')[0];
        _1.style.cssText = 'height: 14rem; width: 14rem; top: 11rem;left: -5rem;';
        _2.style.cssText = 'height: 12rem; width: 12rem;';
        _3.style.cssText = 'width: 7rem;  margin-top: -8.5rem;';
        paper.style.cssText = 'visibility: hidden;';
        scissor.style.cssText = 'visibility: hidden;';
        triangle.style.cssText = 'visibility: hidden;';
        let t1 = document.getElementsByClassName('pick1')[0];
        let t2 = document.getElementsByClassName('pick2')[0];
        t1.style.cssText = 'visibility: visible;';
        t2.style.cssText = 'visibility: visible;';
        let num = Math.floor(Math.random()*2);
        if (num === 1){
            paper.style.cssText = 'visibility: visible;';
            let __1 = document.getElementsByClassName('paper')[0];
            let __2 = document.getElementsByClassName('c2')[0];
            let __3 = document.getElementsByClassName('paperimg')[0];
            __1.style.cssText = 'height: 14rem; width: 14rem; top: 11rem;  left: 27rem;';
            __2.style.cssText = 'height: 12rem; width: 12rem;';
            __3.style.cssText = 'width: 7rem;  margin-top: -8.5rem;';
            let _rp = document.getElementsByClassName('s2')[0];
            let rp = parseInt(_rp.innerHTML, 10);
            _rp.innerHTML = rp - 1;
            lose.style.cssText = 'visibility: visible;';
            pa.style.cssText = 'visibility: visible;';

        }
        else{
            scissor.style.cssText = 'visibility: visible;';
            let __1 = document.getElementsByClassName('scissor')[0];
            let __2 = document.getElementsByClassName('c3')[0];
            let __3 = document.getElementsByClassName('scissorimg')[0];
            __1.style.cssText = 'height: 14rem; width: 14rem; top: 11rem;  left: 27rem;';
            __2.style.cssText = 'height: 12rem; width: 12rem;';
            __3.style.cssText = 'width: 7rem;  margin-top: -8.5rem;';
            let _rp = document.getElementsByClassName('s2')[0];
            let rp = parseInt(_rp.innerHTML, 10);
            _rp.innerHTML = rp + 1;
            win.style.cssText = 'visibility: visible;';
            pa.style.cssText = 'visibility: visible;';
        };
        rockclick = 'true';
        paperclick = 'true';
        scissorclick = 'true';
    };
});

paper.addEventListener('click', function(){
    if (paperclick === 'false'){
        rock.style.cssText = 'visibility: hidden;';
        let _1 = document.getElementsByClassName('paper')[0];
        let _2 = document.getElementsByClassName('c2')[0];
        let _3 = document.getElementsByClassName('paperimg')[0];
        _1.style.cssText = 'height: 14rem; width: 14rem; top: 11rem;left: -5rem;';
        _2.style.cssText = 'height: 12rem; width: 12rem;';
        _3.style.cssText = 'width: 7rem;  margin-top: -8.5rem;';
        scissor.style.cssText = 'visibility: hidden;';
        triangle.style.cssText = 'visibility: hidden;';
        let t1 = document.getElementsByClassName('pick1')[0];
        let t2 = document.getElementsByClassName('pick2')[0];
        t1.style.cssText = 'visibility: visible;';
        t2.style.cssText = 'visibility: visible;';
        let num = Math.floor(Math.random()*2);
        if (num === 1){
            rock.style.cssText = 'visibility: visible;';
            let __1 = document.getElementsByClassName('rock')[0];
            let __2 = document.getElementsByClassName('c1')[0];
            let __3 = document.getElementsByClassName('rockimg')[0];
            __1.style.cssText = 'height: 14rem; width: 14rem; top: 11rem;left: 27rem;';
            __2.style.cssText = 'height: 12rem; width: 12rem;';
            __3.style.cssText = 'width: 7rem;  margin-top: -8.5rem;';
            let _rp = document.getElementsByClassName('s2')[0];
            let rp = parseInt(_rp.innerHTML, 10);
            _rp.innerHTML = rp + 1;
            win.style.cssText = 'visibility: visible;';
            pa.style.cssText = 'visibility: visible;';
        }
        else{
            scissor.style.cssText = 'visibility: visible;';
            let __1 = document.getElementsByClassName('scissor')[0];
            let __2 = document.getElementsByClassName('c3')[0];
            let __3 = document.getElementsByClassName('scissorimg')[0];
            __1.style.cssText = 'height: 14rem; width: 14rem; top: 11rem;left: 27rem;';
            __2.style.cssText = 'height: 12rem; width: 12rem;';
            __3.style.cssText = 'width: 7rem;  margin-top: -8.5rem;';
            let _rp = document.getElementsByClassName('s2')[0];
            let rp = parseInt(_rp.innerHTML, 10);
            _rp.innerHTML = rp - 1;
            lose.style.cssText = 'visibility: visible;';
            pa.style.cssText = 'visibility: visible;';
        };
        rockclick = 'true';
        paperclick = 'true';
        scissorclick = 'true';
    };
});

scissor.addEventListener('click', function(){
    if (scissorclick === 'false'){
        rock.style.cssText = 'visibility: hidden;';
        paper.style.cssText = 'visibility: hidden;';
        let _1 = document.getElementsByClassName('scissor')[0];
        let _2 = document.getElementsByClassName('c3')[0];
        let _3 = document.getElementsByClassName('scissorimg')[0];
        _1.style.cssText = 'height: 14rem; width: 14rem; top: 11rem;left: -5rem;';
        _2.style.cssText = 'height: 12rem; width: 12rem;';
        _3.style.cssText = 'width: 7rem;  margin-top: -8.5rem;';
        triangle.style.cssText = 'visibility: hidden;';
        let t1 = document.getElementsByClassName('pick1')[0];
        let t2 = document.getElementsByClassName('pick2')[0];
        t1.style.cssText = 'visibility: visible;';
        t2.style.cssText = 'visibility: visible;';
        let num = Math.floor(Math.random()*2);
        if (num === 1){
            rock.style.cssText = 'visibility: visible;';
            let __1 = document.getElementsByClassName('rock')[0];
            let __2 = document.getElementsByClassName('c1')[0];
            let __3 = document.getElementsByClassName('rockimg')[0];
            __1.style.cssText = 'height: 14rem; width: 14rem; top: 11rem;left: 27rem;';
            __2.style.cssText = 'height: 12rem; width: 12rem;';
            __3.style.cssText = 'width: 7rem;  margin-top: -8.5rem;';
            let _rp = document.getElementsByClassName('s2')[0];
            let rp = parseInt(_rp.innerHTML, 10);
            _rp.innerHTML = rp - 1;
            lose.style.cssText = 'visibility: visible;';
            pa.style.cssText = 'visibility: visible;';
        }
        else{
            paper.style.cssText = 'visibility: visible;';
            let __1 = document.getElementsByClassName('paper')[0];
            let __2 = document.getElementsByClassName('c2')[0];
            let __3 = document.getElementsByClassName('paperimg')[0];
            __1.style.cssText = 'height: 14rem; width: 14rem; top: 11rem;left: 27rem;';
            __2.style.cssText = 'height: 12rem; width: 12rem;';
            __3.style.cssText = 'width: 7rem;  margin-top: -8.5rem;';
            let _rp = document.getElementsByClassName('s2')[0];
            let rp = parseInt(_rp.innerHTML, 10);
            _rp.innerHTML = rp + 1;
            win.style.cssText = 'visibility: visible;';
            pa.style.cssText = 'visibility: visible;';
        };
        rockclick = 'true';
        paperclick = 'true';
        scissorclick = 'true';
    };
});

let pap = document.getElementsByClassName('pa')[0];

pap.addEventListener('click', function(){
    rockclick = 'false';
    paperclick = 'false';
    scissorclick = 'false';
    rock.style.cssText = 'visibility: visible;';
    paper.style.cssText = 'visibility: visible;';
    scissor.style.cssText = 'visibility: visible;';
    win.style.cssText = 'visibility: hidden;';
    lose.style.cssText = 'visibility: hidden;';
    pa.style.cssText = 'visibility: hidden;';
    t1.style.cssText = 'visibility: gidden;';
    t2.style.cssText = 'visibility: hidden;';

    _1 = document.getElementsByClassName('rock')[0];
    _2 = document.getElementsByClassName('c1')[0];
    _3 = document.getElementsByClassName('rockimg')[0];
    _1.style.cssText = 'height: 12rem; width: 12rem; top: 18rem; left: 10rem;';
    _2.style.cssText = 'height: 10rem; width: 10rem;';
    _3.style.cssText = 'width: 5rem;  margin-top: -6.5rem;';

    _1 = document.getElementsByClassName('paper')[0];
    _2 = document.getElementsByClassName('c2')[0];
    _3 = document.getElementsByClassName('paperimg')[0];
    _1.style.cssText = 'height: 12rem; width: 12rem; top: 4rem; left: 1rem;';
    _2.style.cssText = 'height: 10rem; width: 10rem;';
    _3.style.cssText = 'width: 5rem;  margin-top: -7rem;';

    _1 = document.getElementsByClassName('scissor')[0];
    _2 = document.getElementsByClassName('c3')[0];
    _3 = document.getElementsByClassName('scissorimg')[0];
    _1.style.cssText = 'height: 12rem; width: 12rem; top: 4rem; left: 20rem;';
    _2.style.cssText = 'height: 10rem; width: 10rem;';
    _3.style.cssText = 'width: 5rem;  margin-top: -11rem;';
    triangle.style.cssText = 'visibility: visible;';
});
