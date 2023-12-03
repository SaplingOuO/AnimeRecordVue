<script>
export default {
}
</script>

<template>
  <button type="button" class="callMenu btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
    <i class="line"></i>
    <i class="line"></i>
    <i class="line"></i>
  </button>

  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title w-100" id="exampleModalLabel">目錄</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-footer bg-dark">
          
          <!-- 路徑於src\router\index.js修改 -->
          <button class="btn w-100 fs-2" data-bs-dismiss="modal">
            <router-link class="fontCSS" to="/">簡介</router-link>
          </button>
          <button class="btn w-100 fs-2" data-bs-dismiss="modal">
            <router-link class="fontCSS" to="/SlicingCoding">切版練習</router-link>
          </button>
          <button class="btn w-100 fs-2" data-bs-dismiss="modal">
            <router-link class="fontCSS" to="/MyComponents">小元件練習</router-link>
          </button>
          <button class="btn w-100 fs-2" data-bs-dismiss="modal">
            <router-link class="fontCSS" to="/MyProject">專案練習</router-link>
          </button>


        </div>
      </div>
    </div>
  </div>
</template>

<style>

.callMenu {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 2;
}

.line {
  display: block;
  height: 4px;
  width: 40px;
  background: #FFF;
  box-shadow: 0 1px 6px #000;
  margin: 10px;
  opacity: 1;
  transition: all 1500ms ease;
}

.fontCSS {
  color: aliceblue;
  font-style: Microsoft JhengHei;
  text-decoration-line: none;
}
</style>