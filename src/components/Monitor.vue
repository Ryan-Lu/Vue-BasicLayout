<template>
    <div class="monitor-content">
        Monitor
        <el-table
                class="lu-table"
                :data="tableData"
                :max-height="500"
                style="width: 100%">
            <el-table-column
                    prop="username"
                    label="姓名"
                    width="180">

            </el-table-column>
            <el-table-column
                    prop="address"
                    label="地址">

            </el-table-column>
            <el-table-column
                    prop="birthday"
                    label="生日"
                    width="180">

            </el-table-column>
            <el-table-column
                    prop="gender"
                    label="性别"
                    width="180">

            </el-table-column>
            <el-table-column
                    prop="hobby"
                    label="爱好"
                    width="180">

            </el-table-column>
            <el-table-column
                    prop="state"
                    label="求职状态"
                    width="180">

            </el-table-column>
            <el-table-column
                    prop="time"
                    label="时间"
                    width="180">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import Request from '../util/request'
    export default {
        data() {
            return {
                tableData: []
            }
        },
        mounted() {
            this._getData()
        },
        methods: {
            _getData() {
                Request.ajax({
                    url: "/table/list",
                    // url: '/test/exception',
                    // method: 'post',
                    data: { params: { page: 1 } }
                })
                    .then(response => {
                        console.log(response.data.items)
                        this.tableData = response.data.items
                    });
            }
        }
    }
</script>

<style lang="scss" scoped>
    .monitor-content {
        .lu-table {
            margin-top: 12px;
            margin-left: 10px;
        }
    }

</style>
