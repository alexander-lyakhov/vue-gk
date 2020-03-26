import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: ["http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_01%28pp_w800_h533%29.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_02%28pp_w800_h533%29.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_03%28pp_w800_h533%29.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_04.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_05.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_06%28pp_w800_h533%29.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_07%28pp_w800_h533%29.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_08%28pp_w800_h533%29.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_09%28pp_w800_h533%29.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_10.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_11.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_12%28pp_w800_h533%29.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_13%28pp_w800_h533%29.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_14.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_15.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_16.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_17.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_18.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_19.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_20%28pp_w800_h533%29.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_21.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_22.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_23.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_24%28pp_w800_h533%29.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_25.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_26.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_27%28pp_w800_h533%29.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_28.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_29%28pp_w800_h533%29.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_30%28pp_w800_h533%29.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_31.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_32%28pp_w800_h533%29.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_33%28pp_w800_h533%29.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_34%28pp_w800_h533%29.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_35.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_36.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_37%28pp_w800_h533%29.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_38%28pp_w800_h533%29.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_39%28pp_w800_h533%29.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_40%28pp_w800_h533%29.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_41%28pp_w800_h533%29.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_42.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_43.jpg","http%3A//glenkrohn.com.au/wp-content/uploads/2019/02/GLEN-KROHN-INTERNATIONAL-FASHION-SWIM-PHOTOGRAPHER-BALI-Beachgold-Campaign_44%28pp_w800_h533%29.jpg"]
  },

  mutations: {
  },

  actions: {
  },

  modules: {
  }
})
