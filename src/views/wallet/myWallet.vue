<template>
  <div class="my-wallet">
    <header class="page-header">
      <span class="btn-left" @click="$router.go(-1)">
        <van-icon name="arrow-left" size=".4rem" />
      </span>
      <div class="header-content">我的钱包</div>
    </header>
    <section class="wallet-box">
      <ul class="wallet-header">
        <li
          class="wallet-item consumption-pool"
          @click="handleToConsumptionPool"
        >
          <van-icon class="main-icon" name="sign" size=".5rem"></van-icon>
          <b class="pool-text">消费矿池</b>
          <div class="consumption-info">
            <van-icon class="count-svg" name="bulb-o" size=".5rem"></van-icon>
            <span class="pool-count">996789009.9</span>
          </div>
        </li>
        <li
          class="wallet-item advertisement-pool"
          @click="handleToAdvertisementPool"
        >
          <van-icon class="main-icon" name="bulb-o" size=".5rem"></van-icon>
          <b class="pool-text">广告矿池</b>
          <div class="advertisement-info">
            <van-icon class="count-svg" name="points" size=".5rem"></van-icon>
            <span class="pool-count">996789009.9</span>
          </div>
        </li>
        <li class="wallet-item node-pool" @click="handleToNodePool">
          <van-icon
            class="main-icon"
            name="certificate"
            size=".5rem"
          ></van-icon>
          <b class="pool-text">节点矿池</b>
          <div class="node-info">
            <van-icon
              class="count-svg"
              name="certificate"
              size=".5rem"
            ></van-icon>
            <span class="pool-count">996789009.9</span>
          </div>
        </li>
      </ul>
    </section>
    <section @click="handleToWalletConsumption" class="wallet-consumption">
      <ul class="wallet-consumption-list">
        <van-icon
          class="wallet-consumption"
          name="balance-pay"
          size=".5rem"
        ></van-icon>
        <li class="wallet-consumption-item">
          <b class="wallet-name">消费钱包</b>
          <span class="wallet-cm">9999.6990CM</span>
          <span class="wallet-cny">≈999.9CNY</span>
        </li>
        <van-icon
          class="wallet-consumption-icon"
          name="discount"
          size=".5rem"
        ></van-icon>
        <van-icon name="arrow" color="#DBDBDB" />
      </ul>
    </section>

    <section class="wallet-balance" @click="handleToWalletBalanceWallet">
      <ul class="wallet-balance-list">
        <van-icon
          class="wallet-balance"
          name="cash-on-deliver"
          size=".5rem"
        ></van-icon>
        <li class="wallet-balance-item">
          <b class="wallet-name">余额钱包</b>
          <span class="wallet-cm">9999.6990CM</span>
          <span class="wallet-cny">≈999.9CNY</span>
        </li>
        <van-icon
          class="wallet-balance-icon"
          name="cash-on-deliver"
          size=".5rem"
        ></van-icon>
        <van-icon name="arrow" color="#DBDBDB" />
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MyWallet",
  data() {
    return {};
  },
  // created() {},
  mounted() {
    console.log(this.$router);
  },
  methods: {
    handleToAdvertisementPool() {
      this.$router.push(`/pool/advertisementPool`);
    },
    handleToConsumptionPool() {
      this.$router.push(`/pool/consumptionPool`);
    },
    handleToNodePool() {
      this.$router.push(`/pool/nodePool`);
    },
    handleToWalletConsumption() {
      this.$router.push(`/wallet/consumerWallet`);
    },
    handleToWalletBalanceWallet() {
      this.$router.push(`/wallet/balanceWallet`);
    },
  },
});
</script>

<style scoped lang="scss">
.my-wallet {
  .page-header {
    position: absolute;
    top: 0;
    width: 100%;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffffff;
    .header-content {
      text-align: center;
      font-size: 18px;
      z-index: 11;
      color: #3a3a3a;
      font-weight: 600;
      flex: 1;
    }
  }
  .wallet-box {
    background-color: #ffffff;
    padding-top: 50px;
    .wallet-header {
      display: flex;
      height: 170px;
      padding: 0 6px;
      background-color: #ffffff;
      justify-content: space-around;
      flex-wrap: nowrap;
      align-items: center;
      .wallet-item {
        padding: 18px 0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        width: 106px;
        height: 130px;
        .main-icon {
          width: 40px;
          height: 40px;
        }
        .pool-text {
          font-size: 14px;
        }
        .pool-count {
          font-size: 13px;
          color: #949497;
        }
        .count-svg {
          // width: 10px;
          // height: 10px;
        }
      }
      .consumption-pool {
        background-color: rgba(#f77925, 0.5);
        border-radius: 4px;
        .consumption-info {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .advertisement-pool {
        background-color: rgba(#cba6fd, 0.5);
        border-radius: 4px;
        .advertisement-info {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
      .node-pool {
        background-color: rgba(#5685ed, 0.5);
        border-radius: 4px;
        .node-info {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
  .wallet-consumption {
    margin: 16px;
    padding: 10px 0;
    background-color: #ffffff;
    border-radius: 4px;
    .wallet-consumption-list {
      padding: 10px 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .wallet-consumption-item {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        .wallet-name {
          font-size: 15px;
        }
        .wallet-cm {
          font-size: 18px;
          color: #3a3a3a;
        }
        .wallet-cny {
          font-size: 15px;
          color: rgba(#3a3a3a, 0.6);
        }
      }
      .wallet-consumption {
        // width: 40px;
        // height: 40px;
      }
      .wallet-consumption-icon {
        width: 80px;
        height: 73px;
      }
    }
  }
  .wallet-balance {
    margin: 16px;
    padding: 10px 0;
    border-radius: 4px;
    background-color: #ffffff;
    .wallet-balance-list {
      padding: 10px 0;
      display: flex;
      justify-content: space-around;
      align-items: center;
      .wallet-balance {
        width: 40px;
        height: 40px;
      }
      .wallet-balance-icon {
        width: 40px;
        height: 40px;
      }
      .wallet-balance-item {
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        .wallet-name {
          font-size: 15px;
        }
        .wallet-cm {
          font-size: 18px;
          color: #3a3a3a;
        }
        .wallet-cny {
          font-size: 15px;
          color: rgba(#3a3a3a, 0.6);
        }
      }
      .wallet-balance-icon {
        width: 80px;
        height: 73px;
      }
    }
  }
}
</style>
