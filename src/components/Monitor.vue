<template>
    <div class="monitor-content">
        Monitor
        <el-table
                v-loading="loading"
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

        <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                layout="total, sizes, prev, pager, next, jumper"
                :page-size="pageSize"
                :total="total">
        </el-pagination>
    </div>
</template>

<script>
    import Request from '../util/request'
    export default {
        data() {
            return {
                loading: false,
                total: 0,
                tableData: [],
                pageNo: 1,
                pageSize: 5
            }
        },
        mounted() {
            this._getData()
        },
        methods: {
            handleSizeChange(val) {
                this.pageNo = 1
                this.pageSize = val
                this._getData()
            },
            handleCurrentChange (val) {
                console.log(val)
                this.pageNo = val
                this._getData()
            },
            _getData() {
                this.loading = true
                Request.ajax({
                    // url: "/table/list",
                    url: '/test/exception',
                    // method: 'post',
                    data: { params: { page: this.pageNo, pageSize: this.pageSize } }
                })
                    .then(response => {
                        this.loading = false
                        console.log(response.data.items)
                        this.total = response.data.total
                        this.tableData = response.data.items
                    })
                    .catch(() => {
                        this.loading = false
                    })
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
