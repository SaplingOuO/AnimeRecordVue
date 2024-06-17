<template>
    <div ref="canvasContainer"></div>
</template>

<script>
import * as THREE from 'three'

export default {
    mounted() {
        // 創建場景、相機和渲染器
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer()
        renderer.setSize(window.innerWidth, window.innerHeight)
        this.$refs.canvasContainer.appendChild(renderer.domElement)

        // 創建立方體
        const geometry = new THREE.BoxGeometry()
        const materials = [
            new THREE.MeshBasicMaterial({ color: 0xff0000 }), // 右面紅色
            new THREE.MeshBasicMaterial({ color: 0x00ff00 }), // 左面綠色
            new THREE.MeshBasicMaterial({ color: 0x0000ff }), // 上面藍色
            new THREE.MeshBasicMaterial({ color: 0xffff00 }), // 下面黃色
            new THREE.MeshBasicMaterial({ color: 0xff00ff }), // 前面洋紅色
            new THREE.MeshBasicMaterial({ color: 0x00ffff })  // 後面青色
        ]
        const cube = new THREE.Mesh(geometry, materials)
        scene.add(cube)

        // 設置相機位置
        camera.position.z = 5

        // 定義渲染循環
        const animate = function () {
            requestAnimationFrame(animate)

            // 使方塊旋轉
            cube.rotation.x += 0.01
            cube.rotation.y += 0.01

            // 渲染場景
            renderer.render(scene, camera)
        }

        // 啟動渲染循環
        animate()
    }
}
</script>

<style>
canvas {
    width: 100%;
    height: 100%;
    display: block;
}
</style>