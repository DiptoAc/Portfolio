"use client";

import { motion } from "framer-motion";

interface Topic {
  category: string;
  skills: string[];
  color: string;
}

const cpTopics: Topic[] = [
  {
    category: "Game Theory",
    skills: ["Nim Games", "Sprague-Grundy Theorem", "Green Hackenbush", "Chessboard Games", "Game on Trees"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    category: "Dynamic Programming",
    skills: ["SOS DP (Sum Over Subsets)", "Digit DP", "DP on Trees", "Matrix Exponentiation", "Bitmask DP"],
    color: "from-blue-500 to-indigo-500",
  },
  {
    category: "Graph & Tree Foundation",
    skills: [
      "BFS / DFS (Basics)",
      "Multi-Source BFS",
      "Floyd-Warshall",
      "Kruskal’s & MST",
      "Topological Sort (DAG DP)"
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "Graph & Tree Theory",
    skills: [
        "LCA (Binary Lifting)",
        "SCC (Kosaraju)", 
        "Dijkstra/Bellman-Ford", 
        "Centroid Decomposition", 
        "Max Flow"
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    category: "Advanced Graph Structures",
    skills: [
      "Binary Lifting (Successor Graphs)",
      "Condensation Graphs",
      "Eulerian Path (Hierholzer’s)",
      "2-SAT (Logic via SCC)",
      "Bipartite Check"
    ],
    color: "from-fuchsia-500 to-purple-600",
  },
  {
    category: "Mathematics",
    skills: ["Number Theory", "Modular Arithmetic", "Combinatorics", "Inclusion-Exclusion", "Probability & Expectation"],
    color: "from-amber-500 to-orange-500",
  },
  {
    category: "Data Structures",
    skills: ["Segment Tree", "Fenwick Tree (BIT)", "Disjoint Set Union (DSU)", "Sparse Table", "Policy Based DS"],
    color: "from-cyan-500 to-blue-500",
  },
  {
    category: "Core Algorithms",
    skills: ["Binary Search on Answer", "Two Pointers", "Sliding Window", "Constructive Algorithms", "Greedy Strategies"],
    color: "from-slate-500 to-slate-700",
  },
  {
    category: "Computational Geometry",
    skills: [
      "Pick's Theorem",
      "Point in Polygon (Ray Casting)",
      "Line & Segment Intersection",
      "Distance: Point to Segment",
      "Circle-Circle Intersection"
    ],
    color: "from-rose-500 to-red-500",
  },
  {
    category: "Geometric Algorithms",
    skills: [
      "Monotone Chain (Convex Hull)",
      "Rotating Calipers (Diameter)",
      "Sweep Line (Closest Pair)",
      "Union of Rectangles Area",
      "Tangents & Circle-Line Ops"
    ],
    color: "from-orange-500 to-rose-500",
  },
  {
    category: "String Algorithms",
    skills: [
      "KMP (Prefix Function)",
      "Z-Algorithm",
      "Rabin-Karp (Rolling Hash)",
      "Manacher's Algorithm (Palindromes)",
      "Trie Data Structure"
    ],
    color: "from-lime-500 to-green-500",
  },
  {
    category: "Network Flow & Matching",
    skills: [
      "Edmonds-Karp / Dinic’s",
      "Max-Flow Min-Cut Theorem",
      "Bipartite Matching",
      "Distinct Routes / Edge-Disjoint",
      "Flow-based Pairings"
    ],
    color: "from-blue-600 to-cyan-500",
  },
  {
    category: "Niche & Heuristic Tech",
    skills: [
      "Hamiltonian Path (Bitmask DP)",
      "Warnsdorff’s Rule (Backtracking)",
      "De Bruijn Sequence Construction",
      "Knight's Tour Optimizations"
    ],
    color: "from-zinc-500 to-slate-700",
  },
  {
    category: "Advanced Tree Techniques",
    skills: [
      "Re-Rooting DP (Tree Distances)",
      "Binary Lifting (LCA & K-th Ancestor)",
      "Euler Tour + BIT (Subtree Queries)",
      "Heavy-Light Decomposition (HLD)",
    ],
    color: "from-indigo-600 to-blue-700",
  }
];

export default function TopicList() {
  return (
    <div className="py-20 bg-slate-900/50 rounded-[3rem] border border-white/5 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Algorithm <span className="text-emerald-400">Inventory</span>
          </h2>
          <p className="text-slate-400 font-medium">A comprehensive map of my problem-solving toolkit</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cpTopics.map((topic, idx) => (
            <motion.div
              key={topic.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-8 bg-slate-800/40 rounded-[2rem] border border-white/10 hover:border-emerald-500/30 transition-all"
            >
              <div className={`w-12 h-1 mb-6 bg-gradient-to-r ${topic.color} rounded-full`} />
              <h3 className="text-xl font-bold text-white mb-6 group-hover:text-emerald-400 transition-colors">
                {topic.category}
              </h3>
              <ul className="space-y-3">
                {topic.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-slate-400 group-hover:text-slate-200 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600 group-hover:bg-emerald-500" />
                    <span className="text-sm font-medium">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}