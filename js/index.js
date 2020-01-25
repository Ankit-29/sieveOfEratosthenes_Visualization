let globalObj = {
    i: 2,
    n: null,
    j: 2,
}

const canvas = document.querySelector('canvas');

canvas.width = canvas.parentElement.clientWidth - 40;
canvas.height = canvas.parentElement.clientHeight - 40;

visualize = () => {
    let num = parseInt(document.querySelector('#num').value, 10);
    const tableRatio = canvas.width/canvas.height;
    const columns = Math.ceil(Math.sqrt(num*tableRatio));
    const boxSize = (canvas.width/columns)-2;
    globalObj.n = num;
    
    let primes = Array(num + 1).fill(true);
    let boxes = initializeBoxes(primes, boxSize);
    primes[0] = false;
    primes[1] = false;
    boxes[0].isChecked = true;
    boxes[1].isChecked = true;
    boxes[2].isChecked = true;


    drawBoxes(boxes, primes);
    update(boxes, primes);
}

initializeBoxes = (primes, boxSize) => {
    let boxArray = [];
    let xPos = 0;
    let yPos = 0;
    // let maxBoxInRow = Math.floor(canvas.height/boxSize);
    primes.forEach((ele, i) => {
        boxArray.push(new Box(xPos, yPos, i, boxSize));
        xPos += boxSize + 2;
        if (xPos + boxSize > canvas.width) {
            xPos = 1;
            yPos += boxSize + 2;
        }
    });
    return boxArray;
}

drawBoxes = (boxes, primes) => {
    // console.log(primes);
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    boxes.forEach((box, i) => {
        if (primes[i] && box.isChecked) {
            ctx.fillStyle = '#6add6fc7';
        }
        else if (!primes[i] && box.isChecked) {
            ctx.fillStyle = '#dc6f6e';
        }
        else {
            ctx.fillStyle = '#bcbcbc';
        }
        ctx.fillRect(box.xPos, box.yPos, box.size, box.size);
        ctx.font = '1em Arial';
        ctx.fillStyle = 'black';
        ctx.fillText(box.value, box.xPos + box.size / 4, box.yPos + box.size / 2, box.size / 2);
    });
}

update = (boxes, primes) => {
    drawBoxes(boxes, primes);
    let currIdx = globalObj.i * globalObj.j;
    if (globalObj.i == globalObj.n) {
        globalObj.i = 2;
        globalObj.j = 2;
        return false;
    }
    if (currIdx < globalObj.n + 1) {
        primes[currIdx] = false;
        boxes[currIdx].isChecked = true;
        globalObj.j++;

    }
    else {
        globalObj.i += 1;
        boxes[globalObj.i].isChecked = true;
        globalObj.j = 2;
    }

    requestAnimationFrame(() => { update(boxes, primes) });
}



// original algorithm
sieveOfEratosthenes = (num) => {
    let primes = Array(num + 1).fill(true);
    primes[0] = false;
    primes[1] = false;
    for (let i = 2; i < Math.sqrt(num); i++) {
        if (primes[i]) {
            let y = 2;
            while ((i * y) < num) {
                primes[i * y] = false;
                y++;
            }
        }
    }
    return primes;
}

console.log(sieveOfEratosthenes(50));