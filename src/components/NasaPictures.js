// import React, { Component } from "react";
// import "../App.css";

// import { Route, Link } from "react-router-dom";
// class stateRead extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       state: []
//     };
//     this.getState = this.getState.bind(this);
//   }
//   getState() {
//     fetch("https://nasa-picutres.herokuapp.com/", {
//       headers: {
//         Accept: "application/json"
//       }
//     })
//       .then(res => res.json())
//       .then(res => {
//         console.log(res);
//         this.setState({ state: res });
//         console.log(this.state);
//       });
//   }
//   componentDidMount() {
//     this.getState();
//   }
//   render() {
//     // let rowsInArray = this.state.map(input => {
//     //   //   let obj = {
//     //   //     account_title: input.treasury_account.federal_account.account_title,
//     //   //     award_Id: input.financial_accounts_by_awards_id,
//     //   //     agency_name: input.treasury_account.reporting_agency_name
//     //   //   };
//     //   //   return obj;
//     //   console.log(input);
//     // });

//     return <div className="App"></div>;
//   }
// }

// export default stateRead;
