window.onload = function () {
  c = document.getElementById("c");
  ctx = c.getContext("2d");
  document.addEventListener("keydown", keypush);
  newGame();
}

function startgame() {
  gamestart = setInterval(game,1000/10);
}

function newGame() {
  box = 20;
  vx = 1
  vy = 0
  apple();
  trial = [];
  px = py = c.width / 2;
  trail = []
  for (i = 0; i <= 5; i++) {
    trail.push({
      x: px,
      y: py
    });
    px = px + 20;
  }
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.fillStyle = "red";
  ctx.fillRect(ax, ay, box, box);
}
function apple() {
  ax = Math.floor(Math.random() * Math.floor(c.width / 20)) * 20;
  ay = Math.floor(Math.random() * Math.floor(c.height / 20)) * 20;
}

function game() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, c.width, c.height);
  ctx.fillStyle = "red";
  ctx.fillRect(ax, ay, box, box);
  console.log(trail.find(t => t.x == px && t.y == py));
  if (trail.find(t => t.x == px && t.y == py) != undefined) {
    clearInterval(gamestart);
    newGame();
  }
  trail.push({
    x: px,
    y: py
  });
  if (ax == px && ay == py) {
    apple();
  } else {
    trail.shift();
  }
  px = px + (box * vx)
  py = py + (box * vy)
  if (px > c.width-box) {
    px = 0;
  }
  if (px < 0) {
    px = c.width-box;
  }
  if (py > c.height-box) {
    py = 0;
  }
  if (py < 0) {
    py = c.height-box;
  }

  ctx.fillStyle = "lime";
  trail.forEach(body => {
    ctx.fillRect(body.x, body.y, box, box);
  });

}

function keypush(e) {
  switch (e.keyCode) {

    case 38:
      if (vy != 1) {
        vy = -1;
        vx = 0;
      }
      break;
    case 37:
      if (vx != 1) {
        vy = 0;
        vx = -1;
      }
      break;
    case 40:
      if (vy != -1) {
        vy = 1;
        vx = 0;
      }
      break;
    case 39:
      if (vx != -1) {
        vy = 0;
        vx = 1;
      }

  }
}