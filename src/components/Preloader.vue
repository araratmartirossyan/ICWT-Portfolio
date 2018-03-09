<template>
  <transition name="modal">
    <div class="spinner-container">
      <div class="spiner">
        <div aria-hidden="true"></div>
        <div aria-hidden="true"></div>
        <div aria-hidden="true"></div>
      </div>
    </div>
  </transition>
</template>

<style lang="stylus">
.spinner-container {
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  background: rgba(0, 0, 0, 0.5803921568627451);
  transition: opacity .3s ease;
}

.spiner {
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -10px 0 0 -20px;
  display: inline-block;
  position: relative;
  height: 20px;
  width: 40px;
    &>* {
      position: absolute;
      top: 5px;
      height:10px;
      width: 10px;
      border-radius: 50%;
      background: #fff;
      opacity: 0.6;
      transform: translateX(0px);
        &:nth-child(1) {
          left: 0;
          animation: mymove 1.3s infinite ease-in;
        }
        &:nth-child(2) {
          left: 12px;
          animation: mymove 1.3s 0.3s infinite ease-in;
        }
        &:nth-child(3) {
          left: 24px;
          animation: mymove 1.3s 0.6s infinite ease-in;
        }
    }
}

@keyframes mymove {
  0%,
  100%,
  80% {
    opacity: 0.6;
    transform: scale(0.4);
  }
  40% {
    opacity: 1;
    transform: scale(1);
  }
}

.modal-enter {
  opacity: 0;
}
.modal-leave-active {
  opacity 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
