import React, { useState, useEffect, useRef } from 'react';
import Tree from 'react-d3-tree';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ZoomIn, ZoomOut, RefreshCw } from 'lucide-react';

const fullTreeData = [
  {
    name: 'Ajith',
    attributes: { 
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
    },
    children: [
      {
        name: 'Dhanush',
        attributes: { 
          image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
        },
        children: [
          { 
            name: 'Govindhasami',
            attributes: { 
              image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
            },
            children: [] 
          },
          { 
            name: 'Pichamuttu',
            attributes: { 
              image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
            },
            children: [] 
          },
          { 
            name: 'Muttaiyaa',
            attributes: { 
              image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
            },
            children: [] 
          },
        ],
      },
      {
        name: 'Vijay',
        attributes: { 
          image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
        },
        children: [
          { 
            name: 'Karupayya',
            attributes: { 
              image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
            },
            children: [] 
          },
          { 
            name: 'VeeraSami',
            attributes: { 
              image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
            },
            children: [] 
          },
          { 
            name: 'Muttaiyaa',
            attributes: { 
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
            },
            children: [] 
          },
        ],
      },
      {
        name: 'KaruppaSami',
        attributes: { 
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
        },
        children: [
          { 
            name: 'Paandurangan',
            attributes: { 
              image: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
            },
            children: [] 
          },
          { 
            name: 'Muttaiyaa',
            attributes: { 
              image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
            },
            children: [] 
          },
          { 
            name: 'Muttaiyaa',
            attributes: { 
              image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&h=256&q=80"
            },
            children: [] 
          },
        ],
      },
    ],
  },
];

const TreeView = () => {
  const [treeData, setTreeData] = useState(() => {
    // Show only root node with its direct children initially
    const rootNode = { ...fullTreeData[0] };
    rootNode.children = rootNode.children.map(child => ({
      ...child,
      children: [] // Hide grandchildren initially
    }));
    return [rootNode];
  });
  
  const [currentPath, setCurrentPath] = useState(['root']);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const treeContainerRef = useRef(null);

  useEffect(() => {
    if (treeContainerRef.current) {
      const { width, height } = treeContainerRef.current.getBoundingClientRect();
      setTranslate({ x: width / 2, y: height / 6 });
    }
  }, []);

  const findNodeByPath = (path) => {
    if (path.length === 1) return fullTreeData[0];
    
    let currentNode = fullTreeData[0];
    for (let i = 1; i < path.length; i++) {
      const childName = path[i];
      currentNode = currentNode.children.find(child => child.name === childName);
      if (!currentNode) return null;
    }
    return currentNode;
  };

  const handleNodeClick = (nodeDatum) => {
    if (!nodeDatum.children || nodeDatum.children.length === 0) {
      // Check if the node has children in the full tree
      const fullNode = findNodeByPath([...currentPath, nodeDatum.name]);
      if (!fullNode || !fullNode.children || fullNode.children.length === 0) return;
    }

    setIsLoading(true);
    const newPath = [...currentPath, nodeDatum.name];
    
    setTimeout(() => {
      const targetNode = findNodeByPath(newPath);
      if (targetNode) {
        const displayNode = {
          ...targetNode,
          children: targetNode.children.map(child => ({
            ...child,
            children: [] // Hide grandchildren
          }))
        };
        setTreeData([displayNode]);
        setCurrentPath(newPath);
      }
      setIsLoading(false);
    }, 500);
  };

  const goBack = () => {
    if (currentPath.length <= 2) {
      resetView();
      return;
    }

    setIsLoading(true);
    const newPath = currentPath.slice(0, -1);
    
    setTimeout(() => {
      const targetNode = findNodeByPath(newPath);
      if (targetNode) {
        const displayNode = {
          ...targetNode,
          children: targetNode.children.map(child => ({
            ...child,
            children: [] // Hide grandchildren
          }))
        };
        setTreeData([displayNode]);
        setCurrentPath(newPath);
      }
      setIsLoading(false);
    }, 500);
  };

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.2, 2));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.2, 0.5));
  };

  const resetView = () => {
    setIsLoading(true);
    setTimeout(() => {
      const rootNode = { ...fullTreeData[0] };
      rootNode.children = rootNode.children.map(child => ({
        ...child,
        children: [] // Hide grandchildren
      }));
      setTreeData([rootNode]);
      setCurrentPath(['root']);
      setZoom(1);
      setIsLoading(false);
    }, 500);
  };

  const renderCustomNode = ({ nodeDatum }) => {
    const hasHiddenChildren = findNodeByPath([...currentPath, nodeDatum.name])?.children?.length > 0;
    
    return (
      <motion.g
        onClick={() => handleNodeClick(nodeDatum)}
        className="cursor-pointer"
        whileHover={{ scale: 1.1 }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      >
        <defs>
          <clipPath id={`clip-${nodeDatum.name}`}>
            <circle cx="0" cy="0" r="25" />
          </clipPath>
        </defs>
        <circle
          r="27"
          fill={hasHiddenChildren ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.1)"}
          stroke={hasHiddenChildren ? "rgba(255, 255, 255, 0.4)" : "rgba(255, 255, 255, 0.2)"}
          strokeWidth="2"
        />
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
          y="45"
          textAnchor="middle"
          fill="white"
          className="text-sm font-medium drop-shadow-lg"
          style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}
        >
          {nodeDatum.name}
        </text>
      </motion.g>
    );
  };

  return (
    <div 
      className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 w-full h-screen bg-[#1a1a1a] flex flex-col items-center justify-center p-4 relative overflow-hidden"
      // style={{
      //   backgroundImage: `
      //     radial-gradient(circle at 10% 20%, rgba(0, 40, 83, 0.8) 0%, rgba(4, 12, 24, 0.9) 90%),
      //     linear-gradient(135deg, rgba(6, 147, 227, 0.1) 0%, rgba(155, 81, 224, 0.1) 100%)
      //   `,
      //   backgroundBlendMode: 'overlay'
      // }}
    >
<motion.h1 
  className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text text-5xl font-extrabold pt-16 mb-6 text-center"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Network Tree
</motion.h1>



      <motion.div
        ref={treeContainerRef}
        className="w-full max-w-6xl h-[75vh] bg-black/30 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 relative"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          boxShadow: '0 0 40px rgba(0, 0, 0, 0.3), inset 0 0 30px rgba(255, 255, 255, 0.05)'
        }}
      >
       
        <AnimatePresence>
          {isLoading && (
            <motion.div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm rounded-2xl z-10 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <RefreshCw className="w-12 h-12 text-white animate-spin" />
            </motion.div>
          )}
        </AnimatePresence>

        <Tree
          data={treeData}
          orientation="vertical"
          translate={translate}
          renderCustomNodeElement={renderCustomNode}
          zoom={zoom}
          pathClassFunc={() => "stroke-white/30 stroke-2"}
          separation={{ siblings: 2, nonSiblings: 2.5 }}
        />
      </motion.div>

      <motion.div 
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {currentPath.length > 1 && (
          <button
            onClick={goBack}
            className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl shadow-lg backdrop-blur-md flex items-center gap-2 transition-all duration-300 border border-white/10"
          >
            <ChevronLeft className="w-5 h-5" />
            Back
          </button>
        )}
        <button
          onClick={handleZoomIn}
          className="p-3 bg-white/5 hover:bg-white/10 text-white rounded-xl shadow-lg backdrop-blur-md transition-all duration-300 border border-white/10"
        >
          <ZoomIn className="w-5 h-5" />
        </button>
        <button
          onClick={handleZoomOut}
          className="p-3 bg-white/5 hover:bg-white/10 text-white rounded-xl shadow-lg backdrop-blur-md transition-all duration-300 border border-white/10"
        >
          <ZoomOut className="w-5 h-5" />
        </button>
        <button
          onClick={resetView}
          className="p-3 bg-white/5 hover:bg-white/10 text-white rounded-xl shadow-lg backdrop-blur-md transition-all duration-300 border border-white/10"
        >
          <RefreshCw className="w-5 h-5" />
        </button>
      </motion.div>

      {/* Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-10 left-10 h-32 w-32 bg-blue-500/20 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-10 right-10 h-40 w-40 bg-purple-500/20 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute top-1/2 left-1/3 h-24 w-24 bg-indigo-500/20 rounded-full blur-2xl opacity-20 animate-pulse" />
      </div>
    </div>
  );
};

export default TreeView;