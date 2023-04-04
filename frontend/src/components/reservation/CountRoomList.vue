<template>
  <div class="countContainer" v-if="show">
    <p ref="countRoomList" class="countRoomList">{{count}}x</p>
    <p class="roomNameList">{{roomName}}</p>
    <button @click="() => {show = false; $emit('update')}">Remover</button>
  </div>
</template>

<script>
export default {
  name: "CountRoomList",
  data() {
    return {
        count: 0,
        show: true,
    };
  },
    emits: ['update'],
  props: {
    roomName: {
        type: [String,Object,Array]
    },
    destroy: {
        type: Function
    }
  }
};
</script>

<style lang="scss" scoped>
div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 12px;
}

button {
    cursor: pointer;
}
</style>