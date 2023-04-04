<template>
  <div class="modal-resume">
    <div class="column-left">
        <p></p>
    </div>
    <div class="column-right">a</div>
  </div>
</template>

<script>
export default {
  name: "ResumeOrderModal",
};
</script>

<style lang="scss" scoped>
.modal-resume {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  padding: 20px;
  margin-bottom: 50px;
  background-color: #fff;
  border-radius: 10px;
  filter: drop-shadow(0 0 3px #1344297c);
}

.column-left {
  background-color: blue;
}

.column-right {
  background-color: green;
}
</style>