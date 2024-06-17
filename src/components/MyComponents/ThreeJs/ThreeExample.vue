<script>
import * as THREE from 'three';

export default {
    data() {
        return{
            Data:[
                {shape:'cube'},
                {shape:'sphere'},
                {shape:'cone'},
                {shape:'capsule'},
                {shape:'cylinder'},
                {shape:'dodecahedron'},
                {shape:'icosahedron'},
                {shape:'torus'},
                {shape:'torusknot'},
            ],
        };
    },
    mounted() {
        this.scenes=[];
        this.cameras=[];
        this.renderers=[];
        this.meshes=[];
        this.edges = [];
            
        this.Data.forEach((item, index) =>{
            this.initThreeJS(index, item.shape);
        });
        
        this.animate();
    },
    methods: {
        initThreeJS(index, shape){
            const scene = new THREE.Scene();
            const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer();
            renderer.setSize(250, 250);

            const containerRef = `canvasContainer${index}`;
            this.$nextTick(() => {
                this.$refs[containerRef][0].appendChild(renderer.domElement);
            });

            let geometry;
            switch(shape){
                case 'cube':
                    geometry = new THREE.BoxGeometry();
                    break;
                case 'sphere':
                    geometry = new THREE.SphereGeometry();
                    break;
                case 'cone':
                    geometry = new THREE.ConeGeometry();
                    break;
                case 'capsule':
                    geometry = new THREE.CapsuleGeometry();
                    break;
                case 'cylinder':
                    geometry = new THREE.CylinderGeometry();
                    break;
                case 'dodecahedron':
                    geometry = new THREE.DodecahedronGeometry();
                    break;
                case 'icosahedron':
                    geometry = new THREE.IcosahedronGeometry();
                    break;
                case 'torus':
                    geometry = new THREE.TorusGeometry();
                    break;
                case 'torusknot':
                    geometry = new THREE.TorusKnotGeometry();
                    break;
                default:
                    geometry = new THREE.BoxGeometry();
            }

            const material = new THREE.MeshBasicMaterial({color:0x00ff00});
            const mesh = new THREE.Mesh(geometry, material);
            scene.add(mesh);

            const edgesGeometry = new THREE.EdgesGeometry(geometry);
            const edgesMaterial = new THREE.LineBasicMaterial({ color: 0x000000 });
            const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);
            scene.add(edges);

            camera.position.z = 5;

            this.scenes.push(scene);
            this.cameras.push(camera);
            this.renderers.push(renderer);
            this.meshes.push(mesh);
            this.edges.push(edges);
        },
        animate() {
            requestAnimationFrame(this.animate);
            this.meshes.forEach((mesh) => {
                mesh.rotation.x += 0.01;
                mesh.rotation.y += 0.01;
                mesh.rotation.z += 0.01;
            });
            this.edges.forEach((edges) => {
                edges.rotation.x += 0.01;
                edges.rotation.y += 0.01;
                edges.rotation.z += 0.01;
            });
            this.renderers.forEach((renderer, index) => {
                renderer.render(this.scenes[index], this.cameras[index])
            });
        },
    },
}
</script>

<template>
    <div class="row g-0">
        <div class="col g-4 d-flex justify-content-evenly" v-for="(item, index) in Data" :key="index" :ref="'canvasContainer' + index"></div>
    </div>
</template>

<style>
</style>