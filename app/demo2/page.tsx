"use client"

import { ReactFlow, Background, Controls, MiniMap } from "@xyflow/react"
import "@xyflow/react/dist/style.css"
import { Button } from "@/components/ui/button"
import { useShallow } from "zustand/react/shallow"
import useStore from "@/lib/store"
import { AppNode, AppState } from "@/lib/type"

const selector = (state: AppState) => ({
  nodes: state.nodes,
  edges: state.edges,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
  setNodes: state.setNodes,
  setEdges: state.setEdges,
})
export default function Home() {
  const {
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    onConnect,
    setNodes,
    setEdges,
  } = useStore(useShallow(selector))

  return (
    <div className="w-screen h-screen">
      <div className="flex gap-2">
        <Button
          onClick={() => {
            // 获取当前节点
            const currentNodes = nodes
            // 检查节点是否已存在
            const nodeExists = currentNodes.some((node) => node.id === "n1")
            if (!nodeExists) {
              // 添加新节点
              const newNodes = [
                ...currentNodes,
                {
                  id: "n1",
                  position: { x: 0, y: 0 },
                  data: { label: "Node 1" },
                },
              ]
              setNodes(newNodes)
            }
          }}
        >
          Add Node
        </Button>

        <Button
          onClick={() => {
            // 获取当前节点
            const currentNodes = nodes
            // 过滤掉要删除的节点
            const newNodes = currentNodes.filter((node) => node.id !== "n1")
            setNodes(newNodes)

            // 同时删除相关的边
            const currentEdges = edges
            const newEdges = currentEdges.filter(
              (edge) => edge.source !== "n1" && edge.target !== "n1"
            )
            setEdges(newEdges)
          }}
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
