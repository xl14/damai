<template>
    <div>
      <Table border :columns="columns7" :data="data6"></Table>
    </div>
</template>

<script>
    export default {
        name: "TablePurchaser",
        data () {
          return {
            columns7: [
              {
                type: 'index',
                width: 60,
                align: 'center'
              },
              {
                title: '姓名',
                key: 'name',
                render: (h, params) => {
                  return h('div', [
                    h('Icon', {
                      props: {
                        type: 'person'
                      }
                    }),
                    h('strong', params.row.name)
                  ]);
                }
              },
              {
                title: '卡类型',
                key: 'CardType'
              },
              {
                title: '身份证号码',
                key: 'IDnumber'
              },
              {
                title: '操作',
                key: 'action',
                width: 150,
                align: 'center',
                render: (h, params) => {
                  return h('div', [
                    h('Button', {
                      props: {
                        type: 'error',
                        size: 'small'
                      },
                      on: {
                        click: () => {
                          this.remove(params.index)
                        }
                      }
                    }, '删除')
                  ]);
                }
              }
            ],
            data6: [
              {
                name: 'John Brown',
                IDnumber: 123456487913515251,
                CardType: '身份证'
              },
              {
                name: 'Jim Green',
                IDnumber: 123456487913515251,
                CardType: '身份证'
              },
              {
                name: 'Joe Black',
                IDnumber: 123456487913515251,
                CardType: '身份证'
              },
              {
                name: 'Jon Snow',
                IDnumber: 123456487913515251,
                CardType: '身份证'
              }
            ]
          }
        },
        methods: {
          show (index) {
            this.$Modal.info({
              title: 'User Info',
              content: `Name：${this.data6[index].name}<br>Age：${this.data6[index].age}<br>Address：${this.data6[index].address}`
            })
          },
          remove (index) {
            this.data6.splice(index, 1);
          }
        }
    }
</script>

<style scoped>

</style>
