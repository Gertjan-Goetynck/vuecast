<template>
  <div class="box is-info">
    <p>
      <slot></slot>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.box {
  background-color: gray;
  padding: 10px;
  border: 1px solid black;
  margin: 5px;
}
</style>