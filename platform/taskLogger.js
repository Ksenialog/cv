/*
Необходимо написать систему логгирования, которая обрабатывает асинхронные задачи с учетом их зависимостей.
  У каждой задачи может быть зависимость от другой задачи, то есть она должна выполниться только после завершения другой.
  Задачи могут быть выполнены параллельно, если они не зависят друг от друга.
*/

// Пример логгирования
//   Задача 1 началась.
//   Задача 3 началась.
//   Задача 1 завершена.
//   Задача 3 завершена.
//   Задача 2 началась.
//   Задача 2 завершена.
//   Задача 4 началась.
//   Задача 4 завершена.
//   Задача 5 началась.
//   Задача 5 завершена.

const tasks = [
  { id: 1, dependsOn: null, duration: 1000 },
  { id: 2, dependsOn: 1, duration: 500 },
  { id: 3, dependsOn: null, duration: 2000 },
  { id: 4, dependsOn: 2, duration: 700 },
  { id: 5, dependsOn: 3, duration: 1500 },
];

const TaskType = {
  DEPENDENT_TASKS: 'dependentTasks',
  INDEPENDENT_TASKS: 'independentTasks',
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const logInfo = async ({ id, duration }) => {
  console.log(`Задача ${id} началась.`)
  await delay(duration)
  console.log(`Задача ${id} завершена.`)
  
  return id
}

const runTasks = async (tasks) => {
  const { DEPENDENT_TASKS, INDEPENDENT_TASKS } = TaskType
  const taskStore = new Map()
  const completedTasks = new Set()
  
  tasks.forEach((item) => taskStore.set(item.id, item)) // карта для быстрого доступа
  
  const { dependentTasks, independentTasks } = tasks.reduce((acc, item) => {
    let currentAccKey = DEPENDENT_TASKS
    
    if (item.dependsOn === null) currentAccKey = INDEPENDENT_TASKS
    
    acc[currentAccKey].push(item)
    return acc
  }, {
    [DEPENDENT_TASKS]: [],
    [INDEPENDENT_TASKS]: [],
  })
  
  // запускаем независимые задачи сразу
  if (independentTasks.length) {
    await Promise.all(independentTasks.map((item) => logInfo(item)))
      .then((result) => {
        result.forEach((item) => completedTasks.add(item))
      })
  }
  
  const runTask = async (task) => {
    if (completedTasks.has(task.id)) return
    
    if (!completedTasks.has(task.dependsOn)) {
      await runTask(taskStore.get(task.dependsOn))
    }
    
    await logInfo(task)
    completedTasks.add(task.id)
  }
  
  for (let task of dependentTasks) {
    await runTask(task)
  }
}

runTasks(tasks)