// function recursion(level, param1, param2, ...) {
//     // recursion terminator
//     if (level > MAX_LEVEL) {
//         print_result;
//         return
//     }
//     //process logic in current level
//     process_data(level, data...)

//     //drill down
//     this.recursion(level + 1, p1, ...)

//     //reverse the current level status if needed
//     reverse_state(level)
// }


// // DFS, BFS递归

// {
//     let visited = new set()
//     function dfs(node, visited) {
//         visited.add(node)

//         //process current node here.
//         ...
//         for (next_node in node.children()) {
//             if (visited.has(next_node)) {
//                 dfs(next_node, visited)
//             }
//         }
//     }
// }

// {
//     let visited = new set()
//     function BFS(graph, start, end) {
//         let queue = []
//         queue.push([start]);
//         visited.add(start)

//         while (queue) {
//             let node = queue.pop()
//             visited.add(node);

//             process(node)
//             let nodes = generate_related_nodes(node)
//             queue.push(nodes)

//             //other processing work
//             // ...
//         }
//     }
// }

// // 二分查找
// let left = right = 0, len(array) - 1

// while (left <= right) {
//     mid = left + (right - left) / 2
//     if (array[mid] === target) {
//         // find the target
//         break or return result
//     } else if (array[mid] < target) {
//         left = mid + 1;
//     } else {
//         right = mid - 1
//     }
// }


// //DP
// //状态定义
// dp = [m+1,[n+1]];
// //初始状态
// dp[0][0];
// dp[0][1];
// ...

// //DP状态推导
// for(i = 0 ;i <= n ; ++i) {
//     for (j = 0; j<=m ; ++j) {
//         ... 

//         d[i][j] = min {dp[i - 1][j], dp[i][j - 1], etc.}
//     }
// }

// return dp[m][n]// 最优解

// // 位运算

// 1. x&1 == 1 or == 0 判断奇偶（x % 2 == 1)
// 2. x = x & (x -1) => 清零最低位的1
// 3. x & -x => 得到最低位的1
