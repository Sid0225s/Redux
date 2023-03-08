import React from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
function Shop() {
  const dispatch = useDispatch();
  const { withdrawMoney, depositMoney } = bindActionCreators(
    actionCreators,
    dispatch
  );
  return (
    <div>
      <h2>withdraw/addmoney</h2>
      <button
        className="btn btn-primary"
        onClick={() => {
          // dispatch(actionCreators.withdrawMoney(100));Without bindAction
          withdrawMoney(100);
        }}
      >
        -
      </button>
      update balance
      <button
        className="btn btn-primary"
        onClick={() => {
          // dispatch(actionCreators.depositMoney(100)); Without bindAction
          depositMoney(100);
        }}
      >
        +
      </button>
    </div>
  );
}

export default Shop;
