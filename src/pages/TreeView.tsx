import React, { useState, useEffect, useRef } from 'react';
import Tree from 'react-d3-tree';
import personImage from '../assets/771338_man_512x512.png';

const originalTreeData = [
  {
    name: 'Ajith',
    attributes: { image: personImage },
    children: [
      {
        name: 'Dhanush',
        attributes: { image: personImage },
        children: [
          { name: 'Govindhasami', attributes: { image: personImage } },
          { name: 'Pichamuttu', attributes: { image: personImage } },
        ],
      },
      {
        name: 'Vijay',
        attributes: { image: personImage },
        children: [
          { name: 'Karupayya', attributes: { image: personImage } },
          { name: 'VeeraSami', attributes: { image: personImage } },
        ],
      },
      {
        name: 'KaruppaSami',
        attributes: { image: personImage },
        children: [
          { name: 'Paandurangan', attributes: { image: personImage } },
          { name: 'Muttaiyaa', attributes: { image: personImage } },
        ],
      },
    ],
  },
];

const TreeView = () => {
  const [treeData, setTreeData] = useState(originalTreeData);
  const [history, setHistory] = useState([]);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  const treeContainerRef = useRef(null);

  useEffect(() => {
    if (treeContainerRef.current) {
      const { width, height } = treeContainerRef.current.getBoundingClientRect();
      setTranslate({ x: width / 2, y: height / 6 });
    }
  }, []);

  const handleNodeClick = (nodeDatum) => {
    if (nodeDatum.children) {
      setHistory([...history, treeData]);
      setTreeData([nodeDatum]);
    }
  };

  const goBack = () => {
    if (history.length > 0) {
      setTreeData(history[history.length - 1]);
      setHistory(history.slice(0, -1));
    }
  };

  const renderCustomNode = ({ nodeDatum }) => (
    <g onClick={() => handleNodeClick(nodeDatum)} className="cursor-pointer">
      <defs>
        <clipPath id={`clip-${nodeDatum.name}`}>
          <circle cx="0" cy="0" r="25" />
        </clipPath>
      </defs>
      <image
        href={nodeDatum.attributes?.image}
        x="-25"
        y="-25"
        width="50"
        height="50"
        clipPath={`url(#clip-${nodeDatum.name})`}
      />
      <text
        x="0"
        y="40"
        textAnchor="middle"
        className="fill-white dark:fill-gray-200 font-semibold text-sm drop-shadow-md"
      >
        {nodeDatum.name}
      </text>
    </g>
  );

  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-500 to-purple-600 dark:from-gray-800 dark:to-black flex flex-col items-center justify-center p-4">
      <h1 className="text-5xl font-extrabold text-white dark:text-gray-200 mb-6 text-center drop-shadow-lg">
        Network Tree Visualization
      </h1>
      <div
        ref={treeContainerRef}
        className="w-full max-w-5xl h-[75vh] bg-white/10 backdrop-blur-lg border border-white/20 dark:border-gray-700 dark:bg-gray-900/50 rounded-2xl shadow-2xl p-6 flex justify-center items-center transition-all duration-300"
      >
        <Tree
          data={treeData}
          orientation="vertical"
          translate={translate}
          renderCustomNodeElement={renderCustomNode}
        />
      </div>
      {history.length > 0 && (
        <button
          onClick={goBack}
          className="mt-6 px-8 py-3 bg-white/20 hover:bg-white/30 dark:bg-gray-700 dark:hover:bg-gray-600 text-white dark:text-gray-200 rounded-xl shadow-lg transition-all duration-300"
        >
          Back
        </button>
      )}
    </div>
  );
};

export default TreeView;
