import Circle from "./Circle";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
const circles: Circle[] = [];

let finished: boolean = false;

// for (let i = 0; i < 100; i++) {
//   circles.push(
//     new Circle(Math.random() * canvas.width, Math.random() * canvas.height)
//   );
// }

function addCircle(): { x: number; y: number } | undefined {
  const randomX = Math.random() * canvas.width;
  const randomY = Math.random() * canvas.height;

  for (let i = 0; i < circles.length; i++) {
    const other: Circle = circles[i];
    if (
      randomX > other.x - other.r - 2 &&
      randomX < other.x + other.r + 2 &&
      randomY > other.y - other.r - 2 &&
      randomY < other.y + other.r + 2
    ) {
      return;
    }
  }
  return { x: randomX, y: randomY };
}

function drawScene() {
  let tries = 0;
  while (tries < 1000) {
    const coords = addCircle();
    if (coords !== undefined) {
      circles.push(new Circle(coords.x, coords.y));
      break;
    }
    tries++;
    if (tries >= 1000) {
      finished = true;
      console.log("Finished!");
    }
  }

  // circles.push(
  //   new Circle(Math.random() * canvas.width, Math.random() * canvas.height)
  // );
  circles.forEach((c) => {
    c.draw(ctx);
    c.update(circles);
  });
}

function clearScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

setInterval(() => {
  if (!finished) {
    clearScene();
    drawScene();
  }
}, 20);
