import React, { useState, useCallback } from "react";
import ReactFlow, { Handle, Position, Controls, Background, addEdge } from "reactflow";
import "reactflow/dist/style.css";
import { motion } from "framer-motion";
import { PlusCircle } from "lucide-react";

// Initial User Data
const initialNodes = [
  { id: "1", data: { label: "Root User", image: "https://static.vecteezy.com/system/resources/previews/007/662/797/non_2x/attractive-prosperous-male-in-formal-clothes-poses-in-office-building-works-on-new-businnes-project-successful-man-manager-being-at-work-place-entrepreneur-develops-new-idea-for-success-free-photo.jpg" }, position: { x: 500, y: 50 } },
  { id: "2", data: { label: "User A", image: "https://static.vecteezy.com/system/resources/previews/011/565/294/non_2x/intelligent-young-male-director-or-boss-wears-black-suit-has-happy-expression-confident-in-his-success-stands-near-doors-of-comapny-being-pleased-to-meet-with-business-partners-man-employee-free-photo.JPG" }, position: { x: 300, y: 200 }, parentId: "1" },
  { id: "3", data: { label: "User B", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk-1NFi0NO1_F8Kv36jKNTPMoiVZIwkg3gKw&s" }, position: { x: 500, y: 200 }, parentId: "1" },
  { id: "4", data: { label: "User C", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7zM3dCyQRC-5qEKXeYQTS5Dvi74DwxOmbIFvSkBpXQT3T600UC9XC9Nod8Dxp8lj7soU&usqp=CAU" }, position: { x: 700, y: 200 }, parentId: "1" },
];

// Initial Edges (Connections)
const initialEdges = [
  { id: "e1-2", source: "1", target: "2", type: "smoothstep" },
  { id: "e1-3", source: "1", target: "3", type: "smoothstep" },
  { id: "e1-4", source: "1", target: "4", type: "smoothstep" },
];

// Custom TreeNode Component
const TreeNode = ({ data }) => (
  <motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-lg shadow-lg text-center w-44 border border-white"
  >
    <img src={data.image} alt={data.label} className="w-14 h-14 rounded-full mx-auto mb-2 shadow-md" />
    <p className="font-semibold">{data.label}</p>
    <Handle type="source" position={Position.Bottom} className="bg-white w-2 h-2" />
    <Handle type="target" position={Position.Top} className="bg-white w-2 h-2" />
  </motion.div>
);

function TreeView() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);
  const [userCount, setUserCount] = useState(5);

  // Handle Edge Connection
  const onConnect = useCallback((params) => {
    setEdges((eds) => addEdge({ ...params, animated: true, style: { stroke: "#4F46E5" } }, eds));
  }, []);

  // Add a new user dynamically
  const addUser = () => {
    const newNode = {
      id: `${userCount}`,
      data: { label: `User ${String.fromCharCode(64 + userCount)}`, image: `/images/user${(userCount % 4) + 1}.png` },
      position: { x: Math.random() * 700, y: 300 },
      parentId: "1",
    };
    setNodes((prev) => [...prev, newNode]);
    setEdges((prev) => [...prev, { id: `e1-${userCount}`, source: "1", target: `${userCount}`, type: "smoothstep" }]);
    setUserCount((prev) => prev + 1);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12  mt-16"
    >
      <h1 className="text-3xl  font-bold text-gray-900 dark:text-white mb-8 text-center">Network Tree</h1>

      {/* Add User Button */}
      <div className="flex justify-center mb-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={addUser}
          className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg shadow-md hover:bg-purple-700 transition-all duration-300"
        >
          <PlusCircle className="w-5 h-5" /> Add User
        </motion.button>
      </div>

      {/* ReactFlow Container */}
      <div className="h-[500px] border border-gray-300 rounded-lg shadow-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
  <ReactFlow nodes={nodes} edges={edges} onConnect={onConnect} nodeTypes={{ default: TreeNode }} fitView>
    <Background variant="dots" gap={12} size={1} />
    <Controls />
  </ReactFlow>
</div>

    </motion.div>
  );
}

export default TreeView;
