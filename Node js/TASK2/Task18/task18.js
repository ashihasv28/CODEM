function createTask(id, duration) {
  return async () => {
    console.log(`Task ${id} started`);
    await new Promise(resolve => setTimeout(resolve, duration));
    console.log(`Task ${id} done — ${duration}ms`);
  };
}

async function limitConcurrency(tasks, limit) {
  let running = 0;
  let index = 0;

  return new Promise(resolve => {
    function next() {
      if (index === tasks.length && running === 0) {
        resolve(); 
        return;
      }

      while (running < limit && index < tasks.length) {
        const task = tasks[index++];
        running++;
        task().then(() => {
          running--;
          next();
        });
      }
    }

    next();
  });
}

const tasks = Array.from({ length: 10 }, (_, i) =>
  createTask(i + 1, Math.floor(Math.random() * 1000) + 500)
);

console.time("concurrent");
limitConcurrency(tasks, 3).then(() => {
  console.timeEnd("concurrent");

  console.time("sequential");
  (async function runSequential() {
    for (const task of tasks) {
      await task();
    }
    console.timeEnd("sequential");
  })();
});
