<template>
    <div style="z-index: 999;">
        <div class="pane left-pane">
            <mu-flex justify-content="start" align-items="center" direction="column" style="height:100%">

                <mu-flex justify-content="start" align-items="center" direction="column" style="height:50%">
                    <div :style="changeStyle(0)">
                        <mu-button class="icon-button" icon color="grey" :ripple="false" @click="changePage(0)">
                            <mu-icon size="36" value="code"></mu-icon>
                        </mu-button>
                    </div>
                    <div :style="changeStyle(1)">
                        <mu-button class="icon-button" icon color="grey" :ripple="false" @click="changePage(1)">
                            <mu-icon size="36" value="file_upload"></mu-icon>
                        </mu-button>
                    </div>
                    <div :style="changeStyle(2)">
                        <mu-button class="icon-button" icon color="grey" :ripple="false" @click="changePage(2)">
                            <mu-icon size="36" value="search"></mu-icon>
                        </mu-button>
                    </div>
                    <div :style="changeStyle(3)">
                        <mu-button class="icon-button" icon color="grey" :ripple="false" @click="changePage(3)">
                            <mu-icon size="36" value="extension"></mu-icon>
                        </mu-button>
                    </div>
                    <div>
                        <a href="http://www.1zlab.com/doc/emp" target="_blank">
                            <mu-button class="icon-button" icon color="grey" :ripple="false">
                                <mu-icon size="36" value="book"></mu-icon>
                            </mu-button>
                        </a>
                    </div>
                </mu-flex>

                <mu-flex justify-content="end" align-items="center" direction="column" style="height:50%">
                    <mu-button class="icon-button" icon color="green" @click="runScript">
                        <mu-icon size="36" value="play_arrow"></mu-icon>
                    </mu-button>
                    <mu-button class="icon-button" icon color="green" @click="gcCollect">
                        <mu-icon size="36" value="memory"></mu-icon>
                    </mu-button>
                    <mu-button class="icon-button" icon color="yellow" @click="startConnect">
                        <mu-icon size="36" value="power"></mu-icon>
                    </mu-button>
                </mu-flex>

            </mu-flex>
        </div>
    </div>
</template>

<script>
import signals from "./signals.js";
import slots from "./slots.js";
import listener from "../../plugins/mixinEventsListener.js";
import onEvent from "../../plugins/mixinOnEvents.js";
export default {
  name: "sideBar",
  mixins: [signals, slots, listener, onEvent],
  props: [],
  data() {
    return {
      index: 0,
      selectStyle: [{ background: "#4CAF5099" }, { background: "#fff0" }],
      //   routeMap: ["/ide"],
      connected: false
    };
  },
  mounted: function() {
    this.$nextTick(function() {});
  },
  methods: {
    changePage(index) {
      if (index === this.index) {
        this.$send(this.SIGNAL_TOGGLE_PANE(this));
      } else this.$send(this.SIGNAL_SHOW_PANE(this));
      this.index = index;
      this.$send(this.SIGNAL_SWITCH(this));
    },
    changeStyle(index) {
      if (this.index === index) return this.selectStyle[0];
      return this.selectStyle[-1];
    },
    startConnect() {
      this.$send(this.SIGNAL_OPEN_CONFIG(this));
    },
    runScript() {
      this.$send(this.SIGNAL_RUN(this));
    },
    gcCollect() {
      this.$send(this.SIGNAL_GC_COLLECT(this));
    }
  },
  watch: {}
};
</script>

<style scoped>
.left-pane {
  background: #333333 !important;
  height: 97vh;
  max-width: 72px;
  min-width: 72px;
  padding: 0;
}
.icon-button {
  margin: 10px;
}
</style>
