
import { log } from 'console';
<script lang="ts" setup>
    const {scene: model, nodes} = await useGLTF('/Converse.gtlf.gltf');
    console.log(nodes);
    const node_material = 
</script>
<template>
    <primitive :object="nodes.mesh_0"/>
</template>