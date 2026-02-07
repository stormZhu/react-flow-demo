"use client"

import { useState, useCallback } from "react"
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  Background,
  Controls,
  MiniMap,
  NodeChange,
  EdgeChange,
  Node,
  Edge,
  Connection,
} from "@xyflow/react"
import "@xyflow/react/dist/style.css"
import { Button } from "@/components/ui/button"

const initialNodes = [
  { id: "n1", position: { x: 0, y: 0 }, data: { label: "Node 1" } },
  { id: "n2", position: { x: 0, y: 100 }, data: { label: "Node 2" } },
]
const initialEdges = [{ id: "n1-n2", source: "n1", target: "n2" }]

export default function Home() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes)
  const [edges, setEdges] = useState<Edge[]>(initialEdges)

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    []
  )
  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    []
  )
  const onConnect = useCallback(
    (params: Connection) =>
      setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    []
  )

  return (
    <div className="w-screen h-screen">
      <div className="flex gap-2">
        <Button
          onClick={() => {
            setNodes((nodesSnapshot) => {
              // 获取当前节点
              // 检查节点是否已存在
              const nodeExists = nodesSnapshot.some((node) => node.id === "n1")
              if (!nodeExists) {
                // 添加新节点
                const newNodes = [
                  ...nodesSnapshot,
                  {
                    id: "n1",
                    position: { x: 0, y: 0 },
                    data: { label: "Node 1" },
                  },
                ]
                return newNodes
              }
              return nodesSnapshot
            })
          }}
        >
          Add Node
        </Button>

        <Button
          onClick={() =>
            setNodes((nodesSnapshot) =>
              nodesSnapshot.filter((node) => node.id !== "n1")
            )
          }
        >
          Delete Node
        </Button>
      </div>

      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  )
}
