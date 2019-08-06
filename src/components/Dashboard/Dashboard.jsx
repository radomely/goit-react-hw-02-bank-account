import React, { Component } from 'react';
import shortid from 'shortid';
import { ToastContainer, toast } from 'react-toastify';
import Controls from '../Controls/Controls';
import Balance from '../Balance/Balance';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import styles from './Dashboard.module.css';
import 'react-toastify/dist/ReactToastify.css';

const transactionAlert = {
  incorrectValue: 'Введите сумму для проведения операции!',
  noMoney: 'На счету недостаточно средств для проведения операции!',
  success: 'Операция произведена успешно!',
};

export default class Dashboard extends Component {
  state = {
    inputValue: '',
    transactions: [],
    balance: 0,
    deposit: 0,
    withdrawal: 0,
  };

  handleGetValue = e => {
    this.setState({ inputValue: e.target.value });
  };

  handleDeposit = () => {
    const { inputValue } = this.state;
    const coinsValue = Number(inputValue) * 100;
    if (coinsValue > 0 && Math.ceil(coinsValue) === coinsValue) {
      const transaction = {
        id: shortid.generate(),
        type: 'deposit',
        amount: coinsValue,
        date: new Date().toLocaleString(),
      };
      this.setState(state => ({
        transactions: [...state.transactions, transaction],
        deposit: state.deposit + coinsValue,
        balance: state.balance + coinsValue,
      }));
      this.resetInput();
      toast.success(transactionAlert.success);
    } else {
      toast.error(transactionAlert.incorrectValue);
    }
  };

  handleWithdrawal = () => {
    const { inputValue, balance } = this.state;
    const coinsValue = Number(inputValue) * 100;
    if (coinsValue <= 0 || Math.ceil(coinsValue) !== coinsValue) {
      toast.error(transactionAlert.incorrectValue);
    } else if (balance >= coinsValue) {
      const transaction = {
        id: shortid.generate(),
        type: 'withdrawal',
        amount: coinsValue,
        date: new Date().toLocaleString(),
      };
      this.setState(state => ({
        transactions: [...state.transactions, transaction],
        withdrawal: state.withdrawal + coinsValue,
        balance: state.balance - coinsValue,
      }));
      this.resetInput();
      toast.success(transactionAlert.success);
    } else {
      toast.error(transactionAlert.noMoney);
    }
  };

  resetInput = () => {
    this.setState({
      inputValue: '',
    });
  };

  render() {
    const {
      balance,
      withdrawal,
      deposit,
      transactions,
      inputValue,
    } = this.state;
    return (
      <div className={styles.dashboard}>
        <Controls
          inputValue={inputValue}
          handleGetValue={this.handleGetValue}
          handleDeposit={this.handleDeposit}
          handleWithdrawal={this.handleWithdrawal}
        />
        <Balance
          balance={balance}
          sumDeposit={deposit}
          sumWithdrawal={withdrawal}
        />
        <TransactionHistory transactions={transactions} />
        <ToastContainer closeButton={false} />
      </div>
    );
  }
}
