import visiteVolume from "components/admin/home/visiteVolume";
import countUp from "components/admin/home/countUp";
import inforCard from "components/admin/home/inforCard";
import dataSourcePie from "components/admin/home/dataSourcePie";
import serviceRequests from "components/admin/home/serviceRequests";
export const homeCtrl = {
  name: "home",
  components: {
    visiteVolume,
    countUp,
    inforCard,
    dataSourcePie,
    serviceRequests
  },
  data() {
    return {
      count: {
        createUser: 496,
        visit: 3264,
        collection: 24389305,
        transfer: 39503498
      }
    };
  },
  created() {},
  methods: {}
};
