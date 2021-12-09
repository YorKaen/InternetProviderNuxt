<template lang="pug">
.table-content(:class="tableContent.tablename")
    .table-title(v-if="tableContent.tabletitle") {{ tableContent.tabletitle }}
    slot
    .table__head
        .td(v-for="itemHead in tableContent.theadarray" :key="itemHead") {{ itemHead }}
    .table__body(v-for="itemBody in tableContent.tbodyarray" :key="itemBody")
        .table__row(v-for="itemBodyRow in itemBody" :key="itemBody")
            .td(v-for="itemLane in itemBodyRow" :key="itemLane") {{ itemLane }}

</template>

<script>
// import XXX from "@/components/XXX.vue";
export default {
  name: "TableBasic",
  components: {},
  props: ["tableContent"],
  data: () => ({}),
  created() {},
  mounted() {
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
//Project Specific
.table-difam {
  .table-title {
    text-align: center;
    font-size: em(32);
  }
  .table__head {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: #f9f9f9;
    border-radius: 10px;
    color: #4d4d4d;
    padding: 0 11px;
    @include breakpoint(md) {
      padding: 0 20px;
    }
    @include breakpoint(xl) {
      padding: 0 120px;
    }

    .td {
      width: 100%;
      text-align: left;
      padding: 3px 0;
      font-weight: 600;
      @include breakpoint(sm) {
        padding: 14px 0;
      }
      @include breakpoint(xl) {
        padding: 50px 0;
      }
    }
  }
  .table__body {
    .table__row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 0 11px;
      @include breakpoint(md) {
        padding: 0 20px;
      }
      @include breakpoint(xl) {
        padding: 0 120px;
      }
      .td {
        width: 100%;
        text-align: left;
        padding: 8px 0;
        color: #000000;
        @include breakpoint(xl) {
          padding: 24px 0;
        }
      }
    }
    .table__row:nth-child(even) {
      border-radius: 10px;
      background-color: #f9f9f9;
    }
  }
}

.table-01 {
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  @include breakpoint(md) {
    overflow: unset;
  }
  .table-title {
    color: #519c4f;
    font-size: em(32);
    font-weight: 700;
    margin-bottom: 38px;
  }
  .table__head {
    width: 100%;
    min-width: 540px;
  }
  .table__body {
    width: 100%;
    min-width: 540px;
  }
}

.table-02 {
  width: 100%;
  max-width: 460px;
  margin: 0 auto;
  @include breakpoint(xl) {
    max-width: 673px;
  }
    .table-title {
        color: #519c4f;
        font-size: em(32);
        font-weight: 700;
        margin-bottom: 24px;

    }
    .table__head{
        margin-top: 38px;
    }

}
</style>
