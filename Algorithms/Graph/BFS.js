// BFS - Def
/**
 * BFS or Breath First Search is an Algorithm which is
 * used to find if there is a path and if there is then what is the shorted path in unweighted graph.
 */

// BFS - DS
/**
 * To implement BFS we need two Data Structures: Queue and Hash Table
 * Queue: To check the nodes in specific order(FIFO).
 * Hash Table: To maintain relation between nodes
 */

function checkIfSeller() {
  const graph = {};
  graph['alice'] = ['bob', 'aman', 'rahul'];
  graph['bob'] = ['rahul', 'peggy'];
  graph['rahul'] = ['wanda', 'peggy'];
  graph['wanda'] = ['mango'];

  const queue = graph['alice'];

  const processed = [];

  while (queue.length) {
    const person = queue.shift();
    if (processed.indexOf(person) < 0) {
      console.log('person is', person);
      if (person === 'mango') {
        console.log('passed');
        return true;
      } else {
        processed.push(person);
        graph[person]?.length && queue.push(...graph[person]);
      }
    }
  }
  console.log('failed');
  return false;
}
