<template>
    <div ref="box" style="height: 100vh;">
        <el-container>
            <el-header>

            </el-header>
            <el-main>
                <div class="formBox">
                    <router-view></router-view>
                </div>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import CanvasNest from 'canvas-nest.js';


    export default {
        data() {
            return {
                cn: null,
            }
        },
        mounted() {
            const config = {
                color: '255,0,0',
                count: 88,
            };

            // 在 element 地方使用 config 渲染效果
            this.cn = new CanvasNest(this.$refs.box, config);
        },
        beforeDestroy() {
            this.cn.destroy();
        }
    }
</script>

<style>

</style>
