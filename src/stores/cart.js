import { defineStore } from "pinia";
import { useStoreProducts } from "./products";

export const useStoreCart = defineStore("cart", {
  state: () => ({
    items: [],
  }),
  //合計金額の計算(total関数) reducer関数を利用してカートに保存されている商品を順番に取り出し金額合算
  getters: {
    total: (state) => {
        return state.items.reduce((total, product) => {
            return total + product.price * product.quantity;
        }, 0);
    }
  },
  actions: {
    addCart(product) {
      const { decrementInventory } = useStoreProducts();

      //find関数で同商品がカートにないかチェック(ない場合はquantityを１にしてカートに追加、既にある場合はquantityを増やす)
      const item = this.items.find((item) => item.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        this.items.push({ ...product, quantity: 1 });
      }
      decrementInventory(product.id);
    },
  },
});
